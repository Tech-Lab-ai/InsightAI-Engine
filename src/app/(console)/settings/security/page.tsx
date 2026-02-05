'use client';
import * as React from 'react';

import { SecurityHeader } from '@/features/settings/components/security/SecurityHeader';
import { SecurityStatusCard } from '@/features/settings/components/security/SecurityStatusCard';
import { SecurityAuthSection } from '@/features/settings/components/security/SecurityAuthSection';
import { SecurityAccessSection } from '@/features/settings/components/security/SecurityAccessSection';
import { SecurityAuditLinks } from '@/features/settings/components/security/SecurityAuditLinks';
import { SecurityLoading } from '@/features/settings/components/security/SecurityLoading';

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
