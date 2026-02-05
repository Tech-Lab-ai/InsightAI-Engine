package repository

import (
	"errors"
	"insightai/internal/users/domain"
	"time"

	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
)

// UserRepository define a interface para operações de dados de usuário.
type UserRepository interface {
	FindByEmail(email string) (*domain.User, error)
	FindByID(id string) (*domain.User, error)
}

// userRepoMock é uma implementação em memória do UserRepository para fins de demonstração.
// Em um sistema real, isso seria implementado com um banco de dados como PostgreSQL.
type userRepoMock struct {
	users map[string]*domain.User
}

func NewUserRepoMock() UserRepository {
	// Cria um usuário mock para testes de login
	hashedPassword, _ := bcrypt.GenerateFromPassword([]byte("password123"), bcrypt.DefaultCost)
	mockUser := &domain.User{
		ID:        uuid.NewString(),
		TenantID:  "tenant_123",
		Email:     "admin@insightai.com",
		Password:  string(hashedPassword),
		Role:      "platform_admin",
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	return &userRepoMock{
		users: map[string]*domain.User{
			mockUser.Email: mockUser,
		},
	}
}

func (r *userRepoMock) FindByEmail(email string) (*domain.User, error) {
	user, exists := r.users[email]
	if !exists {
		return nil, errors.New("usuário não encontrado")
	}
	return user, nil
}

func (r *userRepoMock) FindByID(id string) (*domain.User, error) {
	for _, user := range r.users {
		if user.ID == id {
			return user, nil
		}
	}
	return nil, errors.New("usuário não encontrado")
}
