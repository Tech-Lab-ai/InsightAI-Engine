'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldAlert, AlertTriangle, Building, Clock } from "lucide-react";
import { SecurityPosture } from '../../types';

type AdminSecurityOverviewProps = {
    posture: SecurityPosture;
};

export function AdminSecurityOverview({ posture }: AdminSecurityOverviewProps) {
    const metrics = [
        { title: 'Incidentes Abertos', value: posture.openIncidents, icon: ShieldAlert },
        { title: 'Eventos Críticos (30d)', value: posture.criticalEvents30d, icon: AlertTriangle },
        { title: 'Empresas Impactadas', value: posture.affectedCompanies, icon: Building },
        { title: 'Última Revisão', value: posture.lastReview, icon: Clock },
    ];

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
                <Card key={metric.title}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                        <metric.icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{metric.value}</div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
