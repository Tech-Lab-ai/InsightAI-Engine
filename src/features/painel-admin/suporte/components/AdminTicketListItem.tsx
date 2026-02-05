'use client';

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { AdminTicket } from "../../types";

type Props = {
    ticket: AdminTicket;
    isSelected: boolean;
    onSelect: () => void;
};

const priorityMap: Record<AdminTicket['priority'], { text: string; className: string }> = {
    'Crítica': { text: 'Crítica', className: 'bg-red-500' },
    'Alta': { text: 'Alta', className: 'bg-amber-500' },
    'Média': { text: 'Média', className: 'bg-blue-500' },
    'Baixa': { text: 'Baixa', className: 'bg-gray-500' },
};

export function AdminTicketListItem({ ticket, isSelected, onSelect }: Props) {
    const priority = priorityMap[ticket.priority];

    return (
        <button
            onClick={onSelect}
            className={cn(
                "w-full text-left p-3 rounded-lg border transition-colors",
                isSelected ? "bg-muted border-primary" : "hover:bg-muted/50"
            )}
        >
            <div className="flex justify-between items-start">
                <p className="text-sm font-semibold truncate flex-1 pr-2">{ticket.subject}</p>
                <div className="flex-shrink-0 flex items-center gap-1.5">
                    {ticket.sla.violated && <Badge variant="destructive" className="h-5">SLA</Badge>}
                    <Badge variant="secondary" className="h-5">{ticket.status}</Badge>
                </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1 truncate">{ticket.companyName}</p>
            <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                    <div className={cn("h-2.5 w-2.5 rounded-full", priority.className)} />
                    <span>{priority.text}</span>
                </div>
                <span>{ticket.id}</span>
            </div>
        </button>
    );
}
