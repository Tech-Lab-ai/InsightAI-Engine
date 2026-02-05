import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bot, FileText, Activity, Workflow, DollarSign, ShieldAlert } from "lucide-react";
import { MetricsCard } from "./MetricsCard";

const stats = [
    { title: "Documentos Ativos", value: "1,250", icon: FileText, description: "+20.1% do último mês" },
    { title: "Interações no Chat", value: "23,150", icon: Bot, description: "+180.1% do último mês" },
    { title: "Workflows Ativos", value: "12", icon: Workflow, description: "+5 desde a última semana" },
    { title: "ROI Estimado", value: "R$ 47.3k", icon: DollarSign, description: "+15.2% vs. último mês" },
];

export function DashboardOverview() {
    return (
        <>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <MetricsCard
                        key={stat.title}
                        title={stat.title}
                        value={stat.value}
                        icon={stat.icon}
                        description={stat.description}
                    />
                ))}
            </div>
             <Card className="border-amber-500/50 bg-amber-500/5">
                <CardHeader className="flex flex-row items-center gap-4">
                     <ShieldAlert className="h-6 w-6 text-amber-600" />
                    <div>
                        <CardTitle className="text-amber-700">Alerta de Segurança</CardTitle>
                        <CardDescription className="text-amber-600">
                            Detectamos 3 tentativas de login mal-sucedidas em uma conta de administrador.
                        </CardDescription>
                    </div>
                </CardHeader>
            </Card>
        </>
    );
}
