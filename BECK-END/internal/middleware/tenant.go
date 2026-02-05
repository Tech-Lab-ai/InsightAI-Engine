package middleware

import (
	"net/http"

	"insightai/internal/config"
	"insightai/pkg/errors"
)

// TenantResolver é um middleware que extrai o tenant ID do header e o adiciona ao contexto.
func TenantResolver(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		tenantID := r.Header.Get(config.Cfg.TenantHeader)
		if tenantID == "" {
			errors.BadRequest(w, "Tenant header ausente")
			return
		}

		ctx := WithTenant(r.Context(), tenantID)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}
