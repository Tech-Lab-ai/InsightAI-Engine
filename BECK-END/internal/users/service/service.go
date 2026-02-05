package service

import (
	"errors"
	"insightai/internal/users/domain"
	"insightai/internal/users/repository"

	"golang.org/x/crypto/bcrypt"
)

// UserService define a interface para as regras de negócio de usuário.
type UserService interface {
	Authenticate(email, password string) (*domain.User, error)
}

type userService struct {
	repo repository.UserRepository
}

func NewUserService(repo repository.UserRepository) UserService {
	return &userService{repo: repo}
}

// Authenticate verifica as credenciais do usuário.
func (s *userService) Authenticate(email, password string) (*domain.User, error) {
	user, err := s.repo.FindByEmail(email)
	if err != nil {
		return nil, err
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password))
	if err != nil {
		return nil, errors.New("credenciais inválidas")
	}

	return user, nil
}
