import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const activities = [
    { type: 'Consultas no Chat', volume: '8,123', trend: '+5.2%', trendIcon: ArrowUpRight, trendColor: 'text-green-500', lastUpdate: 'Agora' },
    { type: 'Documentos Processados', volume: '1,204', trend: '+1.8%', trendIcon: ArrowUpRight, trendColor: 'text-green-500', lastUpdate: 'Há 5 minutos' },
    { type: 'Workflows Executados', volume: '452', trend: '-0.5%', trendIcon: ArrowDownRight, trendColor: 'text-red-500', lastUpdate: 'Há 12 minutos' },
    { type: 'Relatórios Gerados', volume: '128', trend: '+3.0%', trendIcon: ArrowUpRight, trendColor: 'text-green-500', lastUpdate: 'Há 1 hora' },
    { type: 'Alertas de Auditoria', volume: '12', trend: '+10%', trendIcon: ArrowUpRight, trendColor: 'text-green-500', lastUpdate: 'Há 3 horas' },
];

export function ReportsTable() {
    return (
        <div className="border rounded-lg">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Tipo de Atividade</TableHead>
                        <TableHead>Volume</TableHead>
                        <TableHead>Tendência (24h)</TableHead>
                        <TableHead>Última Atualização</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {activities.map((activity) => {
                        const TrendIcon = activity.trendIcon;
                        return (
                            <TableRow key={activity.type}>
                                <TableCell className="font-medium">{activity.type}</TableCell>
                                <TableCell>{activity.volume}</TableCell>
                                <TableCell>
                                    <Badge variant="outline" className={`border-none flex items-center gap-1 w-fit ${activity.trendColor}`}>
                                        <TrendIcon className="h-3 w-3" />
                                        {activity.trend}
                                    </Badge>
                                </TableCell>
                                <TableCell>{activity.lastUpdate}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}
