package dto

type CreateTicketRequest struct {
	Subject string `json:"subject"`
	Message string `json:"message"`
}

type AddMessageRequest struct {
	Content string `json:"content"`
}

type TicketResponse struct {
	ID        string `json:"id"`
	Subject   string `json:"subject"`
	Status    string `json:"status"`
	Priority  string `json:"priority"`
	CreatedAt string `json:"createdAt"`
	UpdatedAt string `json:"updatedAt"`
}
