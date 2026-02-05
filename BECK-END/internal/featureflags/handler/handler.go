package handler

import (
	"net/http"
)

type FeatureFlagHandler struct{}

func NewFeatureFlagHandler() *FeatureFlagHandler {
	return &FeatureFlagHandler{}
}

func (h *FeatureFlagHandler) ListFlags(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotImplemented)
}

func (h *FeatureFlagHandler) UpdateFlag(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusNotImplemented)
}
