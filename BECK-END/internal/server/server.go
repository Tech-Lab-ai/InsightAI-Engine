package server

import (
	"encoding/json"
	"net/http"

	"insightai/internal/auth/handler"
	"insightai/internal/config"
	"insightai/internal/middleware"
	"insightai/internal/users/repository"
	userservice "insightai/internal/users/service"

	"github.com/go-chi/chi/v5"
	chimid "github.com/go-chi/chi/v5/middleware"
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
	r.Use(chimid.RequestID)
	r.Use(middleware.Logger) // Nosso logger estruturado
	r.Use(chimid.Recoverer)

	// Repositórios
	userRepo := repository.NewUserRepoMock()

	// Serviços
	userService := userservice.NewUserService(userRepo)

	// Handlers
	authHandler := handler.NewAuthHandler(userService)

	// Rotas Públicas
	r.Get("/health", healthCheckHandler)
	r.Route("/auth", func(r chi.Router) {
		r.Post("/login", authHandler.Login)
		r.Post("/refresh", authHandler.Refresh)
	})

	// Rotas Privadas (Protegidas por Autenticação e Tenant)
	r.Route("/v1", func(r chi.Router) {
		r.Use(middleware.Auth)
		r.Use(middleware.TenantResolver)

		// Exemplo: /v1/users/me
		r.Route("/users", func(r chi.Router) {
			r.Get("/me", func(w http.ResponseWriter, r *http.Request) {
				userID, _ := middleware.GetUserIDFromCtx(r.Context())
				tenantID, _ := middleware.GetTenantFromCtx(r.Context())

				// Aqui você chamaria o serviço de usuário para obter os detalhes
				w.Write([]byte("User ID: " + userID + " | Tenant ID: " + tenantID))
			})
		})
	})

	// Rotas do Painel de Administração
	r.Route("/admin", func(r chi.Router) {
		r.Use(middleware.Auth)
		r.Use(middleware.RequireRole("platform_admin")) // Middleware de RBAC

		r.Get("/dashboard", func(w http.ResponseWriter, r *http.Request) {
			w.Write([]byte("Admin Dashboard Data"))
		})
	})

	return r
}

func healthCheckHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}
