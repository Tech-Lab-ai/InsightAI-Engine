'use client';
import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TelemetryEvent, TelemetrySeverity } from "../../types";
import { MoreHorizontal } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

type AdminTelemetryLogRowProps = {
    event: TelemetryEvent;
};

const severityMap: Record<TelemetrySeverity, { text: string; variant: "destructive" | "secondary" | "outline" | "default" }> = {
    CRITICAL: { text: "Crítico", variant: "destructive" },
    SECURITY: { text: "Segurança", variant: "destructive" },
    WARNING: { text: "Aviso", variant: "secondary" },
    INFO: { text: "Info", variant: "outline" },
};


export function AdminTelemetryLogRow({ event }: AdminTelemetryLogRowProps) {
    const { text, variant } = severityMap[event.severity] || { text: "Desconhecido", variant: "outline" };

    return (
        <TableRow>
            <TableCell className="font-mono text-xs">{event.timestamp}</TableCell>
            <TableCell>
                <Badge variant={variant} className={variant === 'destructive' && event.severity === 'SECURITY' ? 'bg-transparent text-destructive border-destructive' : ''}>{text}</Badge>
            </TableCell>
            <TableCell className="font-medium font-mono text-xs">{event.eventType}</TableCell>
            <TableCell className="font-mono text-xs">{event.companyId}</TableCell>
            <TableCell className="font-mono text-xs">{event.userId || 'N/A'}</TableCell>
            <TableCell>{event.origin}</TableCell>
            <TableCell className="text-right">
                <Dialog>
                    <DialogTrigger asChild>
                         <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-3xl">
                        <DialogHeader>
                            <DialogTitle>Detalhes do Evento</DialogTitle>
                            <DialogDescription>
                                ID do Evento: {event.id}
                            </DialogDescription>
                        </DialogHeader>
                        <ScrollArea className="max-h-[60vh]">
                            <pre className="mt-2 w-full rounded-md bg-muted p-4 text-sm font-mono">
                                {JSON.stringify(event.context, null, 2)}
                            </pre>
                        </ScrollArea>
                    </DialogContent>
                </Dialog>
            </TableCell>
        </TableRow>
    );
}
