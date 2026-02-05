package domain

// FeatureFlag define uma flag de funcionalidade.
type FeatureFlag struct {
	ID          string
	Key         string // Chave única, ex: "new-dashboard"
	Description string
	Enabled     bool
	Rollout     int // Percentual de rollout (0-100)
	// Regras mais complexas podem ser adicionadas aqui, como targeting por plano ou por tenant.
}
