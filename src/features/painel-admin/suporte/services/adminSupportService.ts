import { AdminTicket, AdminSupportMetrics } from '../types';

const mockTickets: AdminTicket[] = [
    {
        id: 'TKT-AB12CD',
        companyId: 'tn_1a2b3c',
        companyName: 'Soluções Inovadoras',
        userId: 'usr_1a2b3c',
        userName: 'Ana Silva',
        type: 'Suporte',
        priority: 'Alta',
        status: 'Aberto',
        subject: 'Não consigo acessar os relatórios financeiros',
        sla: { response: { due: '1h', violated: false }, resolution: { due: '8h', violated: false } },
        createdAt: '29/07/2024 14:30',
        updatedAt: '29/07/2024 14:30',
    },
    {
        id: 'TKT-EF45GH',
        companyId: 'tn_4d5e6f',
        companyName: 'TechCorp Global',
        userId: 'usr_4d5e6f',
        userName: 'Bruno Costa',
        type: 'Incidente',
        priority: 'Crítica',
        status: 'Em atendimento',
        subject: 'API de integrações está retornando erro 500',
        sla: { response: { due: '30min', violated: true }, resolution: { due: '4h', violated: false } },
        createdAt: '29/07/2024 11:15',
        updatedAt: '29/07/2024 12:00',
    },
    {
        id: 'TKT-IJ78KL',
        companyId: 'tn_m4n5o6',
        companyName: 'Varejo Digital S.A.',
        userId: 'usr_m4n5o6',
        userName: 'Eduardo Ferreira',
        type: 'Financeiro',
        priority: 'Baixa',
        status: 'Aguardando cliente',
        subject: 'Dúvida sobre a fatura de Julho',
        sla: { response: { due: 'N/A', violated: false }, resolution: { due: 'N/A', violated: false } },
        createdAt: '28/07/2024 10:00',
        updatedAt: '28/07/2024 16:45',
    },
];

const mockMetrics: AdminSupportMetrics = {
    openTickets: 12,
    pendingClient: 4,
    slaViolations: 1,
    avgResponseTime: '45min',
};

export const getAdminTickets = (): Promise<AdminTicket[]> => {
    return new Promise(resolve => setTimeout(() => resolve(mockTickets), 1000));
};

export const getAdminSupportMetrics = (): Promise<AdminSupportMetrics> => {
    return new Promise(resolve => setTimeout(() => resolve(mockMetrics), 600));
};
