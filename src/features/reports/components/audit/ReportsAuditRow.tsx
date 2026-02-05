'use client';
import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ReportsAuditEventDetails } from "./ReportsAuditEventDetails";
import { AuditEvent } from "../../types/audit";

type ReportsAuditRowProps = {
    event: AuditEvent;
};

const severityVariant: { [key: string]: "destructive" | "secondary" | "outline" | "default" } = {
    'Crítico': 'destructive',
    'Alto': 'destructive',
    'Médio': 'secondary',
    'Baixo': 'outline',
    'Informativo': 'default'
};
const severityOutline: { [key: string]: boolean } = {
    'Alto': true,
};

export function ReportsAuditRow({ event }: ReportsAuditRowProps) {
    return (
        <TableRow>
            <TableCell className="font-mono text-xs">{event.timestamp}</TableCell>
            <TableCell className="font-medium">{event.user}</TableCell>
            <TableCell>{event.eventType}</TableCell>
            <TableCell className="font-mono text-xs">{event.resource}</TableCell>
            <TableCell>
                 <Badge 
                    variant={severityVariant[event.severity] || 'default'}
                    className={severityOutline[event.severity] ? 'bg-transparent' : ''}
                >
                    {event.severity}
                </Badge>
            </TableCell>
            <TableCell className="text-right">
                <ReportsAuditEventDetails event={event} />
            </TableCell>
        </TableRow>
    );
}
