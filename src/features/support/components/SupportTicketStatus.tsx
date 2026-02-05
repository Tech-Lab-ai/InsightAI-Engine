import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ticket, Clock, AlertTriangle } from 'lucide-react';
import { type Ticket as TicketType } from '../types/ticket';
import { SupportEmptyState } from "./SupportEmptyState";

type SupportTicketStatusProps = {
    activeTicket: TicketType | null;
    onCloseTicket: () => void;
};

export function SupportTicketStatus({ activeTicket, onCloseTicket }: SupportTicketStatusProps) {
    if (!activeTicket) {
        return <SupportEmptyState />;
    }

    return (
        <>
            <Card className="border-amber-500/50 bg-amber-500/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-600">
                        <AlertTriangle />
                        Você já possui um ticket em andamento
                    </CardTitle>
                    <CardDescription>
                        Aguarde a finalização do ticket atual para poder abrir um novo.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 rounded-md border bg-background p-4">
                        <div className="space-y-1">
                            <p className="text-sm text-muted-foreground flex items-center gap-2">
                                <Ticket className="h-4 w-4" /> 
                                {activeTicket.id}
                            </p>
                            <p className="font-semibold">{activeTicket.subject}</p>
                            <p className="text-sm text-muted-foreground flex items-center gap-2">
                                <Clock className="h-4 w-4" /> 
                                Aberto em: {activeTicket.createdAt}
                            </p>
                        </div>
                         <Button variant="outline" onClick={onCloseTicket}>Encerrar Ticket (Simulação)</Button>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}
