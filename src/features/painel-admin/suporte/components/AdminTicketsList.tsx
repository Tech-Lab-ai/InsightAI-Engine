'use client';
import { Card, CardContent } from "@/components/ui/card";
import { AdminTicketListItem } from "./AdminTicketListItem";
import { AdminTicket } from "../../types";

type Props = {
    tickets: AdminTicket[];
    selectedTicketId: string | null;
    onSelectTicket: (ticket: AdminTicket) => void;
};

export function AdminTicketsList({ tickets, selectedTicketId, onSelectTicket }: Props) {
    if (tickets.length === 0) {
        return (
            <Card className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">Nenhum ticket encontrado.</p>
            </Card>
        );
    }
    return (
        <Card className="h-full overflow-hidden flex flex-col">
            <CardContent className="p-2 flex-1 overflow-y-auto">
                <div className="space-y-2">
                    {tickets.map(ticket => (
                        <AdminTicketListItem
                            key={ticket.id}
                            ticket={ticket}
                            isSelected={ticket.id === selectedTicketId}
                            onSelect={() => onSelectTicket(ticket)}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
