package repository

import (
	"context"
	"insightai/internal/audit/domain"
	"sync"
	"time"

	"github.com/google/uuid"
)

type AuditRepository interface {
	Create(ctx context.Context, log *domain.AuditLog) error
	Find(ctx context.Context) ([]*domain.AuditLog, error)
}

type auditRepoMock struct {
	mu   sync.RWMutex
	logs []*domain.AuditLog
}

func NewAuditRepoMock() AuditRepository {
	return &auditRepoMock{
		logs: make([]*domain.AuditLog, 0),
	}
}

func (r *auditRepoMock) Create(ctx context.Context, log *domain.AuditLog) error {
	r.mu.Lock()
	defer r.mu.Unlock()

	log.ID = uuid.NewString()
	log.Timestamp = time.Now().UTC()
	r.logs = append(r.logs, log)
	return nil
}

func (r *auditRepoMock) Find(ctx context.Context) ([]*domain.AuditLog, error) {
	r.mu.RLock()
	defer r.mu.RUnlock()
	return r.logs, nil
}
