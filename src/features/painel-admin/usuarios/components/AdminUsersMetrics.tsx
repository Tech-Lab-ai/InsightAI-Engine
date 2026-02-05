import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, ShieldAlert, UserCheck, UserPlus } from "lucide-react";
import { AdminUserMetrics } from "../../types";

type AdminUsersMetricsProps = {
    metrics: AdminUserMetrics;
};

export function AdminUsersMetrics({ metrics }: AdminUsersMetricsProps) {
    const metricItems = [
        { title: 'Usuários Ativos', value: metrics.active, icon: UserCheck },
        { title: 'Usuários Suspensos', value: metrics.suspended, icon: ShieldAlert },
        { title: 'Admins (Clientes)', value: metrics.admins, icon: Users },
        { title: 'Usuários em Trial', value: metrics.trial, icon: UserPlus },
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
