package dto

// UserResponse é o DTO para respostas de usuário, omitindo dados sensíveis.
type UserResponse struct {
	ID       string `json:"id"`
	TenantID string `json:"tenantId"`
	Email    string `json:"email"`
	Role     string `json:"role"`
}

// CreateUserRequest define o corpo da requisição para criar um novo usuário.
type CreateUserRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
	Role     string `json:"role"`
}
