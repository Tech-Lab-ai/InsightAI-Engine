export interface User {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string;
    role: 'admin' | 'editor' | 'viewer';
}

export interface Company {
    id: string;
    name: string;
    plan: 'starter' | 'business' | 'enterprise';
}
