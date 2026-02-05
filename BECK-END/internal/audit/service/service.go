package audit

import (
	"context"
	"insightai/internal/audit/domain"
	"insightai/internal/audit/repository"
	"insightai/internal/middleware"
)

type RecordInput struct {
	Action     string
	ActorID    string
	ResourceID string
	Details    map[string]interface{}
}

type AuditService interface {
	Record(ctx context.Context, input RecordInput) error
	GetLogs(ctx context.Context) ([]*domain.AuditLog, error)
}

type auditService struct {
	repo repository.AuditRepository
}

func NewAuditService(repo repository.AuditRepository) AuditService {
	return &auditService{repo: repo}
}

func (s *auditService) Record(ctx context.Context, input RecordInput) error {
	tenantID, _ := middleware.GetTenantFromCtx(ctx)

	log := &domain.AuditLog{
		ActorID:    input.ActorID,
		Action:     input.Action,
		ResourceID: input.ResourceID,
		Details:    input.Details,
		TenantID:   tenantID,
	}

	return s.repo.Create(ctx, log)
}

func (s *auditService) GetLogs(ctx context.Context) ([]*domain.AuditLog, error) {
	// Aqui você poderia aplicar filtros baseados no contexto, como tenantID
	return s.repo.Find(ctx)
}
