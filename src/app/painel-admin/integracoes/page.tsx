'use client';
import * as React from 'react';
import { AdminIntegrationsHeader } from '@/features/painel-admin/integracoes/components/AdminIntegrationsHeader';
import { AdminIntegrationsOverview } from '@/features/painel-admin/integracoes/components/AdminIntegrationsOverview';
import { AdminIntegrationsFilters } from '@/features/painel-admin/integracoes/components/AdminIntegrationsFilters';
import { AdminIntegrationsList } from '@/features/painel-admin/integracoes/components/AdminIntegrationsList';
import { AdminIntegrationsLoading } from '@/features/painel-admin/integracoes/components/AdminIntegrationsLoading';
import { AdminIntegrationsEmpty } from '@/features/painel-admin/integracoes/components/AdminIntegrationsEmpty';
import { getGlobalIntegrations, getIntegrationsOverview } from '@/features/painel-admin/integracoes/services/adminIntegrationsService';
import { GlobalIntegration, IntegrationsOverview } from '@/features/painel-admin/integracoes/types';

export default function AdminIntegrationsPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [integrations, setIntegrations] = React.useState<GlobalIntegration[]>([]);
    const [overview, setOverview] = React.useState<IntegrationsOverview | null>(null);

    React.useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const [integrationsData, overviewData] = await Promise.all([
                    getGlobalIntegrations(),
                    getIntegrationsOverview(),
                ]);
                setIntegrations(integrationsData);
                setOverview(overviewData);
            } catch (error) {
                console.error("Failed to fetch integrations data", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <AdminIntegrationsLoading />;
    }

    return (
        <div className="space-y-8">
            <AdminIntegrationsHeader totalIntegrations={overview?.total || 0} />
            {overview && <AdminIntegrationsOverview overview={overview} />}
            <AdminIntegrationsFilters />
            {integrations.length > 0 ? (
                <AdminIntegrationsList integrations={integrations} />
            ) : (
                <AdminIntegrationsEmpty />
            )}
        </div>
    );
}
