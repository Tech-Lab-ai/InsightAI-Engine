export interface AdminSubscription {
    id: string;
    companyName: string;
    companyId: string;
    plan: 'Básico' | 'Starter' | 'Pro' | 'Enterprise';
    status: 'Ativa' | 'Atrasada' | 'Cancelada' | 'Trial';
    monthlyValue: number;
    startDate: string;
    nextBilling: string;
    gateway: 'Asaas' | 'Stripe';
}

export interface AdminBillingMetrics {
    mrr: number;
    arr: number;
    payingCustomers: number;
    activeTrials: number;
    churnRate: number; // percentage
}
