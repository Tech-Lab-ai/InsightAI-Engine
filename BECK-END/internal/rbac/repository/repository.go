package repository

import (
	"context"
	"insightai/internal/rbac/domain"
	"sync"
)

type RBACRepository interface {
	GetRolePermissions(ctx context.Context, roleName string) ([]domain.Permission, error)
}

type rbacRepoMock struct {
	mu    sync.RWMutex
	roles map[string]*domain.Role
}

func NewRBACRepoMock() RBACRepository {
	roles := make(map[string]*domain.Role)
	roles[domain.PlatformAdminRole] = &domain.Role{
		Name:        domain.PlatformAdminRole,
		Permissions: []domain.Permission{domain.UsersRead, domain.UsersWrite, domain.BillingRead, domain.AuditRead},
	}
	roles[domain.TenantAdminRole] = &domain.Role{
		Name:        domain.TenantAdminRole,
		Permissions: []domain.Permission{domain.UsersRead, domain.UsersWrite},
	}
	roles[domain.MemberRole] = &domain.Role{
		Name:        domain.MemberRole,
		Permissions: []domain.Permission{domain.UsersRead},
	}
	roles[domain.ViewerRole] = &domain.Role{
		Name:        domain.ViewerRole,
		Permissions: []domain.Permission{},
	}
	return &rbacRepoMock{roles: roles}
}

func (r *rbacRepoMock) GetRolePermissions(ctx context.Context, roleName string) ([]domain.Permission, error) {
	r.mu.RLock()
	defer r.mu.RUnlock()

	if role, ok := r.roles[roleName]; ok {
		return role.Permissions, nil
	}
	return []domain.Permission{}, nil
}
