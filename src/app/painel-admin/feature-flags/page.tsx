'use client';
import * as React from 'react';
import { AdminFeatureFlagsHeader } from '@/features/painel-admin/feature-flags/components/AdminFeatureFlagsHeader';
import { AdminFeatureFlagsOverview } from '@/features/painel-admin/feature-flags/components/AdminFeatureFlagsOverview';
import { AdminFeatureFlagsFilters } from '@/features/painel-admin/feature-flags/components/AdminFeatureFlagsFilters';
import { AdminFeatureFlagsList } from '@/features/painel-admin/feature-flags/components/AdminFeatureFlagsList';
import { AdminFeatureFlagsLoading } from '@/features/painel-admin/feature-flags/components/AdminFeatureFlagsLoading';
import { getFeatureFlags, getFeatureFlagsOverview } from '@/features/painel-admin/feature-flags/services/featureFlagService';
import { FeatureFlag, FeatureFlagsOverview } from '@/features/painel-admin/feature-flags/types';

export default function AdminFeatureFlagsPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [flags, setFlags] = React.useState<FeatureFlag[]>([]);
    const [overview, setOverview] = React.useState<FeatureFlagsOverview | null>(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const [flagsData, overviewData] = await Promise.all([
                    getFeatureFlags(),
                    getFeatureFlagsOverview()
                ]);
                setFlags(flagsData);
                setOverview(overviewData);
            } catch (error) {
                console.error("Failed to fetch feature flags data", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <AdminFeatureFlagsLoading />;
    }

    return (
        <div className="space-y-8">
            <AdminFeatureFlagsHeader totalFlags={overview?.total || 0} />
            {overview && <AdminFeatureFlagsOverview overview={overview} />}
            <AdminFeatureFlagsFilters />
            <AdminFeatureFlagsList flags={flags} />
        </div>
    );
}
