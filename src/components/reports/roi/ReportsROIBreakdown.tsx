import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bot, Check, Clock, TrendingUp } from "lucide-react";

const benefits = [
    {
        icon: Bot,
        title: "Processos Automatizados",
        description: "Workflows como análise de contratos e triagem de documentos são executados em segundos, não em horas."
    },
    {
        icon: Clock,
        title: "Tempo da Equipe Devolvido",
        description: "Libere sua equipe de tarefas repetitivas para que possam focar em atividades estratégicas de alto valor."
    },
    {
        icon: Check,
        title: "Redução de Erros Manuais",
        description: "A automação minimiza o risco de erro humano em processos críticos, garantindo maior precisão e conformidade."
    },
    {
        icon: TrendingUp,
        title: "Decisões Mais Rápidas",
        description: "Com acesso instantâneo a informações precisas, o ciclo de tomada de decisão é drasticamente reduzido."
    }
]

export function ReportsROIBreakdown() {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Detalhamento dos Benefícios</CardTitle>
            <CardDescription>Como o InsightAI gera valor para sua operação.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
            {benefits.map(benefit => (
                 <div key={benefit.title} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <benefit.icon className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                </div>
            ))}
        </CardContent>
    </Card>
  );
}
