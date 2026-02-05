import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Building, PlayCircle, TrendingDown, TrendingUp } from "lucide-react";
import { AdminBillingMetrics } from "../../types";

type AdminBillingMetricsProps = {
    metrics: AdminBillingMetrics;
};

export function AdminBillingMetrics({ metrics }: AdminBillingMetricsProps) {
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 }).format(value);
    }

    const metricItems = [
        { title: 'MRR', value: formatCurrency(metrics.mrr), icon: DollarSign, change: "+5.2%" },
        { title: 'ARR', value: formatCurrency(metrics.arr), icon: TrendingUp, change: "+5.2%" },
        { title: 'Empresas Pagantes', value: metrics.payingCustomers, icon: Building, change: "+12" },
        { title: 'Trials Ativos', value: metrics.activeTrials, icon: PlayCircle, change: "-3" },
        { title: 'Churn (30d)', value: `${metrics.churnRate}%`, icon: TrendingDown, change: "+0.1%" },
    ];
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {metricItems.map((metric) => (
                <Card key={metric.title}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                        <metric.icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{metric.value}</div>
                        <p className="text-xs text-muted-foreground">{metric.change} vs. último mês</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
