'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import { ChartTooltip, ChartTooltipContent, ChartContainer, ChartConfig } from '@/components/ui/chart';

const chartData = [
  { date: '01/07', interactions: 280, workflows: 15 },
  { date: '02/07', interactions: 320, workflows: 22 },
  { date: '03/07', interactions: 250, workflows: 18 },
  { date: '04/07', interactions: 410, workflows: 31 },
  { date: '05/07', interactions: 380, workflows: 28 },
  { date: '06/07', interactions: 450, workflows: 35 },
  { date: '07/07', interactions: 480, workflows: 38 },
];

const barChartData = [
    { type: 'Chat', count: 4500 },
    { type: 'Agentes', count: 2100 },
    { type: 'Workflows', count: 1800 },
    { type: 'Relatórios', count: 950 },
]

const lineChartConfig = {
    interactions: {
      label: "Interações",
      color: "hsl(var(--chart-1))",
    },
    workflows: {
        label: "Workflows",
        color: "hsl(var(--chart-2))",
    }
} satisfies ChartConfig;

const barChartConfig = {
    count: {
        label: "Contagem",
        color: "hsl(var(--chart-1))",
    }
} satisfies ChartConfig;

export function ReportsCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Uso da Plataforma</CardTitle>
          <CardDescription>Últimos 7 dias</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={lineChartConfig} className="h-[250px] w-full">
            <LineChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
              <Line dataKey="interactions" type="monotone" stroke="var(--color-interactions)" strokeWidth={2} dot={false} />
               <Line dataKey="workflows" type="monotone" stroke="var(--color-workflows)" strokeWidth={2} dot={false} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Distribuição de Interações</CardTitle>
          <CardDescription>Total por tipo</CardDescription>
        </CardHeader>
        <CardContent>
           <ChartContainer config={barChartConfig} className="h-[250px] w-full">
            <BarChart data={barChartData} layout="vertical" margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
                <YAxis dataKey="type" type="category" tickLine={false} axisLine={false} tickMargin={8} width={80} />
                <XAxis type="number" hide />
                <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                <Bar dataKey="count" fill="var(--color-count)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
