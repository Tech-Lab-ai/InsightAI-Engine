import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Bot, Workflow, FileText, TrendingUp } from 'lucide-react';

const metrics = [
  { title: 'Total de Interações', value: '11,289', icon: Bot, change: '+12.5%' },
  { title: 'Usuários Ativos (30d)', value: '42', icon: Users, change: '+5' },
  { title: 'Workflows Utilizados', value: '18', icon: Workflow, change: '+2' },
  { title: 'Documentos Acessados', value: '753', icon: FileText, change: '+5.8%' },
];

export function ReportsUsageMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500"/>
                <span className="text-green-500 mr-1">{metric.change}</span>
                 vs. último período
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
