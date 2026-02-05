'use client';
import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { SupportHeader } from '@/features/support/components/SupportHeader';
import { SupportTicketStatus } from '@/features/support/components/SupportTicketStatus';
import { SupportForm } from '@/features/support/components/SupportForm';
import { useToast } from '@/hooks/use-toast';
import { Ticket } from '@/features/support/types/ticket';

export default function SupportPage() {
    const searchParams = useSearchParams();
    const { toast } = useToast();
    const [activeTicket, setActiveTicket] = React.useState<Ticket | null>(null);

    const initialTopic = searchParams.get('plan') === 'enterprise' ? 'commercial' : 'technical';

    const handleOpenTicket = (subject: string, message: string) => {
        // Simulação de criação de ticket
        const newTicket: Ticket = {
            id: `TKT-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
            subject: subject,
            status: 'Aberto',
            submittedAt: new Date().toLocaleString('pt-BR'),
        };
        setActiveTicket(newTicket);
        toast({
            title: "Ticket Aberto com Sucesso",
            description: `Seu ticket ${newTicket.id} foi registrado. Nossa equipe entrará em contato em breve.`,
        });
    };

    const handleCloseTicket = () => {
        if (activeTicket) {
             const closedTicket = { ...activeTicket, status: 'Fechado' as const };
             // In a real app, you might want to keep closed tickets in a history
             // For this simulation, we'll just clear it.
             setActiveTicket(null);
             toast({
                title: "Ticket Encerrado",
                description: `O ticket ${closedTicket.id} foi encerrado.`,
            });
        }
    };

    return (
        <div className="space-y-8">
            <SupportHeader />
            <SupportTicketStatus activeTicket={activeTicket} onCloseTicket={handleCloseTicket} />
            <SupportForm 
                isTicketActive={!!activeTicket}
                onOpenTicket={handleOpenTicket}
                initialTopic={initialTopic}
            />
        </div>
    );
}
