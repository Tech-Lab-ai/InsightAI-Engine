package dto

// AsaasWebhookPayload representa um exemplo simplificado de um payload de webhook do Asaas.
type AsaasWebhookPayload struct {
	Event      string `json:"event"`
	Payment    struct {
		ID           string  `json:"id"`
		Customer     string  `json:"customer"`
		Subscription string  `json:"subscription"`
		Value        float64 `json:"value"`
		Status       string  `json:"status"` // "CONFIRMED", "RECEIVED", etc.
	} `json:"payment"`
}

// SubscriptionDTO é usado para exibir informações de assinatura.
type SubscriptionDTO struct {
	ID     string `json:"id"`
	Plan   string `json:"plan"`
	Status string `json:"status"`
	EndsAt string `json:"endsAt"`
}
