'use client';
import * as React from 'react';
import { AdminSystemHeader } from '@/features/painel-admin/configuracoes/components/AdminSystemHeader';
import { AdminSystemMode } from '@/features/painel-admin/configuracoes/components/AdminSystemMode';
import { AdminSystemParameters } from '@/features/painel-admin/configuracoes/components/AdminSystemParameters';
import { AdminSystemLimits } from '@/features/painel-admin/configuracoes/components/AdminSystemLimits';
import { AdminSystemFlagsSummary } from '@/features/painel-admin/configuracoes/components/AdminSystemFlagsSummary';
import { AdminSystemNotices } from '@/features/painel-admin/configuracoes/components/AdminSystemNotices';
import { AdminSystemLoading } from '@/features/painel-admin/configuracoes/components/AdminSystemLoading';
import { getSystemConfig, getSystemNotices } from '@/features/painel-admin/configuracoes/services/systemService';
import { SystemConfig, SystemNotice } from '@/features/painel-admin/configuracoes/types';

export default function AdminSettingsPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [config, setConfig] = React.useState<SystemConfig | null>(null);
    const [notices, setNotices] = React.useState<SystemNotice[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const [configData, noticesData] = await Promise.all([
                    getSystemConfig(),
                    getSystemNotices(),
                ]);
                setConfig(configData);
                setNotices(noticesData);
            } catch (error) {
                console.error("Failed to fetch system config data", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <AdminSystemLoading />;
    }
    
    if (!config) {
        return <div>Erro ao carregar configurações.</div>
    }

    return (
        <div className="space-y-8">
            <AdminSystemHeader environment={config.environment} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <AdminSystemMode currentMode={config.systemMode} />
                    <AdminSystemParameters parameters={config.globalParameters} />
                    <AdminSystemLimits planLimits={config.planLimits} />
                </div>
                <div className="space-y-8">
                     <AdminSystemFlagsSummary criticalFlags={config.criticalFlags} />
                     <AdminSystemNotices notices={notices} />
                </div>
            </div>
        </div>
    );
}
