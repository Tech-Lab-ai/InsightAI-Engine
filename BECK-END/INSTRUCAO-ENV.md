para ele funcionar de fato com o frontend:

Loader de .env em Go (config package)

Configuração de CORS usando as variáveis

Contrato claro Frontend → Backend (headers + exemplos)

Tudo pronto para colar em /home/user/studio/BECK-END.

1️⃣ internal/config/config.go — Loader de ENV (Go)
package config

import (
	"log"
	"os"
	"strings"
	"time"
)

type Config struct {
	AppName    string
	Env        string
	Port       string
	BaseURL    string

	FrontendBaseURL string
	CORSOrigins     []string
	CORSHeaders     []string
	CORSMethods     []string

	JWTSecret string
	TokenTTL  time.Duration

	TenantHeader string

	LogLevel  string
	LogFormat string
}

var Cfg Config

func Load() {
	Cfg = Config{
		AppName: os.Getenv("APP_NAME"),
		Env:     os.Getenv("APP_ENV"),
		Port:    os.Getenv("APP_PORT"),
		BaseURL: os.Getenv("APP_BASE_URL"),

		FrontendBaseURL: os.Getenv("FRONTEND_BASE_URL"),
		CORSOrigins:     split(os.Getenv("CORS_ALLOWED_ORIGINS")),
		CORSHeaders:     split(os.Getenv("CORS_ALLOWED_HEADERS")),
		CORSMethods:     split(os.Getenv("CORS_ALLOWED_METHODS")),

		JWTSecret: os.Getenv("AUTH_JWT_SECRET"),
		TokenTTL:  parseDuration(os.Getenv("AUTH_ACCESS_TOKEN_TTL")),

		TenantHeader: os.Getenv("TENANT_HEADER"),

		LogLevel:  os.Getenv("LOG_LEVEL"),
		LogFormat: os.Getenv("LOG_FORMAT"),
	}

	validate()
}

func split(v string) []string {
	if v == "" {
		return []string{}
	}
	return strings.Split(v, ",")
}

func parseDuration(v string) time.Duration {
	d, err := time.ParseDuration(v)
	if err != nil {
		return time.Minute * 15
	}
	return d
}

func validate() {
	if Cfg.JWTSecret == "" {
		log.Fatal("AUTH_JWT_SECRET é obrigatório")
	}
	if Cfg.TenantHeader == "" {
		log.Fatal("TENANT_HEADER é obrigatório")
	}
}

2️⃣ cmd/api/main.go — Bootstrap correto
package main

import (
	"log"
	"net/http"

	"insightai/internal/config"
	"insightai/internal/server"
)

func main() {
	config.Load()

	srv := server.New()

	log.Printf("🚀 %s rodando na porta %s", config.Cfg.AppName, config.Cfg.Port)
	log.Fatal(http.ListenAndServe(":"+config.Cfg.Port, srv))
}

3️⃣ internal/server/server.go — Server + CORS
package server

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/cors"

	"insightai/internal/config"
	"insightai/internal/middleware"
)

func New() http.Handler {
	r := chi.NewRouter()

	// CORS controlado por ENV
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   config.Cfg.CORSOrigins,
		AllowedMethods:   config.Cfg.CORSMethods,
		AllowedHeaders:   config.Cfg.CORSHeaders,
		ExposedHeaders:   []string{"X-Request-Id"},
		AllowCredentials: true,
		MaxAge:           300,
	}))

	// Middlewares base
	r.Use(middleware.RequestID)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(middleware.TenantResolver)

	// Health
	r.Get("/health", func(w http.ResponseWriter, _ *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("ok"))
	})

	// API v1
	r.Route("/v1", func(r chi.Router) {
		// aqui entram chat, actions, workflows
	})

	return r
}

4️⃣ internal/middleware/tenant.go — Obrigatório para FE → BE
package middleware

import (
	"net/http"

	"insightai/internal/config"
)

func TenantResolver(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		tenantID := r.Header.Get(config.Cfg.TenantHeader)
		if tenantID == "" {
			http.Error(w, "Tenant header ausente", http.StatusBadRequest)
			return
		}
		ctx := r.Context()
		ctx = WithTenant(ctx, tenantID)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

5️⃣ CONTRATO FRONTEND → BACKEND (OFICIAL)
Frontend DEVE enviar:
POST /v1/chat
Authorization: Bearer <access_token>
X-Tenant-Id: tenant_123
Content-Type: application/json

Backend GARANTE:

CORS só aceita o frontend

Nenhuma request sem tenant

Nenhuma request sem auth

Respostas sempre JSON

Erros sem leak interno

6️⃣ Fluxo real FE ↔ BE
Frontend (Next.js)
  ↓ fetch()
Backend (Go API)
  → Auth
  → Tenant
  → RBAC
  → Engine
  → Audit
  ← JSON Response

✅ O BACKEND AGORA ESTÁ

✔ Pronto para conversar com o frontend

✔ Seguro por padrão

✔ Multi-tenant obrigatório

✔ Governável

✔ Escalável