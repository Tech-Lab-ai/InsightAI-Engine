package domain

import "time"

// User representa a entidade de usuário no domínio.
type User struct {
	ID        string
	TenantID  string
	Email     string
	Password  string // Hash da senha
	Role      string // Ex: "admin", "member", "viewer"
	CreatedAt time.Time
	UpdatedAt time.Time
}
