import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const activities = [
    { date: '28/07/2024 14:30', user: 'ana.silva@cliente.com', type: 'Chat', resource: 'Contrato 2024', status: 'Concluído' },
    { date: '28/07/2024 14:25', user: 'bruno.costa@cliente.com', type: 'Workflow', resource: 'Triagem de Suporte', status: 'Com Erro' },
    { date: '28/07/2024 14:22', user: 'ana.silva@cliente.com', type: 'Documento', resource: 'Relatório Financeiro Q2', status: 'Visualizado' },
    { date: '28/07/2024 14:20', user: 'carlos.pereira@cliente.com', type: 'Relatório', resource: 'ROI de Julho', status: 'Gerado' },
    { date: '28/07/2024 14:15', user: 'ana.silva@cliente.com', type: 'Chat', resource: 'Contrato 2024', status: 'Concluído' },
];

export function ReportsUsageTable() {
    const statusVariant: { [key: string]: "default" | "secondary" | "destructive" | "outline" } = {
        'Concluído': 'default',
        'Visualizado': 'secondary',
        'Com Erro': 'destructive',
        'Gerado': 'outline',
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Atividade Detalhada Recente</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Data</TableHead>
                            <TableHead>Usuário</TableHead>
                            <TableHead>Tipo</TableHead>
                            <TableHead>Recurso</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {activities.map((activity, index) => (
                            <TableRow key={index}>
                                <TableCell>{activity.date}</TableCell>
                                <TableCell className="font-medium">{activity.user}</TableCell>
                                <TableCell>{activity.type}</TableCell>
                                <TableCell>{activity.resource}</TableCell>
                                <TableCell>
                                    <Badge variant={statusVariant[activity.status] || 'secondary'} className="capitalize">
                                        {activity.status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
