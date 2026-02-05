
export type Workflow = {
    id: string;
    name: string;
    status: 'Ativo' | 'Pausado' | 'Com erro' | 'Agendado';
    lastRun: string;
    nextRun: string;
};

export const mockWorkflows: Workflow[] = [
    {
        id: 'wf_001',
        name: 'Análise de Contratos Jurídicos',
        status: 'Ativo',
        lastRun: 'Hoje, às 14:30',
        nextRun: 'A cada 4 horas',
    },
    {
        id: 'wf_002',
        name: 'Relatório Financeiro Mensal',
        status: 'Agendado',
        lastRun: '01/07/2024',
        nextRun: '01/08/2024',
    },
    {
        id: 'wf_003',
        name: 'Triagem de Tickets de Suporte',
        status: 'Com erro',
        lastRun: 'Hoje, às 11:15',
        nextRun: 'A cada 15 minutos',
    },
    {
        id: 'wf_004',
        name: 'Onboarding de Novos Clientes',
        status: 'Ativo',
        lastRun: 'Ontem, às 17:00',
        nextRun: 'Em cada novo cliente',
    },
    {
        id: 'wf_005',
        name: 'Sync de Dados com ERP (legado)',
        status: 'Pausado',
        lastRun: '25/06/2024',
        nextRun: '-',
    },
];
