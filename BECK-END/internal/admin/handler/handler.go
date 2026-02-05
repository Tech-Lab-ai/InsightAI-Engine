package handler

import (
	"encoding/json"
	"net/http"

	"insightai/internal/admin/service"
	"insightai/pkg/errors"

	"github.com/go-chi/chi/v5"
)

type AdminHandler struct {
	service service.AdminService
}

func NewAdminHandler(s service.AdminService) *AdminHandler {
	return &AdminHandler{service: s}
}

func (h *AdminHandler) GetDashboardMetrics(w http.ResponseWriter, r *http.Request) {
	// A lógica para buscar e agregar métricas iria aqui
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"message": "Admin dashboard metrics"})
}

func (h *AdminHandler) ListTenants(w http.ResponseWriter, r *http.Request) {
	// A lógica para listar tenants iria aqui
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"message": "List of tenants"})
}

func (h *AdminHandler) GetTenant(w http.ResponseWriter, r *http.Request) {
	tenantID := chi.URLParam(r, "id")
	// A lógica para buscar um tenant específico iria aqui
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"message": "Details for tenant " + tenantID})
}

func (h *AdminHandler) ListGlobalUsers(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"message": "List of all users across tenants"})
}

func (h *AdminHandler) SuspendTenant(w http.ResponseWriter, r *http.Request) {
	tenantID := chi.URLParam(r, "id")
	err := h.service.SuspendTenant(r.Context(), tenantID)
	if err != nil {
		errors.InternalError(w, "Failed to suspend tenant")
		return
	}
	w.WriteHeader(http.StatusNoContent)
}
