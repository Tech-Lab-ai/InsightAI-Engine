package middleware

import (
	"context"
)

type contextKey string

const (
	tenantIDKey contextKey = "tenant_id"
	userIDKey   contextKey = "user_id"
	userRoleKey contextKey = "user_role"
)

// WithTenant adiciona o ID do tenant ao contexto.
func WithTenant(ctx context.Context, tenantID string) context.Context {
	return context.WithValue(ctx, tenantIDKey, tenantID)
}

// GetTenantFromCtx extrai o ID do tenant do contexto.
func GetTenantFromCtx(ctx context.Context) (string, bool) {
	tenantID, ok := ctx.Value(tenantIDKey).(string)
	return tenantID, ok
}

// WithUser adiciona o ID e o papel do usuário ao contexto.
func WithUser(ctx context.Context, userID, role string) context.Context {
	ctx = context.WithValue(ctx, userIDKey, userID)
	ctx = context.WithValue(ctx, userRoleKey, role)
	return ctx
}

// GetUserIDFromCtx extrai o ID do usuário do contexto.
func GetUserIDFromCtx(ctx context.Context) (string, bool) {
	userID, ok := ctx.Value(userIDKey).(string)
	return userID, ok
}

// GetUserRoleFromCtx extrai o papel do usuário do contexto.
func GetUserRoleFromCtx(ctx context.Context) (string, bool) {
	role, ok := ctx.Value(userRoleKey).(string)
	return role, ok
}
