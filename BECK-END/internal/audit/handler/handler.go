package handler

import (
	"encoding/json"
	"net/http"

	"insightai/internal/audit/service"
)

type AuditHandler struct {
	service service.AuditService
}

func NewAuditHandler(s service.AuditService) *AuditHandler {
	return &AuditHandler{service: s}
}

func (h *AuditHandler) GetAuditLogs(w http.ResponseWriter, r *http.Request) {
	// Em um sistema real, você pegaria filtros da query string
	logs, err := h.service.GetLogs(r.Context())
	if err != nil {
		http.Error(w, "Failed to get audit logs", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(logs)
}
