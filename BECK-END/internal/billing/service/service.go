package service

import (
	"context"
	"errors"
	"log"

	"insightai/internal/audit"
	"insightai/internal/billing/domain"
	"insightai/internal/billing/dto"
	"insightai/internal/billing/repository"
)

type BillingService interface {
	CreateSubscription(ctx context.Context, tenantID, planID, gatewaySubID string) (*domain.Subscription, error)
	HandlePaymentWebhook(ctx context.Context, payload dto.AsaasWebhookPayload) error
}

type billingService struct {
	repo     repository.BillingRepository
	auditSvc audit.AuditService
}

func NewBillingService(repo repository.BillingRepository, auditSvc audit.AuditService) BillingService {
	return &billingService{repo: repo, auditSvc: auditSvc}
}

func (s *billingService) CreateSubscription(ctx context.Context, tenantID, planID, gatewaySubID string) (*domain.Subscription, error) {
	// Lógica de criação de assinatura
	return nil, errors.New("not implemented")
}

func (s *billingService) HandlePaymentWebhook(ctx context.Context, payload dto.AsaasWebhookPayload) error {
	log.Printf("Received Asaas webhook event: %s for payment %s", payload.Event, payload.Payment.ID)

	sub, err := s.repo.FindSubscriptionByGatewayID(ctx, payload.Payment.Subscription)
	if err != nil {
		log.Printf("Error: subscription not found for gateway ID %s", payload.Payment.Subscription)
		return err
	}

	// Lógica para atualizar o status da assinatura com base no payload
	var newStatus string
	switch payload.Payment.Status {
	case "CONFIRMED", "RECEIVED":
		newStatus = "active"
	case "OVERDUE":
		newStatus = "past_due"
	default:
		log.Printf("Unhandled payment status: %s", payload.Payment.Status)
		return nil
	}

	if sub.Status != newStatus {
		err = s.repo.UpdateSubscriptionStatus(ctx, sub.ID, newStatus)
		if err != nil {
			return err
		}

		// Registrar evento de auditoria
		_ = s.auditSvc.Record(ctx, audit.RecordInput{
			Action:     "subscription.status.update",
			ActorID:    "system:asaas_webhook",
			ResourceID: sub.ID,
			Details:    map[string]interface{}{"from": sub.Status, "to": newStatus, "event": payload.Event},
		})
	}

	return nil
}
