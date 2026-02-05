import { AdminUser, AdminUserMetrics } from '../types';

const mockUsers: AdminUser[] = [
    { id: 'usr_1a2b3c', name: 'Ana Silva', email: 'ana.silva@inovadora.com', companyName: 'Soluções Inovadoras', role: 'Admin', status: 'Ativo', lastAccess: 'Hoje, 14:30', createdAt: '15/07/2024', avatarUrl: 'https://i.pravatar.cc/150?u=ana' },
    { id: 'usr_4d5e6f', name: 'Bruno Costa', email: 'bruno@techcorp.com', companyName: 'TechCorp Global', role: 'Membro', status: 'Ativo', lastAccess: 'Hoje, 11:15', createdAt: '02/05/2024', avatarUrl: 'https://i.pravatar.cc/150?u=bruno' },
    { id: 'usr_7g8h9i', name: 'Carlos Pereira', email: 'carlos@visionaria.dev', companyName: 'Startup Visionária', role: 'Membro', status: 'Ativo', lastAccess: 'Ontem, 09:00', createdAt: '28/07/2024', avatarUrl: 'https://i.pravatar.cc/150?u=carlos' },
    { id: 'usr_j1k2l3', name: 'Daniela Martins', email: 'daniela@consultoria.com', companyName: 'Consultoria Estratégica', role: 'Viewer', status: 'Suspensa', lastAccess: '25/06/2024', createdAt: '10/01/2024', avatarUrl: 'https://i.pravatar.cc/150?u=daniela' },
    { id: 'usr_m4n5o6', name: 'Eduardo Ferreira', email: 'eduardo@varejo.io', companyName: 'Varejo Digital S.A.', role: 'Admin', status: 'Ativo', lastAccess: 'Hoje, 15:02', createdAt: '19/06/2024', avatarUrl: 'https://i.pravatar.cc/150?u=eduardo' },
    { id: 'usr_p7q8r9', name: 'Fernanda Lima', email: 'fernanda.lima@techcorp.com', companyName: 'TechCorp Global', role: 'Membro', status: 'Ativo', lastAccess: 'Hoje, 08:45', createdAt: '03/05/2024', avatarUrl: 'https://i.pravatar.cc/150?u=fernanda' },
    { id: 'usr_s1t2u3', name: 'Gustavo Almeida', email: 'gustavo.a@inovadora.com', companyName: 'Soluções Inovadoras', role: 'Membro', status: 'Ativo', lastAccess: 'Ontem, 18:20', createdAt: '16/07/2024', avatarUrl: 'https://i.pravatar.cc/150?u=gustavo' },
    { id: 'usr_v4w5x6', name: 'Helena Souza', email: 'helena.souza@visionaria.dev', companyName: 'Startup Visionária', role: 'Viewer', status: 'Ativo', lastAccess: 'Hoje, 12:00', createdAt: '29/07/2024', avatarUrl: 'https://i.pravatar.cc/150?u=helena' },
];

const mockMetrics: AdminUserMetrics = {
    total: 1420,
    active: 1380,
    suspended: 15,
    admins: 89,
    trial: 120,
};

// Simulate API delay
export const getAdminUsers = (): Promise<AdminUser[]> => {
    return new Promise(resolve => setTimeout(() => resolve(mockUsers), 1000));
}

export const getAdminUserMetrics = (): Promise<AdminUserMetrics> => {
    return new Promise(resolve => setTimeout(() => resolve(mockMetrics), 500));
}
