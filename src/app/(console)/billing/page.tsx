'use client';
import * as React from 'react';
import { BillingHeader } from '@/components/billing/BillingHeader';
import { CurrentPlanCard } from '@/components/billing/CurrentPlanCard';
import { PlansGrid } from '@/components/billing/PlansGrid';
import { BillingSummary } from '@/components/billing/BillingSummary';
import { BillingLoading } from '@/components/billing/BillingLoading';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info } from 'lucide-react';

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
            <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Pagamento Externo</AlertTitle>
                <AlertDescription>
                    O pagamento é processado externamente via Asaas. A liberação do plano ocorre após confirmação do pagamento.
                </AlertDescription>
            </Alert>
            <CurrentPlanCard />
            <PlansGrid />
            <BillingSummary />
        </div>
    );
}
