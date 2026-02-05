export type User = {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
    status: 'Ativo' | 'Pendente' | 'Suspenso';
    role: 'Admin' | 'Editor' | 'Visualizador';
    lastAccess: string;
};
