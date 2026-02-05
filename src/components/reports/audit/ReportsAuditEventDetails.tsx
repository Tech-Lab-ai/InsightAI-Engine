'use client';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AuditEvent } from "./audit-mock-data";

type ReportsAuditEventDetailsProps = {
    event: AuditEvent;
};

export function ReportsAuditEventDetails({ event }: ReportsAuditEventDetailsProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" size="sm">Ver Detalhes</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Detalhes do Evento de Auditoria</DialogTitle>
                    <DialogDescription>
                        ID do Evento: {event.id}
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="max-h-[60vh]">
                    <pre className="mt-2 w-full rounded-md bg-muted p-4 text-sm font-mono">
                        {JSON.stringify(event, null, 2)}
                    </pre>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}
