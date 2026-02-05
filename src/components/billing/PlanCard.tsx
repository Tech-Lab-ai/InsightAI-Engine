'use client';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Minus } from "lucide-react";
import { Plan, FeatureStatus } from "./plans-data";

type PlanCardProps = {
    plan: Plan;
};

const featureIconMap: Record<FeatureStatus, React.ElementType> = {
    'included': Check,
    'limited': Minus,
    'excluded': X,
};

const featureColorMap: Record<FeatureStatus, string> = {
    'included': 'text-primary',
    'limited': 'text-yellow-500',
    'excluded': 'text-muted-foreground',
};


export function PlanCard({ plan }: PlanCardProps) {
    const router = useRouter();

    const handleAction = () => {
        if (plan.id === 'enterprise') {
            router.push('/contato');
        } else if (plan.price !== 'R$ 0,00' && plan.id !== 'trial') {
            router.push(`/billing/checkout?plan=${plan.id}`);
        }
    };

    const isCurrent = plan.id === 'trial'; // Mock, a lógica real viria do estado do usuário

    return (
        <Card className={`flex flex-col ${plan.popular ? 'border-primary ring-2 ring-primary' : ''}`}>
            <CardHeader>
                <CardTitle className="flex justify-between items-center">
                    <span>{plan.name}</span>
                    {plan.popular && <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">MAIS POPULAR</span>}
                </CardTitle>
                <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/mês</span>
                </div>
                <ul className="space-y-4">
                    {plan.features.map((feature, index) => {
                        const Icon = featureIconMap[feature.status];
                        const color = featureColorMap[feature.status];
                        return (
                            <li key={index} className="flex items-start">
                                <Icon className={`h-5 w-5 ${color} mr-2 flex-shrink-0 mt-1`} />
                                <span className="text-muted-foreground">{feature.name}</span>
                            </li>
                        );
                    })}
                </ul>
            </CardContent>
            <CardFooter>
                <Button 
                    className="w-full" 
                    variant={isCurrent ? "secondary" : plan.popular ? "default" : "outline"}
                    onClick={handleAction}
                    disabled={isCurrent}
                >
                    {isCurrent ? "Plano Atual" : plan.cta}
                </Button>
            </CardFooter>
        </Card>
    );
}
