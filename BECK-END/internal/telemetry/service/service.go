package service

import (
	"context"
	"log"

	"insightai/internal/telemetry/domain"
)

type TelemetryService interface {
	Publish(ctx context.Context, event domain.TelemetryEvent)
}

type telemetryService struct {
	// Em um sistema real, isso poderia ser um cliente Kafka, Pub/Sub, etc.
}

func NewTelemetryService() TelemetryService {
	return &telemetryService{}
}

func (s *telemetryService) Publish(ctx context.Context, event domain.TelemetryEvent) {
	// Apenas loga o evento para fins de demonstração.
	log.Printf("[TELEMETRY] Level: %s, Name: %s, Payload: %+v", event.Severity, event.Name, event.Payload)
}
