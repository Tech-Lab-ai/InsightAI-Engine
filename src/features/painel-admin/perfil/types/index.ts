export interface AdminProfile {
    id: string;
    name: string;
    email: string;
    role: 'Super Admin' | 'Admin' | 'Operator';
    avatarUrl: string;
}

export interface AdminSession {
    id: string;
    device: string;
    browser: string;
    location: string;
    ip: string;
    lastActive: string;
    isCurrent: boolean;
}
