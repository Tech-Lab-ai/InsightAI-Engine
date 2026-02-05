'use client';
import * as React from 'react';
import { AdminBillingHeader } from '@/features/painel-admin/billing/components/AdminBillingHeader';
import { AdminBillingMetrics } from '@/features/painel-admin/billing/components/AdminBillingMetrics';
import { AdminBillingCharts } from '@/features/painel-admin/billing/components/AdminBillingCharts';
import { AdminBillingTable } from '@/features/painel-admin/billing/components/AdminBillingTable';
import { AdminBillingLoading } from '@/features/painel-admin/billing/components/AdminBillingLoading';
import { getAdminBillingMetrics, getAdminSubscriptions } from '@/features/painel-admin/billing/services/adminBillingService';
import { AdminBillingMetrics as AdminBillingMetricsType, AdminSubscription } from '@/features/painel-admin/billing/types';

export default function AdminBillingPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [metrics, setMetrics] = React.useState<AdminBillingMetricsType | null>(null);
    const [subscriptions, setSubscriptions] = React.useState<AdminSubscription[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const [metricsData, subscriptionsData] = await Promise.all([
                    getAdminBillingMetrics(),
                    getAdminSubscriptions()
                ]);
                setMetrics(metricsData);
                setSubscriptions(subscriptionsData);
            } catch (error) {
                console.error("Failed to fetch admin billing data", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <AdminBillingLoading />;
    }

    return (
        <div className="space-y-8">
            <AdminBillingHeader />
            {metrics && <AdminBillingMetrics metrics={metrics} />}
            <AdminBillingCharts />
            <AdminBillingTable subscriptions={subscriptions} />
        </div>
    );
}
