package repository

import (
	"context"
	"errors"
	"insightai/internal/billing/domain"
	"sync"
	"time"

	"github.com/google/uuid"
)

type BillingRepository interface {
	CreateSubscription(ctx context.Context, sub *domain.Subscription) error
	UpdateSubscriptionStatus(ctx context.Context, subID, status string) error
	FindSubscriptionByGatewayID(ctx context.Context, gatewaySubID string) (*domain.Subscription, error)
}

type billingRepoMock struct {
	mu            sync.RWMutex
	subscriptions map[string]*domain.Subscription
}

func NewBillingRepoMock() BillingRepository {
	return &billingRepoMock{
		subscriptions: make(map[string]*domain.Subscription),
	}
}

func (r *billingRepoMock) CreateSubscription(ctx context.Context, sub *domain.Subscription) error {
	r.mu.Lock()
	defer r.mu.Unlock()
	sub.ID = uuid.NewString()
	sub.CreatedAt = time.Now()
	sub.UpdatedAt = time.Now()
	r.subscriptions[sub.ID] = sub
	return nil
}

func (r *billingRepoMock) UpdateSubscriptionStatus(ctx context.Context, subID, status string) error {
	r.mu.Lock()
	defer r.mu.Unlock()
	sub, ok := r.subscriptions[subID]
	if !ok {
		return errors.New("subscription not found")
	}
	sub.Status = status
	sub.UpdatedAt = time.Now()
	return nil
}

func (r *billingRepoMock) FindSubscriptionByGatewayID(ctx context.Context, gatewaySubID string) (*domain.Subscription, error) {
	r.mu.RLock()
	defer r.mu.RUnlock()
	for _, sub := range r.subscriptions {
		if sub.GatewaySubID == gatewaySubID {
			return sub, nil
		}
	}
	return nil, errors.New("subscription not found")
}
