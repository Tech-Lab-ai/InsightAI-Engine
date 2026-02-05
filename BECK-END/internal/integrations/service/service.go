package service

type IntegrationService interface{}

type integrationService struct{}

func NewIntegrationService() IntegrationService {
	return &integrationService{}
}
