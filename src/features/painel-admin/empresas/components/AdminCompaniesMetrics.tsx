import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Play, Pause, DollarSign } from "lucide-react";
import { AdminCompanyMetrics } from "../../types";

type AdminCompaniesMetricsProps = {
    metrics: AdminCompanyMetrics;
};

export function AdminCompaniesMetrics({ metrics }: AdminCompaniesMetricsProps) {
    const metricItems = [
        { title: 'Empresas Ativas', value: metrics.active, icon: Building },
        { title: 'Em Trial', value: metrics.trial, icon: Play },
        { title: 'Suspensas', value: metrics.suspended, icon: Pause },
        { title: 'Receita Estimada (MRR)', value: metrics.mrr, icon: DollarSign },
    ];
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {metricItems.map((metric) => (
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
