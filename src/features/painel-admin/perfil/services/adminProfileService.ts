import { AdminProfile, AdminSession } from '../types';

const mockProfile: AdminProfile = {
    id: 'op_admin_01',
    name: 'Admin Operator',
    email: 'operator@insightai.com',
    role: 'Super Admin',
    avatarUrl: 'https://i.pravatar.cc/150?u=admin-op',
};

const mockSessions: AdminSession[] = [
    {
        id: 'session_1',
        device: 'Desktop',
        browser: 'Chrome on macOS',
        location: 'São Paulo, BR',
        ip: '200.100.50.1',
        lastActive: 'Agora',
        isCurrent: true,
    },
    {
        id: 'session_2',
        device: 'Mobile',
        browser: 'Safari on iOS',
        location: 'São Paulo, BR',
        ip: '200.100.50.2',
        lastActive: 'Há 2 horas',
        isCurrent: false,
    },
     {
        id: 'session_3',
        device: 'Desktop',
        browser: 'Firefox on Windows',
        location: 'Rio de Janeiro, BR',
        ip: '189.50.60.70',
        lastActive: 'Ontem',
        isCurrent: false,
    },
];


export const getAdminProfile = (): Promise<AdminProfile> => {
    return new Promise(resolve => setTimeout(() => resolve(mockProfile), 500));
}

export const getAdminSessions = (): Promise<AdminSession[]> => {
    return new Promise(resolve => setTimeout(() => resolve(mockSessions), 800));
}
