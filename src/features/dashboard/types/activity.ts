export type Activity = {
    type: 'Chat' | 'Workflow' | 'Documento' | 'Usuário';
    user: string;
    description: string;
    timestamp: string;
};
