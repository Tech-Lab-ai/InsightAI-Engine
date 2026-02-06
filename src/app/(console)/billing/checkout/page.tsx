'use client';

import * as React from 'react';
import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CheckoutHeader } from '@/features/billing/components/checkout/CheckoutHeader';
import { CheckoutPlanSummary } from '@/features/billing/components/checkout/CheckoutPlanSummary';
import { CheckoutActions } from '@/features/billing/components/checkout/CheckoutActions';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { getPlanById, Plan } from '@/features/billing/services/planService';
import { CheckoutLoading } from '@/features/billing/components/checkout/CheckoutLoading';

// The component that uses the hook
function CheckoutContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { toast } = useToast();
    const [isProcessing, setIsProcessing] = React.useState(false);

    // Deriving state from URL params. This will re-render when params change.
    const planId = searchParams.get('plan');
    const selectedPlan = planId ? getPlanById(planId as Plan['id']) : undefined;

    React.useEffect(() => {
        // If after the component mounts and params are available, there's no valid plan, redirect.
        if (planId && !selectedPlan) {
            router.push('/billing');
        }
    }, [planId, selectedPlan, router]);

    const handlePayment = () => {
        if (!selectedPlan) return;
        setIsProcessing(true);
        setTimeout(() => {
            toast({
                title: 'Pagamento Aprovado!',
                description: `Seu upgrade para o plano ${selectedPlan.name} foi concluído.`,
            });
            router.push('/dashboard');
        }, 2000);
    };

    if (!selectedPlan) {
        // Render loading state while waiting for redirect or plan resolution
        return <CheckoutLoading />;
    }

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <CheckoutHeader />
            <Card>
                <CardContent className="p-6">
                    <CheckoutPlanSummary plan={selectedPlan} />
                    <CheckoutActions
                        onConfirm={handlePayment}
                        onCancel={() => router.push('/billing')}
                        isProcessing={isProcessing}
                    />
                </CardContent>
            </Card>
        </div>
    );
}

// The page now wraps the content component in Suspense
export default function CheckoutPage() {
  return (
    <Suspense fallback={<CheckoutLoading />}>
      <CheckoutContent />
    </Suspense>
  );
}
