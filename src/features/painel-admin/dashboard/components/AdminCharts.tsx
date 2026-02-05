'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const mrrData = [
  { name: 'Jan', MRR: 4000 },
  { name: 'Fev', MRR: 3000 },
  { name: 'Mar', MRR: 5000 },
  { name: 'Abr', MRR: 4500 },
  { name: 'Mai', MRR: 6200 },
  { name: 'Jun', MRR: 7100 },
];

const activityData = [
    { name: 'Jurídico', "Uso de IA": 400 },
    { name: 'Financeiro', "Uso de IA": 300 },
    { name: 'Operações', "Uso de IA": 200 },
    { name: 'RH', "Uso de IA": 278 },
];

export function AdminCharts() {
  return (
    <div className="grid h-full gap-4 md:grid-cols-2">
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>Crescimento da Receita (MRR)</CardTitle>
          <CardDescription>Receita Mensal Recorrente nos últimos 6 meses.</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mrrData}>
              <defs>
                <linearGradient id="colorMrr" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `R$${value / 1000}k`} />
              <Tooltip formatter={(value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)} />
              <Area type="monotone" dataKey="MRR" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorMrr)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>Uso de IA por Setor</CardTitle>
          <CardDescription>Distribuição de consumo dos recursos de IA.</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={activityData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={80} />
              <Tooltip />
              <Bar dataKey="Uso de IA" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
