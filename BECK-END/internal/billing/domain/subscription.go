package domain

import "time"

type Plan struct {
	ID        string
	Name      string
	Price     float64 // Em centavos para evitar problemas de ponto flutuante
	Features  []string
	IsDefault bool
}

type Subscription struct {
	ID            string
	TenantID      string
	PlanID        string
	Status        string // "active", "trial", "past_due", "canceled"
	Gateway       string // "asaas", "stripe"
	GatewaySubID  string
	CurrentPeriodStart time.Time
	CurrentPeriodEnd   time.Time
	CreatedAt     time.Time
	UpdatedAt     time.Time
}
