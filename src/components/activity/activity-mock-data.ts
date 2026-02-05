export type Activity = {
    type: 'Chat' | 'Workflow' | 'Documento' | 'Usuário';
    user: string;
    description: string;
    timestamp: string;
};

export const mockActivities: Activity[] = [
    { type: 'Documento', user: 'Ana Silva', description: 'enviou o documento "Contrato_NDA_v3.pdf"', timestamp: '2 min atrás' },
    { type: 'Chat', user: 'Bruno Costa', description: 'iniciou uma nova conversa', timestamp: '5 min atrás' },
    { type: 'Workflow', user: 'Sistema', description: 'executou o workflow "Relatório Financeiro Mensal"', timestamp: '15 min atrás' },
    { type: 'Usuário', user: 'Admin', description: 'convidou "carlos.pereira@cliente.com"', timestamp: '1 hora atrás' },
    { type: 'Documento', user: 'Ana Silva', description: 'editou "Política de Férias 2024.pdf"', timestamp: '3 horas atrás' },
];

export const mockChartData = [
    { date: 'Seg', Chat: 120, Workflow: 30, Documento: 50 },
    { date: 'Ter', Chat: 150, Workflow: 45, Documento: 60 },
    { date: 'Qua', Chat: 180, Workflow: 25, Documento: 70 },
    { date: 'Qui', Chat: 160, Workflow: 60, Documento: 80 },
    { date: 'Sex', Chat: 210, Workflow: 55, Documento: 90 },
    { date: 'Sáb', Chat: 90, Workflow: 20, Documento: 30 },
    { date: 'Dom', Chat: 70, Workflow: 15, Documento: 25 },
];
