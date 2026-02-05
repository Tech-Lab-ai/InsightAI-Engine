import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ticket, UserClock, ShieldAlert, Clock } from "lucide-react";
import { AdminSupportMetrics } from "../../types";

type Props = {
    metrics: AdminSupportMetrics;
};

export function AdminSupportMetrics({ metrics }: Props) {
    const metricItems = [
        { title: 'Tickets Abertos', value: metrics.openTickets, icon: Ticket },
        { title: 'Aguardando Cliente', value: metrics.pendingClient, icon: UserClock },
        { title: 'Violações de SLA', value: metrics.slaViolations, icon: ShieldAlert, color: "text-red-500" },
        { title: 'Tempo Médio de Resposta', value: metrics.avgResponseTime, icon: Clock },
    ];
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {metricItems.map((metric) => (
                <Card key={metric.title}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                        <metric.icon className={`h-4 w-4 text-muted-foreground ${metric.color || ''}`} />
                    </CardHeader>
                    <CardContent>
                        <div className={`text-2xl font-bold ${metric.color || ''}`}>{metric.value}</div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
