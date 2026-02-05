import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Clock, Zap, Target } from 'lucide-react';

const kpis = [
  { title: 'ROI Estimado', value: '320%', icon: TrendingUp, description: 'Retorno sobre o investimento total' },
  { title: 'Economia Total (est.)', value: 'R$ 128.5k', icon: Zap, description: 'Custo de tempo e recursos economizados' },
  { title: 'Redução de Custo Operacional', value: '22%', icon: Target, description: 'Otimização de processos manuais' },
  { title: 'Horas de Trabalho Economizadas', value: '~850', icon: Clock, description: 'Tempo devolvido para a equipe' },
];

export function ReportsROICards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => (
        <Card key={kpi.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
            <kpi.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{kpi.value}</div>
            <p className="text-xs text-muted-foreground">
                {kpi.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
