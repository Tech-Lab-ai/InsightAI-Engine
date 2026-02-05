export type RunningWorkflow = {
    id: string;
    name: string;
    status: 'Em Execução' | 'Em Fila';
    progress: number;
    currentStep: string;
    elapsedTime: string;
    startedAt: string;
    steps: {
        name: string;
        status: 'Concluído' | 'Em Execução' | 'Pendente';
    }[];
};

export const mockRunningWorkflows: RunningWorkflow[] = [
    {
        id: 'run_001',
        name: 'Processamento de Lote de Contratos (Q3)',
        status: 'Em Execução',
        progress: 65,
        currentStep: 'Etapa 4: Extração de Cláusulas de Risco',
        elapsedTime: '3m 12s',
        startedAt: '15:10:05',
        steps: [
            { name: 'Iniciado', status: 'Concluído' },
            { name: 'Etapa 1: Leitura de 500 documentos', status: 'Concluído' },
            { name: 'Etapa 2: Validação de Formato', status: 'Concluído' },
            { name: 'Etapa 3: Indexação Semântica', status: 'Concluído' },
            { name: 'Etapa 4: Extração de Cláusulas de Risco', status: 'Em Execução' },
            { name: 'Etapa 5: Geração de Relatório', status: 'Pendente' },
            { name: 'Finalização', status: 'Pendente' },
        ]
    },
    {
        id: 'run_002',
        name: 'Sincronização Diária com ERP',
        status: 'Em Execução',
        progress: 25,
        currentStep: 'Etapa 1: Conexão com API do ERP',
        elapsedTime: '0m 45s',
        startedAt: '15:12:30',
        steps: [
            { name: 'Iniciado', status: 'Concluído' },
            { name: 'Etapa 1: Conexão com API do ERP', status: 'Em Execução' },
            { name: 'Etapa 2: Busca de Novos Pedidos', status: 'Pendente' },
            { name: 'Etapa 3: Atualização no Banco de Dados', status: 'Pendente' },
            { name: 'Finalização', status: 'Pendente' },
        ]
    },
    {
        id: 'run_003',
        name: 'Análise de Sentimento em Tickets',
        status: 'Em Execução',
        progress: 90,
        currentStep: 'Etapa 5: Enviando notificações',
        elapsedTime: '8m 5s',
        startedAt: '15:05:10',
        steps: [
            { name: 'Iniciado', status: 'Concluído' },
            { name: 'Etapa 1: Coleta de novos tickets', status: 'Concluído' },
            { name: 'Etapa 2: Pré-processamento de texto', status: 'Concluído' },
            { name: 'Etapa 3: Análise de Sentimento com IA', status: 'Concluído' },
            { name: 'Etapa 4: Classificação de tickets urgentes', status: 'Concluído' },
            { name: 'Etapa 5: Enviando notificações', status: 'Em Execução' },
            { name: 'Finalização', status: 'Pendente' },
        ]
    }
];
