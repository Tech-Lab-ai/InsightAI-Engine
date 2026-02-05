export type FeatureFlagType = 'Feature' | 'Experimento' | 'Kill Switch';
export type FeatureFlagStatus = 'Ativa' | 'Em teste' | 'Desativada';
export type FeatureFlagScope = 'Global' | 'Por Plano' | 'Por Empresa';
export type PlanTier = 'Básico' | 'Starter' | 'Pro' | 'Enterprise' | 'Trial';

export interface RolloutRule {
    percentage: number;
    companies: string[];
    plans: PlanTier[];
}

export interface AuditEntry {
    date: string;
    author: string;
    action: string;
}

export interface FeatureFlag {
    id: string;
    key: string;
    name: string;
    description: string;
    type: FeatureFlagType;
    status: FeatureFlagStatus;
    scope: FeatureFlagScope;
    lastModified: string;
    rollout: RolloutRule;
    history: AuditEntry[];
}

export interface FeatureFlagsOverview {
    total: number;
    active: number;
    testing: number;
    inactive: number;
    critical: number;
}
