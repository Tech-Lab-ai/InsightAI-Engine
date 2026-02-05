'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AdminTicket } from "../../types";

type Props = {
    ticket: AdminTicket;
}

export function AdminTicketDetails({ ticket }: Props) {
    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle>{ticket.subject}</CardTitle>
                <CardDescription>Ticket ID: {ticket.id}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto">
                <p>Detalhes do ticket, timeline e thread de mensagens irão aqui.</p>
                {/* Future components: AdminTicketTimeline, AdminTicketMessageThread */}
            </CardContent>
        </Card>
    );
}
