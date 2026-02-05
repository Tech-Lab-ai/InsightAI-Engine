package handler

import (
	"net/http"

	"insightai/internal/support/service"
)

type SupportHandler struct {
	service service.SupportService
}

func NewSupportHandler(s service.SupportService) *SupportHandler {
	return &SupportHandler{service: s}
}

// Para clientes
func (h *SupportHandler) CreateTicket(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotImplemented)
}

func (h *SupportHandler) GetActiveTicketForTenant(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotImplemented)
}

func (h *SupportHandler) AddMessageToTicket(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotImplemented)
}

// Para admins
func (h *SupportHandler) GetAllTickets(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotImplemented)
}

func (h *SupportHandler) GetTicketDetails(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotImplemented)
}

func (h *SupportHandler) UpdateTicketStatus(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotImplemented)
}
