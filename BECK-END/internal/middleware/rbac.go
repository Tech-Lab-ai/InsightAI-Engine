package middleware

import (
	"insightai/internal/rbac/domain"
	"insightai/internal/rbac/service"
	"insightai/pkg/errors"
	"net/http"
)

// RequireRole é um middleware de RBAC que verifica se o usuário tem a permissão necessária.
func RequireRole(rbacSvc service.RBACService, requiredRole string) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			role, ok := GetUserRoleFromCtx(r.Context())
			if !ok {
				errors.Forbidden(w, "Acesso negado: papel de usuário não encontrado no contexto.")
				return
			}

			// Em um sistema real, você mapearia o endpoint para uma permissão específica.
			// Aqui, estamos simplificando para verificar se o papel é o esperado.
			if role != requiredRole {
				errors.Forbidden(w, "Acesso negado: permissões insuficientes.")
				return
			}

			next.ServeHTTP(w, r)
		})
	}
}

// CheckPermission é um middleware mais granular que verifica uma permissão específica.
func CheckPermission(rbacSvc service.RBACService, permission domain.Permission) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			role, ok := GetUserRoleFromCtx(r.Context())
			if !ok {
				errors.Forbidden(w, "Acesso negado: papel de usuário não encontrado no contexto.")
				return
			}

			can, err := rbacSvc.Can(r.Context(), role, permission)
			if err != nil {
				errors.InternalError(w, "Erro ao verificar permissões.")
				return
			}
			if !can {
				errors.Forbidden(w, "Acesso negado: permissões insuficientes.")
				return
			}

			next.ServeHTTP(w, r)
		})
	}
}
