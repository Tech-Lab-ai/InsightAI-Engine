package domain

import "time"

type TicketStatus string
type TicketPriority string

const (
	StatusOpen         TicketStatus = "open"
	StatusInProgress   TicketStatus = "in_progress"
	StatusPendingClient TicketStatus = "pending_client"
	StatusResolved     TicketStatus = "resolved"
	StatusClosed       TicketStatus = "closed"

	PriorityLow      TicketPriority = "low"
	PriorityMedium   TicketPriority = "medium"
	PriorityHigh     TicketPriority = "high"
	PriorityCritical TicketPriority = "critical"
)

type Ticket struct {
	ID          string
	TenantID    string
	UserID      string
	Subject     string
	Status      TicketStatus
	Priority    TicketPriority
	CreatedAt   time.Time
	UpdatedAt   time.Time
	ResolvedAt  *time.Time
}

type Message struct {
	ID        string
	TicketID  string
	AuthorID  string // Pode ser um usuário ou um admin
	Content   string
	CreatedAt time.Time
}
