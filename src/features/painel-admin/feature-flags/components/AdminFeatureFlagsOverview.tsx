import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Power, TestTube, PowerOff, AlertCircle } from "lucide-react";
import { FeatureFlagsOverview } from "../../types";

type AdminFeatureFlagsOverviewProps = {
    overview: FeatureFlagsOverview;
};

export function AdminFeatureFlagsOverview({ overview }: AdminFeatureFlagsOverviewProps) {
    const metrics = [
        { title: 'Flags Ativas', value: overview.active, icon: Power, color: "text-green-500" },
        { title: 'Flags em Teste', value: overview.testing, icon: TestTube, color: "text-blue-500" },
        { title: 'Flags Desativadas', value: overview.inactive, icon: PowerOff, color: "text-red-500" },
        { title: 'Flags Críticas', value: overview.critical, icon: AlertCircle, color: "text-amber-500" },
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
                        <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
