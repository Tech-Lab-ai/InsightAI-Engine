'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChartTooltip, ChartTooltipContent, ChartContainer, ChartConfig } from '@/components/ui/chart';
import { mockChartData } from '../../services/activityService';

const chartConfig = {
  Chat: {
    label: "Chat",
    color: "hsl(var(--chart-1))",
  },
  Workflow: {
    label: "Workflow",
    color: "hsl(var(--chart-2))",
  },
  Documento: {
    label: "Documento",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function ActivityChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Atividade da Semana</CardTitle>
        <CardDescription>Volume de interações nos últimos 7 dias</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[350px] w-full">
          <BarChart data={mockChartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Bar dataKey="Chat" stackId="a" fill="var(--color-Chat)" radius={[0, 0, 4, 4]} />
            <Bar dataKey="Workflow" stackId="a" fill="var(--color-Workflow)" radius={[0, 0, 4, 4]} />
            <Bar dataKey="Documento" stackId="a" fill="var(--color-Documento)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
