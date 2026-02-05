'use client';
import * as React from 'react';
import { AdminUsersHeader } from '@/features/painel-admin/usuarios/components/AdminUsersHeader';
import { AdminUsersMetrics } from '@/features/painel-admin/usuarios/components/AdminUsersMetrics';
import { AdminUsersFilters } from '@/features/painel-admin/usuarios/components/AdminUsersFilters';
import { AdminUsersTable } from '@/features/painel-admin/usuarios/components/AdminUsersTable';
import { AdminUsersLoading } from '@/features/painel-admin/usuarios/components/AdminUsersLoading';
import { AdminUsersEmpty } from '@/features/painel-admin/usuarios/components/AdminUsersEmpty';
import { getAdminUsers, getAdminUserMetrics } from '@/features/painel-admin/usuarios/services/adminUsersService';
import { AdminUser, AdminUserMetrics } from '@/features/painel-admin/usuarios/types';

export default function AdminUsersPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [users, setUsers] = React.useState<AdminUser[]>([]);
    const [metrics, setMetrics] = React.useState<AdminUserMetrics | null>(null);

    React.useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const [usersData, metricsData] = await Promise.all([
                    getAdminUsers(),
                    getAdminUserMetrics()
                ]);
                setUsers(usersData);
                setMetrics(metricsData);
            } catch (error) {
                console.error("Failed to fetch admin users data", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <AdminUsersLoading />;
    }

    return (
        <div className="space-y-8">
            <AdminUsersHeader totalUsers={metrics?.total || 0} />
            {metrics && <AdminUsersMetrics metrics={metrics} />}
            <AdminUsersFilters />
            {users.length > 0 ? (
                <AdminUsersTable users={users} />
            ) : (
                <AdminUsersEmpty />
            )}
        </div>
    );
}
