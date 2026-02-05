package service

import (
	"context"
	"insightai/internal/rbac/domain"
	"insightai/internal/rbac/repository"
)

type RBACService interface {
	Can(ctx context.Context, role string, requiredPermission domain.Permission) (bool, error)
}

type rbacService struct {
	repo repository.RBACRepository
}

func NewRBACService(repo repository.RBACRepository) RBACService {
	return &rbacService{repo: repo}
}

func (s *rbacService) Can(ctx context.Context, role string, requiredPermission domain.Permission) (bool, error) {
	permissions, err := s.repo.GetRolePermissions(ctx, role)
	if err != nil {
		return false, err
	}

	for _, p := range permissions {
		if p == requiredPermission {
			return true, nil
		}
	}

	// Lógica de wildcard pode ser adicionada aqui, ex: "users:*"
	return false, nil
}
