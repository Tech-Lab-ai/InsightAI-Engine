'use client';
import * as React from 'react';
import { BillingHeader } from '@/components/billing/BillingHeader';
import { CurrentPlanCard } from '@/components/billing/CurrentPlanCard';
import { PlansGrid } from '@/components/billing/PlansGrid';
import { BillingSummary } from '@/components/billing/BillingSummary';
import { BillingLoading } from '@/components/billing/BillingLoading';

export default function BillingPage() {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <BillingLoading />;
    }

    return (
        <div className="space-y-8">
            <BillingHeader />
            <CurrentPlanCard />
            <PlansGrid />
            <BillingSummary />
        </div>
    );
}
