import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, FileText, Activity, Workflow } from "lucide-react";
import { ActivityChart } from "@/components/activity/ActivityChart";
import { ActivityLogs } from "@/components/activity/ActivityLogs";

const stats = [
    { title: "Total de Documentos", value: "1,250", icon: FileText, description: "+20.1% do último mês" },
    { title: "Interações no Chat", value: "23,150", icon: Bot, description: "+180.1% do último mês" },
    { title: "Workflows Ativos", value: "12", icon: Workflow, description: "+5 desde a última semana" },
    { title: "Status da Plataforma", value: "Normal", icon: Activity, description: "Todos os sistemas operacionais" },
];

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <PageHeader>
                <PageHeaderTitle>Dashboard</PageHeaderTitle>
                <PageHeaderDescription>Visão geral da sua atividade na plataforma InsightAI.</PageHeaderDescription>
            </PageHeader>
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
                            <p className="text-xs text-muted-foreground">
                                {stat.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                 <div className="lg:col-span-2">
                    <ActivityChart />
                 </div>
                 <div>
                    <ActivityLogs />
                 </div>
            </div>
        </div>
    );
}
