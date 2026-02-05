package repository

// Repositório mock para configurações do sistema.
type SystemRepository interface{}

type systemRepoMock struct{}

func NewSystemRepoMock() SystemRepository {
	return &systemRepoMock{}
}
