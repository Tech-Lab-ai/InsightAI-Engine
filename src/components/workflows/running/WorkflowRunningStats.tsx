import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayCircle, List, AlertTriangle, Timer } from "lucide-react";

const stats = [
    { title: "Total em Execução", value: "3", icon: PlayCircle },
    { title: "Em Fila", value: "5", icon: List },
    { title: "Com Alerta", value: "1", icon: AlertTriangle },
    { title: "Tempo Médio", value: "2m 45s", icon: Timer },
];

export function WorkflowRunningStats() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
                <Card key={stat.title}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            {stat.title}
                        </CardTitle>
                        <stat.icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stat.value}</div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
