'use client';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Flag, ArrowRight } from 'lucide-react';
import { CriticalFlagsSummary } from '../../types';

type AdminSystemFlagsSummaryProps = {
    criticalFlags: CriticalFlagsSummary;
};

export function AdminSystemFlagsSummary({ criticalFlags }: AdminSystemFlagsSummaryProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Flag className="h-5 w-5" />
                    Feature Flags
                </CardTitle>
                <CardDescription>Resumo de flags globais e de alto impacto.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">Kill Switches Ativos</span>
                    <span className="font-bold text-red-500">{criticalFlags.activeKillSwitches}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">Flags Globais Críticas</span>
                    <span className="font-bold">{criticalFlags.criticalGlobalFlags}</span>
                </div>
                 <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Última alteração:</span>
                    <span className="text-muted-foreground">{criticalFlags.lastModified}</span>
                </div>
                 <Button variant="outline" className="w-full" asChild>
                    <Link href="/painel-admin/feature-flags">
                        Gerenciar Todas as Flags
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}
