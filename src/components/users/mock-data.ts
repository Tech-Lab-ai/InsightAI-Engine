export type User = {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
    status: 'Ativo' | 'Pendente' | 'Suspenso';
    role: 'Admin' | 'Editor' | 'Visualizador';
    lastAccess: string;
};

export const mockUsers: User[] = [
    {
        id: 'user_001',
        name: 'Ana Silva',
        email: 'ana.silva@cliente.com',
        avatarUrl: 'https://picsum.photos/seed/user1/40',
        status: 'Ativo',
        role: 'Admin',
        lastAccess: 'Hoje, às 14:30',
    },
    {
        id: 'user_002',
        name: 'Bruno Costa',
        email: 'bruno.costa@cliente.com',
        avatarUrl: 'https://picsum.photos/seed/user2/40',
        status: 'Ativo',
        role: 'Editor',
        lastAccess: 'Hoje, às 11:15',
    },
    {
        id: 'user_003',
        name: 'Carlos Pereira',
        email: 'carlos.pereira@cliente.com',
        avatarUrl: 'https://picsum.photos/seed/user3/40',
        status: 'Pendente',
        role: 'Visualizador',
        lastAccess: 'Nunca',
    },
    {
        id: 'user_004',
        name: 'Daniela Martins',
        email: 'daniela.martins@cliente.com',
        avatarUrl: 'https://picsum.photos/seed/user4/40',
        status: 'Suspenso',
        role: 'Visualizador',
        lastAccess: '25/06/2024',
    },
     {
        id: 'user_005',
        name: 'Eduardo Ferreira',
        email: 'eduardo.f@cliente.com',
        avatarUrl: 'https://picsum.photos/seed/user5/40',
        status: 'Ativo',
        role: 'Editor',
        lastAccess: 'Ontem, às 09:00',
    },
];
