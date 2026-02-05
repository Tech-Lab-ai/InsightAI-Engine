
export type WorkflowExecution = {
    executionId: string;
    workflowId: string;
    workflowName: string;
    status: 'Sucesso' | 'Com Erro' | 'Em Execução' | 'Cancelado';
    startedAt: string;
    finishedAt: string;
    duration: string;
};

export const mockExecutions: WorkflowExecution[] = [
    {
        executionId: 'exec_7a8b3c2d',
        workflowId: 'wf_001',
        workflowName: 'Análise de Contratos Jurídicos',
        status: 'Sucesso',
        startedAt: '28/07/2024 14:30:15',
        finishedAt: '28/07/2024 14:32:45',
        duration: '2m 30s',
    },
    {
        executionId: 'exec_f9e0d1c8',
        workflowId: 'wf_003',
        workflowName: 'Triagem de Tickets de Suporte',
        status: 'Com Erro',
        startedAt: '28/07/2024 14:25:05',
        finishedAt: '28/07/2024 14:25:12',
        duration: '7s',
    },
    {
        executionId: 'exec_a3b1e8d5',
        workflowId: 'wf_004',
        workflowName: 'Onboarding de Novos Clientes',
        status: 'Sucesso',
        startedAt: '27/07/2024 17:00:02',
        finishedAt: '27/07/2024 17:05:18',
        duration: '5m 16s',
    },
    {
        executionId: 'exec_c4d2f7e6',
        workflowId: 'wf_001',
        workflowName: 'Análise de Contratos Jurídicos',
        status: 'Em Execução',
        startedAt: '28/07/2024 14:35:00',
        finishedAt: '-',
        duration: '-',
    },
    {
        executionId: 'exec_b5e3g6h7',
        workflowId: 'wf_002',
        workflowName: 'Relatório Financeiro Mensal',
        status: 'Sucesso',
        startedAt: '01/07/2024 09:00:00',
        finishedAt: '01/07/2024 09:12:30',
        duration: '12m 30s',
    },
     {
        executionId: 'exec_h8j7k6l5',
        workflowId: 'wf_005',
        workflowName: 'Sync de Dados com ERP (legado)',
        status: 'Cancelado',
        startedAt: '25/06/2024 10:00:00',
        finishedAt: '25/06/2024 10:01:00',
        duration: '1m 0s',
    },
];

export const mockTimelineSteps = [
    { status: 'Sucesso', title: 'Workflow iniciado', time: '14:30:15' },
    { status: 'Sucesso', title: 'Etapa 1: Análise de Cláusulas', time: '14:30:18' },
    { status: 'Sucesso', title: 'Etapa 2: Extração de Riscos', time: '14:31:50' },
    { status: 'Sucesso', title: 'Etapa 3: Geração de Relatório', time: '14:32:40' },
    { status: 'Sucesso', title: 'Workflow concluído', time: '14:32:45' },
]

export const mockTimelineStepsError = [
    { status: 'Sucesso', title: 'Workflow iniciado', time: '14:25:05' },
    { status: 'Sucesso', title: 'Etapa 1: Análise de Ticket', time: '14:25:08' },
    { status: 'Com Erro', title: 'Etapa 2: Conexão com API externa', time: '14:25:12' },
    { status: 'Com Erro', title: 'Workflow falhou', time: '14:25:12' },
]

