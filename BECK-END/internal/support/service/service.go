package support

import (
	"context"
	"errors"

	"insightai/internal/audit"
	"insightai/internal/middleware"
	"insightai/internal/support/domain"
	"insightai/internal/support/repository"

	"github.com/google/uuid"
)

var ErrActiveTicketExists = errors.New("an active ticket already exists for this tenant")

type SupportService interface {
	CreateTicket(ctx context.Context, subject, message string) (*domain.Ticket, error)
}

type supportService struct {
	repo     repository.SupportRepository
	auditSvc audit.AuditService
}

func NewSupportService(repo repository.SupportRepository, auditSvc audit.AuditService) SupportService {
	return &supportService{repo: repo, auditSvc: auditSvc}
}

func (s *supportService) CreateTicket(ctx context.Context, subject, message string) (*domain.Ticket, error) {
	tenantID, _ := middleware.GetTenantFromCtx(ctx)
	userID, _ := middleware.GetUserIDFromCtx(ctx)

	// Regra de negócio: 1 ticket ativo por empresa
	activeTicket, _ := s.repo.FindActiveTicketByTenant(ctx, tenantID)
	if activeTicket != nil {
		return nil, ErrActiveTicketExists
	}

	ticket := &domain.Ticket{
		ID:       uuid.NewString(),
		TenantID: tenantID,
		UserID:   userID,
		Subject:  subject,
		Status:   domain.StatusOpen,
		Priority: domain.PriorityMedium, // Prioridade padrão
	}

	if err := s.repo.CreateTicket(ctx, ticket); err != nil {
		return nil, err
	}

	// Lógica para criar a primeira mensagem do ticket...

	_ = s.auditSvc.Record(ctx, audit.RecordInput{
		Action:     "support.ticket.create",
		ActorID:    userID,
		ResourceID: ticket.ID,
		Details:    map[string]interface{}{"subject": subject},
	})

	return ticket, nil
}
