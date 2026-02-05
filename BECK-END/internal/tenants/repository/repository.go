package repository

import (
	"context"
	"errors"
	"insightai/internal/tenants/domain"
	"sync"
	"time"

	"github.com/google/uuid"
)

type TenantRepository interface {
	Create(ctx context.Context, tenant *domain.Tenant) error
	FindByID(ctx context.Context, id string) (*domain.Tenant, error)
}

type tenantRepoMock struct {
	mu      sync.RWMutex
	tenants map[string]*domain.Tenant
}

func NewTenantRepoMock() TenantRepository {
	// Cria um tenant mock para testes
	mockTenant := &domain.Tenant{
		ID:        "tenant_123",
		Name:      "Empresa Mock",
		Plan:      "pro",
		Status:    "active",
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	return &tenantRepoMock{
		tenants: map[string]*domain.Tenant{
			mockTenant.ID: mockTenant,
		},
	}
}

func (r *tenantRepoMock) Create(ctx context.Context, tenant *domain.Tenant) error {
	r.mu.Lock()
	defer r.mu.Unlock()
	tenant.ID = uuid.NewString()
	tenant.CreatedAt = time.Now()
	tenant.UpdatedAt = time.Now()
	r.tenants[tenant.ID] = tenant
	return nil
}

func (r *tenantRepoMock) FindByID(ctx context.Context, id string) (*domain.Tenant, error) {
	r.mu.RLock()
	defer r.mu.RUnlock()
	tenant, exists := r.tenants[id]
	if !exists {
		return nil, errors.New("tenant não encontrado")
	}
	return tenant, nil
}
