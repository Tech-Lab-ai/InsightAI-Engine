package handler

import (
	"net/http"
)

type IntegrationHandler struct{}

func NewIntegrationHandler() *IntegrationHandler {
	return &IntegrationHandler{}
}

// ListAvailableIntegrations lista todas as integrações disponíveis na plataforma (admin).
func (h *IntegrationHandler) ListAvailableIntegrations(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotImplemented)
}

// GetTenantIntegrations lista as integrações configuradas para um tenant.
func (h *IntegrationHandler) GetTenantIntegrations(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotImplemented)
}

// UpdateTenantIntegration atualiza a configuração de uma integração para um tenant.
func (h *IntegrationHandler) UpdateTenantIntegration(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotImplemented)
}
