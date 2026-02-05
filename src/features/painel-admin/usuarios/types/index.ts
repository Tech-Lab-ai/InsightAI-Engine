export interface AdminUser {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string;
    companyName: string;
    role: 'Admin' | 'Membro' | 'Viewer';
    status: 'Ativo' | 'Suspensa';
    lastAccess: string;
    createdAt: string;
}

export interface AdminUserMetrics {
    total: number;
    active: number;
    suspended: number;
    admins: number;
    trial: number;
}
