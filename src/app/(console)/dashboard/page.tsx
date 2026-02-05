import { PageHeader, PageHeaderTitle } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, FileText, Layers, ShieldCheck } from "lucide-react";

const stats = [
    { title: "Documentos Ativos", value: "1,204", icon: FileText },
    { title: "Agentes Especializados", value: "4", icon: Bot },
    { title: "Sessões Abertas", value: "32", icon: Layers },
    { title: "Eventos de Auditoria (24h)", value: "5,678", icon: ShieldCheck },
];

export default function DashboardPage() {
    return (
        <div className="flex flex-col gap-4">
            <PageHeader>
                <PageHeaderTitle>Dashboard</PageHeaderTitle>
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
                                Dados em tempo real
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                 <Card>
                    <CardHeader>
                        <CardTitle>Atividade Recente</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Em breve: Gráfico de atividades e logs recentes.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Qualidade do RAG</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Em breve: Métricas de groundedness e fallback rate.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
