'use client';
import * as React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { plans, Plan } from '@/components/billing/plans-data';
import { CheckoutHeader } from '@/components/billing/checkout/CheckoutHeader';
import { CheckoutPlanSummary } from '@/components/billing/checkout/CheckoutPlanSummary';
import { CheckoutActions } from '@/components/billing/checkout/CheckoutActions';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export default function CheckoutPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { toast } = useToast();
    const planId = searchParams.get('plan');
    const [selectedPlan, setSelectedPlan] = React.useState<Plan | undefined>(undefined);
    const [isProcessing, setIsProcessing] = React.useState(false);

    React.useEffect(() => {
        if (planId) {
            const plan = plans.find(p => p.id === planId);
            setSelectedPlan(plan);
        } else {
            router.push('/billing');
        }
    }, [planId, router]);

    const handlePayment = () => {
        setIsProcessing(true);
        setTimeout(() => {
            toast({
                title: 'Pagamento Aprovado!',
                description: `Seu upgrade para o plano ${selectedPlan?.name} foi concluído.`,
            });
            router.push('/dashboard');
        }, 2000);
    };

    if (!selectedPlan) {
        return <div className="p-8 text-center">Carregando plano...</div>;
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
