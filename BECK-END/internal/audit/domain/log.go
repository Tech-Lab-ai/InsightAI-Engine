package domain

import "time"

// AuditLog representa um registro de auditoria imutável.
type AuditLog struct {
	ID         string
	Timestamp  time.Time
	ActorID    string                 // Quem realizou a ação (usuário, sistema, admin)
	Action     string                 // O que foi feito (ex: "user.login", "tenant.create")
	ResourceID string                 // O recurso afetado (ex: ID do usuário, ID do tenant)
	Details    map[string]interface{} // Contexto adicional (ex: IP, parâmetros)
	TenantID   string                 // O tenant ao qual o evento pertence (pode ser vazio para ações globais)
}
