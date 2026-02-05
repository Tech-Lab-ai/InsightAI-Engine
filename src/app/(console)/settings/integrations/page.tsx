'use client';
import * as React from 'react';

import { IntegrationsHeader } from '@/components/settings/integrations/IntegrationsHeader';
import { IntegrationsNotice } from '@/components/settings/integrations/IntegrationsNotice';
import { IntegrationsList } from '@/components/settings/integrations/IntegrationsList';
import { IntegrationsLoading } from '@/components/settings/integrations/IntegrationsLoading';

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
