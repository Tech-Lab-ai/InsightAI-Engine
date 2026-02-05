import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, ShieldAlert, Users, Activity } from "lucide-react";
import { TelemetryMetrics } from "../../types";

type AdminTelemetryMetricsProps = {
    metrics: TelemetryMetrics;
};

export function AdminTelemetryMetrics({ metrics }: AdminTelemetryMetricsProps) {
    const metricItems = [
        { title: 'Eventos Críticos (24h)', value: metrics.criticalEvents24h, icon: AlertTriangle, className: "text-red-500" },
        { title: 'Incidentes Abertos', value: metrics.openIncidents, icon: ShieldAlert, className: "text-amber-500" },
        { title: 'Tentativas Suspeitas', value: metrics.suspiciousAttempts, icon: Activity, className: "" },
        { title: 'Empresas Afetadas', value: metrics.affectedCompanies, icon: Users, className: "" },
    ];
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {metricItems.map((metric) => (
                <Card key={metric.title}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                        <metric.icon className={`h-4 w-4 text-muted-foreground ${metric.className}`} />
                    </CardHeader>
                    <CardContent>
                        <div className={`text-2xl font-bold ${metric.className}`}>{metric.value}</div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
