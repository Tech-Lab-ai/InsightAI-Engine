'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import { ChartTooltip, ChartTooltipContent, ChartContainer, ChartConfig } from '@/components/ui/chart';

const lineChartData = [
  { date: 'Semana 1', interactions: 2800 },
  { date: 'Semana 2', interactions: 3200 },
  { date: 'Semana 3', interactions: 2500 },
  { date: 'Semana 4', interactions: 4100 },
];

const barChartData = [
    { resource: 'Chat', usage: 4500 },
    { resource: 'Workflows', usage: 1800 },
    { resource: 'Documentos', usage: 3100 },
    { resource: 'Relatórios', usage: 950 },
];

const lineChartConfig = {
    interactions: { label: "Interações", color: "hsl(var(--chart-1))" },
} satisfies ChartConfig;

const barChartConfig = {
    usage: { label: "Uso", color: "hsl(var(--chart-1))" },
} satisfies ChartConfig;

export function ReportsUsageCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Interações ao Longo do Tempo</CardTitle>
          <CardDescription>Últimos 30 dias</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={lineChartConfig} className="h-[250px] w-full">
            <LineChart data={lineChartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
              <Line dataKey="interactions" type="monotone" stroke="var(--color-interactions)" strokeWidth={2} dot={true} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Uso por Tipo de Recurso</CardTitle>
          <CardDescription>Total de interações por recurso</CardDescription>
        </CardHeader>
        <CardContent>
           <ChartContainer config={barChartConfig} className="h-[250px] w-full">
            <BarChart data={barChartData} layout="horizontal" margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="resource" tickLine={false} axisLine={false} tickMargin={8} />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                <Bar dataKey="usage" fill="var(--color-usage)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
