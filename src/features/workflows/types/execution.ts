export type WorkflowExecution = {
    executionId: string;
    workflowId: string;
    workflowName: string;
    status: 'Sucesso' | 'Com Erro' | 'Em Execução' | 'Cancelado';
    startedAt: string;
    finishedAt: string;
    duration: string;
};
