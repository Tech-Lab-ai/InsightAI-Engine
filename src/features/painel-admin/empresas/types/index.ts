export interface AdminCompany {
    id: string;
    name: string;
    plan: 'Básico' | 'Starter' | 'Pro' | 'Enterprise';
    status: 'Ativa' | 'Trial' | 'Suspensa';
    activeUsers: number;
    totalUsers: number;
    usage: number; // percentage
    createdAt: string;
}

export interface AdminCompanyMetrics {
    total: number;
    active: number;
    trial: number;
    suspended: number;
    mrr: string;
}
