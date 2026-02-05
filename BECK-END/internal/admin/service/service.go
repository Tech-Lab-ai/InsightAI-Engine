package service

import (
	"context"
	"log"

	"insightai/internal/audit"
	"insightai/internal/middleware"
	"insightai/internal/tenants/repository"
)

type AdminService interface {
	SuspendTenant(ctx context.Context, tenantID string) error
	// Outras ações administrativas...
}

type adminService struct {
	tenantRepo repository.TenantRepository
	auditSvc   audit.AuditService
}

func NewAdminService(tenantRepo repository.TenantRepository, auditSvc audit.AuditService) AdminService {
	return &adminService{
		tenantRepo: tenantRepo,
		auditSvc:   auditSvc,
	}
}

func (s *adminService) SuspendTenant(ctx context.Context, tenantID string) error {
	adminID, ok := middleware.GetUserIDFromCtx(ctx)
	if !ok {
		adminID = "system"
	}

	// Lógica de negócio para suspender um tenant.
	// Por exemplo, alterar o status no banco de dados.
	log.Printf("Admin '%s' suspending tenant '%s'", adminID, tenantID)

	// Registrar o evento de auditoria
	_ = s.auditSvc.Record(ctx, audit.RecordInput{
		Action:     "tenant.suspend",
		ActorID:    adminID,
		ResourceID: tenantID,
		Details:    map[string]interface{}{"reason": "Manual suspension by admin"},
	})

	return nil
}
