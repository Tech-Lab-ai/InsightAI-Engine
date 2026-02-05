import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ReportsAuditRow } from './ReportsAuditRow';
import { AuditEvent } from './audit-mock-data';

type ReportsAuditTableProps = {
    events: AuditEvent[];
};

export function ReportsAuditTable({ events }: ReportsAuditTableProps) {
    return (
        <div className="border rounded-lg">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[180px]">Data/Hora</TableHead>
                        <TableHead>Usuário</TableHead>
                        <TableHead>Tipo de Evento</TableHead>
                        <TableHead>Recurso</TableHead>
                        <TableHead>Severidade</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {events.map((event) => (
                        <ReportsAuditRow key={event.id} event={event} />
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
