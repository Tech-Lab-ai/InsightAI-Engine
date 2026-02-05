package dto

import "time"

// TenantSummaryDTO é um resumo de um tenant para listagem no painel admin.
type TenantSummaryDTO struct {
	ID        string `json:"id"`
	Name      string `json:"name"`
	Plan      string `json:"plan"`
	Status    string `json:"status"`
	CreatedAt time.Time `json:"createdAt"`
}

// UserSummaryDTO é um resumo de um usuário para listagem no painel admin.
type UserSummaryDTO struct {
	ID        string `json:"id"`
	Email     string `json:"email"`
	Role      string `json:"role"`
	TenantID  string `json:"tenantId"`
	TenantName string `json:"tenantName"`
	Status    string `json:"status"`
	CreatedAt time.Time `json:"createdAt"`
}

// AdminDashboardDTO contém os dados para o dashboard principal do admin.
type AdminDashboardDTO struct {
	ActiveTenants   int `json:"activeTenants"`
	TrialTenants    int `json:"trialTenants"`
	TotalUsers      int `json:"totalUsers"`
	OpenTickets     int `json:"openTickets"`
	CriticalAlerts  int `json:"criticalAlerts"`
}
