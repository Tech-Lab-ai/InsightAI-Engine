'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const usageData = [
  { name: 'Jan', Interações: 4000, Workflows: 2400 },
  { name: 'Fev', Interações: 3000, Workflows: 1398 },
  { name: 'Mar', Interações: 2000, Workflows: 9800 },
  { name: 'Abr', Interações: 2780, Workflows: 3908 },
  { name: 'Mai', Interações: 1890, Workflows: 4800 },
  { name: 'Jun', Interações: 2390, Workflows: 3800 },
];

const roiData = [
  { name: 'Jurídico', roi: 400, pv: 240, amt: 240 },
  { name: 'Financeiro', roi: 300, pv: 139, amt: 221 },
  { name: 'Operações', roi: 200, pv: 980, amt: 229 },
  { name: 'RH', roi: 278, pv: 390, amt: 200 },
];

export function ChartsSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Uso da Plataforma</CardTitle>
          <CardDescription>Interações e workflows executados ao longo do tempo.</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={usageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Interações" stroke="#8884d8" />
              <Line type="monotone" dataKey="Workflows" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Atividade por Área</CardTitle>
          <CardDescription>ROI estimado por departamento.</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={roiData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={80} />
              <Tooltip />
              <Legend />
              <Bar dataKey="roi" fill="#8884d8" name="ROI Estimado" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
