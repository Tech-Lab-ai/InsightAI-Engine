package middleware

import (
	"net/http"

	"insightai/pkg/errors"
)

// RequireRole é um middleware que verifica se o usuário no contexto tem o papel necessário.
func RequireRole(requiredRole string) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			role, ok := GetUserRoleFromCtx(r.Context())
			if !ok {
				errors.Forbidden(w, "Acesso negado: papel de usuário não encontrado no contexto.")
				return
			}

			// Lógica de verificação de papel. Em um sistema real, isso pode ser mais complexo,
			// envolvendo uma hierarquia de papéis ou múltiplas permissões.
			if role != requiredRole {
				errors.Forbidden(w, "Acesso negado: permissões insuficientes.")
				return
			}

			next.ServeHTTP(w, r)
		})
	}
}
