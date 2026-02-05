
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Workflow, PlayCircle, CheckCircle, XCircle } from "lucide-react";

const stats = [
    { title: "Total de Workflows", value: "24", icon: Workflow },
    { title: "Em Execução", value: "3", icon: PlayCircle },
    { title: "Concluídos (24h)", value: "128", icon: CheckCircle },
    { title: "Com Erro", value: "1", icon: XCircle },
];

export function WorkflowStats() {
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
