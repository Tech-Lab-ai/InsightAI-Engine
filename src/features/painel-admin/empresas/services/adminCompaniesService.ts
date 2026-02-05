import { AdminCompany, AdminCompanyMetrics } from '../types';

const mockCompanies: AdminCompany[] = [
    { id: 'tn_1a2b3c', name: 'Soluções Inovadoras Ltda.', plan: 'Pro', status: 'Ativa', activeUsers: 48, totalUsers: 50, usage: 85, createdAt: '15/07/2024' },
    { id: 'tn_4d5e6f', name: 'TechCorp Global', plan: 'Enterprise', status: 'Ativa', activeUsers: 250, totalUsers: 250, usage: 60, createdAt: '02/05/2024' },
    { id: 'tn_7g8h9i', name: 'Startup Visionária', plan: 'Starter', status: 'Trial', activeUsers: 5, totalUsers: 5, usage: 40, createdAt: '28/07/2024' },
    { id: 'tn_j1k2l3', name: 'Consultoria Estratégica', plan: 'Básico', status: 'Suspensa', activeUsers: 1, totalUsers: 2, usage: 10, createdAt: '10/01/2024' },
    { id: 'tn_m4n5o6', name: 'Varejo Digital S.A.', plan: 'Pro', status: 'Ativa', activeUsers: 20, totalUsers: 20, usage: 95, createdAt: '19/06/2024' },
];

const mockMetrics: AdminCompanyMetrics = {
    total: 89,
    active: 75,
    trial: 12,
    suspended: 2,
    mrr: 'R$ 47.3k'
};

export const getAdminCompanies = (): Promise<AdminCompany[]> => {
    return new Promise(resolve => setTimeout(() => resolve(mockCompanies), 1500));
}

export const getAdminCompanyMetrics = (): Promise<AdminCompanyMetrics> => {
    return new Promise(resolve => setTimeout(() => resolve(mockMetrics), 1000));
}
