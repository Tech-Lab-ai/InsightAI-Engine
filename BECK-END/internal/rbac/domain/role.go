package domain

// Permission é uma string que define uma permissão (ex: "users:create").
type Permission string

// Role define um papel com um conjunto de permissões.
type Role struct {
	Name        string
	Permissions []Permission
}

const (
	// Papéis da plataforma
	PlatformAdminRole = "platform_admin"

	// Papéis do Tenant
	TenantAdminRole = "tenant_admin"
	MemberRole      = "member"
	ViewerRole      = "viewer"
)

const (
	// Exemplos de Permissões
	UsersRead   Permission = "users:read"
	UsersWrite  Permission = "users:write"
	BillingRead Permission = "billing:read"
	AuditRead   Permission = "audit:read"
)
