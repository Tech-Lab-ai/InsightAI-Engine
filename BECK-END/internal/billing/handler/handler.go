package handler

import (
	"encoding/json"
	"net/http"

	"insightai/internal/billing/dto"
	"insightai/internal/billing/service"
)

type BillingHandler struct {
	service service.BillingService
}

func NewBillingHandler(s service.BillingService) *BillingHandler {
	return &BillingHandler{service: s}
}

// AsaasWebhook é o endpoint que recebe os webhooks do Asaas.
func (h *BillingHandler) AsaasWebhook(w http.ResponseWriter, r *http.Request) {
	var payload dto.AsaasWebhookPayload
	if err := json.NewDecoder(r.Body).Decode(&payload); err != nil {
		http.Error(w, "Invalid webhook payload", http.StatusBadRequest)
		return
	}

	if err := h.service.HandlePaymentWebhook(r.Context(), payload); err != nil {
		http.Error(w, "Failed to process webhook", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
}

func (h *BillingHandler) GetSubscriptions(w http.ResponseWriter, r *http.Request) {
	// Lógica para listar assinaturas de um tenant (painel cliente) ou todas (painel admin)
	w.WriteHeader(http.StatusNotImplemented)
}

func (h *BillingHandler) GetPlans(w http.ResponseWriter, r *http.Request) {
	// Lógica para listar planos disponíveis
	w.WriteHeader(http.StatusNotImplemented)
}
