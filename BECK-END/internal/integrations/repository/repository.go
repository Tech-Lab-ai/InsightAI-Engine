package repository

// Repositório mock para integrações.
type IntegrationRepository interface{}

type integrationRepoMock struct{}

func NewIntegrationRepoMock() IntegrationRepository {
	return &integrationRepoMock{}
}
