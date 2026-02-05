export type FeatureStatus = 'included' | 'limited' | 'excluded';

export type PlanFeature = {
    name: string;
    status: FeatureStatus;
};

export type Plan = {
    id: 'trial' | 'basico' | 'starter' | 'pro' | 'enterprise';
    name: string;
    price: string;
    description: string;
    features: PlanFeature[];
    cta: string;
    popular?: boolean;
    asaasLink?: string;
};
