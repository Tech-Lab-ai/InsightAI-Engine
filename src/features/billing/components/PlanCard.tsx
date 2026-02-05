'use client';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Minus, AlertTriangle } from "lucide-react";
import { Plan, FeatureStatus } from "../types/plan";

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
    const isCurrent = plan.id === 'trial'; // Mock, a lógica real viria do estado do usuário

    const CtaButton = () => {
        const isEnterprise = plan.id === 'enterprise';
        
        const buttonProps = {
            className: "w-full",
            variant: isCurrent ? "secondary" as const : (plan.popular ? "default" as const : "outline" as const),
            disabled: isCurrent,
        };

        if (isCurrent) {
            return <Button {...buttonProps}>Plano Atual</Button>;
        }

        const href = isEnterprise ? '/support?plan=enterprise' : (plan.asaasLink || '#');
        const target = plan.asaasLink ? '_blank' : '_self';

        return (
            <Button {...buttonProps} asChild>
                <Link href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
                    {plan.cta}
                </Link>
            </Button>
        );
    };

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
                    {plan.price === 'Custom' || plan.price === 'R$ 0,00' ? (
                        <span className="text-4xl font-bold">{plan.price}</span>
                    ) : (
                        <div>
                            <span className="text-muted-foreground text-2xl align-top">R$ </span>
                            <span className="text-4xl font-bold">{plan.price}</span>
                            <span className="text-muted-foreground">/mês</span>
                        </div>
                    )}
                </div>

                {plan.price !== 'Custom' && plan.price !== 'R$ 0,00' && (
                    <p className="text-xs text-muted-foreground mb-6 flex items-start gap-1.5">
                        <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span>Os valores podem sofrer pequenos reajustes de acordo com taxas operacionais do Asaas.</span>
                    </p>
                )}

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
                <CtaButton />
            </CardFooter>
        </Card>
    );
}
