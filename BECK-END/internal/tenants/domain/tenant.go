package domain

import "time"

type Tenant struct {
	ID        string
	Name      string
	Plan      string // "starter", "business", "enterprise"
	Status    string // "active", "suspended", "trial"
	CreatedAt time.Time
	UpdatedAt time.Time
}
