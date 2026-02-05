'use client';
import * as React from 'react';

import { IntegrationsHeader } from '@/features/settings/components/integrations/IntegrationsHeader';
import { IntegrationsNotice } from '@/features/settings/components/integrations/IntegrationsNotice';
import { IntegrationsList } from '@/features/settings/components/integrations/IntegrationsList';
import { IntegrationsLoading } from '@/features/settings/components/integrations/IntegrationsLoading';

export default function IntegrationsSettingsPage() {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="space-y-8">
            <IntegrationsHeader />
            <IntegrationsNotice />
            {isLoading ? <IntegrationsLoading /> : <IntegrationsList />}
        </div>
    );
}
