import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Workflow, Clock, DollarSign, TrendingUp } from 'lucide-react';

const kpis = [
  { title: 'Total de Interações', value: '11,289', icon: Bot, change: '+12.5%' },
  { title: 'Workflows Executados', value: '452', icon: Workflow, change: '+8.1%' },
  { title: 'Tempo Economizado (est.)', value: '184 horas', icon: Clock, change: '+22%' },
  { title: 'ROI Estimado', value: 'R$ 47.3k', icon: DollarSign, change: '+15.2%' },
];

export function ReportsKPIs() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => (
        <Card key={kpi.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
            <kpi.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{kpi.value}</div>
            <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500"/>
                <span className="text-green-500 mr-1">{kpi.change}</span>
                 vs. último mês
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
