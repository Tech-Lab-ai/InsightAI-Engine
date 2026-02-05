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
