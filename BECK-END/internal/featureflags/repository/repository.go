package repository

// Em um sistema real, isso interagiria com um serviço como LaunchDarkly ou um banco de dados.
// Por enquanto, podemos manter uma estrutura mock simples.

type FeatureFlagRepository interface{}

type featureFlagRepoMock struct{}

func NewFeatureFlagRepoMock() FeatureFlagRepository {
	return &featureFlagRepoMock{}
}
