package errors

import (
	"encoding/json"
	"net/http"
)

// APIError define a estrutura padrão para respostas de erro.
type APIError struct {
	Message string `json:"message"`
}

func writeError(w http.ResponseWriter, statusCode int, message string) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)
	json.NewEncoder(w).Encode(APIError{Message: message})
}

func BadRequest(w http.ResponseWriter, message string) {
	writeError(w, http.StatusBadRequest, message)
}

func Unauthorized(w http.ResponseWriter, message string) {
	writeError(w, http.StatusUnauthorized, message)
}

func Forbidden(w http.ResponseWriter, message string) {
	writeError(w, http.StatusForbidden, message)
}

func NotFound(w http.ResponseWriter, message string) {
	writeError(w, http.StatusNotFound, message)
}

func InternalError(w http.ResponseWriter, message string) {
	writeError(w, http.StatusInternalServerError, message)
}
