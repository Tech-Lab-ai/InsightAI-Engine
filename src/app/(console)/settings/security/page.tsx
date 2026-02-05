'use client';
import * as React from 'react';

import { SecurityHeader } from '@/components/settings/security/SecurityHeader';
import { SecurityStatusCard } from '@/components/settings/security/SecurityStatusCard';
import { SecurityAuthSection } from '@/components/settings/security/SecurityAuthSection';
import { SecurityAccessSection } from '@/components/settings/security/SecurityAccessSection';
import { SecurityAuditLinks } from '@/components/settings/security/SecurityAuditLinks';
import { SecurityLoading } from '@/components/settings/security/SecurityLoading';

export default function SecuritySettingsPage() {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <SecurityLoading />;
    }

    return (
        <div className="space-y-8">
            <SecurityHeader />
            <SecurityStatusCard />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <SecurityAuthSection />
                <SecurityAccessSection />
            </div>
            <SecurityAuditLinks />
        </div>
    );
}
