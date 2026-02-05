'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import { ChartTooltip, ChartTooltipContent, ChartContainer, ChartConfig } from '@/components/ui/chart';

const lineChartData = [
  { month: 'Jan', roi: 80 },
  { month: 'Fev', roi: 120 },
  { month: 'Mar', roi: 180 },
  { month: 'Abr', roi: 210 },
  { month: 'Mai', roi: 250 },
  { month: 'Jun', roi: 320 },
];

const barChartData = [
    { area: 'Jurídico', savings: 45000 },
    { area: 'Financeiro', savings: 32000 },
    { area: 'Operações', savings: 28000 },
    { area: 'RH', savings: 15000 },
];

const lineChartConfig = {
    roi: { label: "ROI (%)", color: "hsl(var(--chart-1))" },
} satisfies ChartConfig;

const barChartConfig = {
    savings: { label: "Economia (R$)", color: "hsl(var(--chart-1))" },
} satisfies ChartConfig;

export function ReportsROICharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Evolução do ROI</CardTitle>
          <CardDescription>Retorno sobre o investimento ao longo do tempo</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={lineChartConfig} className="h-[250px] w-full">
            <LineChart data={lineChartData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
              <YAxis tickFormatter={(value) => `${value}%`} tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
              <Line dataKey="roi" type="monotone" stroke="var(--color-roi)" strokeWidth={2} dot={true} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Impacto por Área</CardTitle>
          <CardDescription>Economia estimada por departamento</CardDescription>
        </CardHeader>
        <CardContent>
           <ChartContainer config={barChartConfig} className="h-[250px] w-full">
            <BarChart data={barChartData} layout="vertical" margin={{ right: 30, left: -10 }}>
                <CartesianGrid horizontal={false} />
                <YAxis dataKey="area" type="category" tickLine={false} axisLine={false} tickMargin={8} width={80} />
                <XAxis type="number" dataKey="savings" tickFormatter={(value) => `R$${value/1000}k`} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                <Bar dataKey="savings" fill="var(--color-savings)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
