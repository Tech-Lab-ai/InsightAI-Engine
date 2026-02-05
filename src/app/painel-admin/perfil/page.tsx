'use client';
import * as React from 'react';
import { AdminProfileHeader } from '@/features/painel-admin/perfil/components/AdminProfileHeader';
import { AdminProfileInfo } from '@/features/painel-admin/perfil/components/AdminProfileInfo';
import { AdminProfileSecurity } from '@/features/painel-admin/perfil/components/AdminProfileSecurity';
import { AdminProfileSessions } from '@/features/painel-admin/perfil/components/AdminProfileSessions';
import { AdminProfilePreferences } from '@/features/painel-admin/perfil/components/AdminProfilePreferences';
import { AdminProfileLoading } from '@/features/painel-admin/perfil/components/AdminProfileLoading';
import { getAdminProfile, getAdminSessions } from '@/features/painel-admin/perfil/services/adminProfileService';
import { AdminProfile, AdminSession } from '@/features/painel-admin/perfil/types';

export default function AdminProfilePage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [profile, setProfile] = React.useState<AdminProfile | null>(null);
    const [sessions, setSessions] = React.useState<AdminSession[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const [profileData, sessionsData] = await Promise.all([
                    getAdminProfile(),
                    getAdminSessions(),
                ]);
                setProfile(profileData);
                setSessions(sessionsData);
            } catch (error) {
                console.error("Failed to fetch admin profile data", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <AdminProfileLoading />;
    }

    if (!profile) {
        return <div>Erro ao carregar o perfil do administrador.</div>;
    }

    return (
        <div className="space-y-8">
            <AdminProfileHeader profile={profile} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <AdminProfileInfo profile={profile} />
                    <AdminProfileSecurity />
                </div>
                <div className="space-y-8">
                    <AdminProfilePreferences />
                    <AdminProfileSessions sessions={sessions} />
                </div>
            </div>
        </div>
    );
}
