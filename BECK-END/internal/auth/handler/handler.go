package handler

import (
	"encoding/json"
	"net/http"

	"insightai/internal/auth/dto"
	"insightai/internal/config"
	userservice "insightai/internal/users/service"
	"insightai/pkg/errors"
	"insightai/pkg/token"
)

type AuthHandler struct {
	userService userservice.UserService
}

func NewAuthHandler(us userservice.UserService) *AuthHandler {
	return &AuthHandler{
		userService: us,
	}
}

func (h *AuthHandler) Login(w http.ResponseWriter, r *http.Request) {
	var req dto.LoginRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		errors.BadRequest(w, "Corpo da requisição inválido")
		return
	}

	user, err := h.userService.Authenticate(req.Email, req.Password)
	if err != nil {
		errors.Unauthorized(w, "Credenciais inválidas")
		return
	}

	accessToken, err := token.GenerateToken(user.ID, user.Role, config.Cfg.TokenTTL, config.Cfg.JWTSecret)
	if err != nil {
		errors.InternalError(w, "Falha ao gerar token de acesso")
		return
	}

	refreshToken, err := token.GenerateToken(user.ID, user.Role, config.Cfg.TokenTTL, config.Cfg.JWTSecret)
	if err != nil {
		errors.InternalError(w, "Falha ao gerar token de atualização")
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(dto.LoginResponse{
		AccessToken:  accessToken,
		RefreshToken: refreshToken,
	})
}

func (h *AuthHandler) Refresh(w http.ResponseWriter, r *http.Request) {
	// A lógica de refresh token seria implementada aqui,
	// validando o refresh token e emitindo um novo access token.
	w.WriteHeader(http.StatusNotImplemented)
	w.Write([]byte("Endpoint de Refresh a ser implementado."))
}
