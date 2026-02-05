package middleware

import (
	"net/http"
	"strings"

	"insightai/internal/config"
	"insightai/pkg/errors"
	"insightai/pkg/token"
)

func Auth(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		authHeader := r.Header.Get("Authorization")
		if authHeader == "" {
			errors.Unauthorized(w, "Authorization header ausente")
			return
		}

		parts := strings.Split(authHeader, " ")
		if len(parts) != 2 || parts[0] != "Bearer" {
			errors.Unauthorized(w, "Formato do header de autorização inválido")
			return
		}

		claims, err := token.ValidateToken(parts[1], config.Cfg.JWTSecret)
		if err != nil {
			errors.Unauthorized(w, "Token inválido ou expirado")
			return
		}

		// Adiciona informações do usuário ao contexto da requisição
		ctx := WithUser(r.Context(), claims.Subject, claims.Role)
		next.ServeHTTP(w, r.WithContext(ctx))
	})
}
