package server

import (
	"encoding/json"
	"net/http"

	"insightai/internal/admin/handler"
	"insightai/internal/admin/service"
	authhandler "insightai/internal/auth/handler"
	"insightai/internal/audit"
	audithandler "insightai/internal/audit/handler"
	auditrepo "insightai/internal/audit/repository"
	"insightai/internal/billing"
	billinghandler "insightai/internal/billing/handler"
	billingrepo "insightai/internal/billing/repository"
	"insightai/internal/config"
	"insightai/internal/middleware"
	"insightai/internal/rbac"
	rbacrepo "insightai/internal/rbac/repository"
	"insightai/internal/support"
	supporthandler "insightai/internal/support/handler"
	supportrepo "insightai/internal/support/repository"
	"insightai/internal/tenants/repository"
	userrepo "insightai/internal/users/repository"
	userservice "insightai/internal/users/service"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/cors"
)

func New() http.Handler {
	r := chi.NewRouter()

	// Base Middlewares
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   config.Cfg.CORSOrigins,
		AllowedMethods:   config.Cfg.CORSMethods,
		AllowedHeaders:   config.Cfg.CORSHeaders,
		ExposedHeaders:   []string{"X-Request-Id"},
		AllowCredentials: true,
		MaxAge:           300,
	}))
	r.Use(middleware.RequestID)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	// --- Repositórios ---
	userRepo := userrepo.NewUserRepoMock()
	tenantRepo := repository.NewTenantRepoMock()
	auditRepo := auditrepo.NewAuditRepoMock()
	billingRepo := billingrepo.NewBillingRepoMock()
	supportRepo := supportrepo.NewSupportRepoMock()
	rbacRepo := rbacrepo.NewRBACRepoMock()

	// --- Serviços ---
	auditService := audit.NewAuditService(auditRepo)
	userService := userservice.NewUserService(userRepo)
	billingService := billing.NewBillingService(billingRepo, auditService)
	supportService := support.NewSupportService(supportRepo, auditService)
	rbacService := rbac.NewRBACService(rbacRepo)
	adminService := service.NewAdminService(tenantRepo, auditService)

	// --- Handlers ---
	authHandler := authhandler.NewAuthHandler(userService)
	auditHandler := audithandler.NewAuditHandler(auditService)
	billingHandler := billinghandler.NewBillingHandler(billingService)
	supportHandler := supporthandler.NewSupportHandler(supportService)
	adminHandler := handler.NewAdminHandler(adminService)

	// --- Rotas Públicas ---
	r.Get("/health", healthCheckHandler)
	r.Route("/auth", func(r chi.Router) {
		r.Post("/login", authHandler.Login)
		r.Post("/refresh", authHandler.Refresh)
	})
	r.Post("/webhooks/asaas", billingHandler.AsaasWebhook)

	// --- Rotas Privadas de Cliente (/v1) ---
	r.Route("/v1", func(r chi.Router) {
		r.Use(middleware.Auth)
		r.Use(middleware.TenantResolver)

		r.Get("/users/me", func(w http.ResponseWriter, r *http.Request) {
			userID, _ := middleware.GetUserIDFromCtx(r.Context())
			tenantID, _ := middleware.GetTenantFromCtx(r.Context())
			w.Write([]byte("User ID: " + userID + " | Tenant ID: " + tenantID))
		})

		// Rotas de Suporte do Cliente
		r.Route("/support/tickets", func(r chi.Router) {
			r.Post("/", supportHandler.CreateTicket)
			r.Get("/", supportHandler.GetActiveTicketForTenant)
			r.Post("/{id}/messages", supportHandler.AddMessageToTicket)
		})
	})

	// --- Rotas do Painel de Administração ---
	r.Route("/admin", func(r chi.Router) {
		r.Use(middleware.Auth)
		r.Use(middleware.RequireRole(rbacService, "platform_admin")) // Middleware de RBAC

		r.Get("/dashboard", adminHandler.GetDashboardMetrics)

		// Admin - Tenants
		r.Route("/tenants", func(r chi.Router) {
			r.Get("/", adminHandler.ListTenants)
			r.Get("/{id}", adminHandler.GetTenant)
			r.Post("/{id}/suspend", adminHandler.SuspendTenant)
		})

		// Admin - Users
		r.Get("/users", adminHandler.ListGlobalUsers)

		// Admin - Audit
		r.Get("/audit-logs", auditHandler.GetAuditLogs)

		// Admin - Support
		r.Get("/support/tickets", supportHandler.GetAllTickets)
	})

	return r
}

func healthCheckHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}
