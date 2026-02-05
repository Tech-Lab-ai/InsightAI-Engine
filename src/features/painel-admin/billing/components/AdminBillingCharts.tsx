'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 40000 },
  { month: 'Fev', revenue: 38000 },
  { month: 'Mar', revenue: 42000 },
  { month: 'Abr', revenue: 45000 },
  { month: 'Mai', revenue: 46000 },
  { month: 'Jun', revenue: 47300 },
];

const planData = [
    { name: 'Básico', count: 25 },
    { name: 'Starter', count: 40 },
    { name: 'Pro', count: 20 },
    { name: 'Enterprise', count: 4 },
];

export function AdminBillingCharts() {
  return (
    <div className="grid h-full gap-4 md:grid-cols-2">
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>Crescimento de Receita Mensal (MRR)</CardTitle>
          <CardDescription>Evolução da receita recorrente nos últimos 6 meses.</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `R$${'\'\'\''}${value / 1000}k`} />
              <Tooltip formatter={(value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)} />
              <Area type="monotone" dataKey="revenue" name="MRR" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorRevenue)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>Distribuição de Planos</CardTitle>
          <CardDescription>Número de empresas por plano contratado.</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={planData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" name="Empresas" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
