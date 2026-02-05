package dto

// LoginRequest é o DTO para o corpo da requisição de login.
type LoginRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

// LoginResponse é o DTO para a resposta de login bem-sucedido.
type LoginResponse struct {
	AccessToken  string `json:"accessToken"`
	RefreshToken string `json:"refreshToken"`
}

// RefreshRequest é o DTO para a requisição de atualização de token.
type RefreshRequest struct {
	RefreshToken string `json:"refreshToken"`
}
