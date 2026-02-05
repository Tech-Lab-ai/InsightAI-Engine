package domain

import "time"

// Integration representa uma integração externa disponível na plataforma.
type Integration struct {
	ID          string
	Name        string // "Slack", "Jira"
	Description string
	Enabled     bool
}

// TenantIntegration é a configuração de uma integração para um tenant específico.
type TenantIntegration struct {
	ID            string
	TenantID      string
	IntegrationID string
	Enabled       bool
	Config        map[string]string // Contém credenciais criptografadas e configurações
	CreatedAt     time.Time
	UpdatedAt     time.Time
}
