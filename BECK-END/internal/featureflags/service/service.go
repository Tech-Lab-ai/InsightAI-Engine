package service

type FeatureFlagService interface {
	IsActive(flagKey, tenantID, userID string) bool
}

type featureFlagService struct{}

func NewFeatureFlagService() FeatureFlagService {
	return &featureFlagService{}
}

// IsActive verifica se uma feature flag está ativa para um determinado contexto.
func (s *featureFlagService) IsActive(flagKey, tenantID, userID string) bool {
	// A lógica complexa de avaliação (percentual, targeting, etc.) iria aqui.
	// Por padrão, vamos considerar todas as flags desativadas no mock.
	return false
}
