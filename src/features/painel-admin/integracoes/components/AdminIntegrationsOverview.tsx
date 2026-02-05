import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Power, Play, PowerOff, Milestone } from "lucide-react";
import { IntegrationsOverview } from "../../types";

type AdminIntegrationsOverviewProps = {
    overview: IntegrationsOverview;
};

export function AdminIntegrationsOverview({ overview }: AdminIntegrationsOverviewProps) {
    const metrics = [
        { title: "Ativas", value: overview.active, icon: Power, color: "text-green-500" },
        { title: "Em Modo Simulado", value: overview.simulated, icon: Play, color: "text-blue-500" },
        { title: "Desativadas", value: overview.disabled, icon: PowerOff, color: "text-red-500" },
        { title: "Em Roadmap", value: overview.roadmap, icon: Milestone, color: "text-muted-foreground" },
    ];

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map(metric => (
                <Card key={metric.title}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                        <metric.icon className={`h-4 w-4 text-muted-foreground ${metric.color}`} />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{metric.value}</div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
