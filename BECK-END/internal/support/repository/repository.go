package repository

import (
	"context"
	"errors"
	"insightai/internal/support/domain"
	"sync"
)

type SupportRepository interface {
	FindActiveTicketByTenant(ctx context.Context, tenantID string) (*domain.Ticket, error)
	CreateTicket(ctx context.Context, ticket *domain.Ticket) error
}

type supportRepoMock struct {
	mu      sync.RWMutex
	tickets map[string]*domain.Ticket
}

func NewSupportRepoMock() SupportRepository {
	return &supportRepoMock{
		tickets: make(map[string]*domain.Ticket),
	}
}

func (r *supportRepoMock) FindActiveTicketByTenant(ctx context.Context, tenantID string) (*domain.Ticket, error) {
	r.mu.RLock()
	defer r.mu.RUnlock()
	for _, t := range r.tickets {
		if t.TenantID == tenantID && t.Status != domain.StatusClosed && t.Status != domain.StatusResolved {
			return t, nil
		}
	}
	return nil, errors.New("no active ticket found")
}

func (r *supportRepoMock) CreateTicket(ctx context.Context, ticket *domain.Ticket) error {
	r.mu.Lock()
	defer r.mu.Unlock()
	r.tickets[ticket.ID] = ticket
	return nil
}
