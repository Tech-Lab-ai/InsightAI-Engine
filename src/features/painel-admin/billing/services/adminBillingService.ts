import { AdminSubscription, AdminBillingMetrics } from '../types';

const mockSubscriptions: AdminSubscription[] = [
    { id: 'sub_1', companyName: 'Soluções Inovadoras Ltda.', companyId: 'tn_1a2b3c', plan: 'Pro', status: 'Ativa', monthlyValue: 149.00, startDate: '15/07/2024', nextBilling: '15/08/2024', gateway: 'Asaas' },
    { id: 'sub_2', companyName: 'TechCorp Global', companyId: 'tn_4d5e6f', plan: 'Enterprise', status: 'Ativa', monthlyValue: 1200.00, startDate: '02/05/2024', nextBilling: '02/08/2024', gateway: 'Asaas' },
    { id: 'sub_3', companyName: 'Startup Visionária', companyId: 'tn_7g8h9i', plan: 'Starter', status: 'Trial', monthlyValue: 0.00, startDate: '28/07/2024', nextBilling: '12/08/2024', gateway: 'Asaas' },
    { id: 'sub_4', companyName: 'Consultoria Estratégica', companyId: 'tn_j1k2l3', plan: 'Básico', status: 'Atrasada', monthlyValue: 17.99, startDate: '10/01/2024', nextBilling: '10/07/2024', gateway: 'Asaas' },
    { id: 'sub_5', companyName: 'Varejo Digital S.A.', companyId: 'tn_m4n5o6', plan: 'Pro', status: 'Ativa', monthlyValue: 149.00, startDate: '19/06/2024', nextBilling: '19/08/2024', gateway: 'Asaas' },
    { id: 'sub_6', companyName: 'Creative Minds Agency', companyId: 'tn_p7q8r9', plan: 'Starter', status: 'Cancelada', monthlyValue: 49.00, startDate: '20/03/2024', nextBilling: '-', gateway: 'Asaas' },
];

const mockMetrics: AdminBillingMetrics = {
    mrr: 47300,
    arr: 567600,
    payingCustomers: 89,
    activeTrials: 12,
    churnRate: 1.2,
};

export const getAdminSubscriptions = (): Promise<AdminSubscription[]> => {
    return new Promise(resolve => setTimeout(() => resolve(mockSubscriptions), 1500));
};

export const getAdminBillingMetrics = (): Promise<AdminBillingMetrics> => {
    return new Promise(resolve => setTimeout(() => resolve(mockMetrics), 800));
};
