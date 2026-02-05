'use client';
import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { SupportHeader } from '@/features/support/components/SupportHeader';
import { SupportTicketStatus } from '@/features/support/components/SupportTicketStatus';
import { SupportForm } from '@/features/support/components/SupportForm';
import { useToast } from '@/hooks/use-toast';
import { Ticket } from '@/features/support/types/ticket';
import { createTicket, getActiveTicket, closeActiveTicket } from '@/features/support/services/supportService';

export default function SupportPage() {
    const searchParams = useSearchParams();
    const { toast } = useToast();
    const [activeTicket, setActiveTicket] = React.useState<Ticket | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);

    const initialTopic = searchParams.get('plan') === 'enterprise' ? 'commercial' : 'technical';

    const loadTicket = React.useCallback(async () => {
        setIsLoading(true);
        const ticket = await getActiveTicket();
        setActiveTicket(ticket);
        setIsLoading(false);
    }, []);

    React.useEffect(() => {
        loadTicket();
    }, [loadTicket]);

    const handleOpenTicket = async (subject: string, message: string, topic: string) => {
        const newTicket = await createTicket({
            subject,
            message,
            topic,
            companyId: 'mock-company-id',
            userId: 'mock-user-id',
        });
        
        if (newTicket) {
            setActiveTicket(newTicket);
            toast({
                title: "Ticket Aberto com Sucesso",
                description: `Seu ticket ${newTicket.id} foi registrado. Nossa equipe entrará em contato em breve.`,
            });
        }
    };

    const handleCloseTicket = async () => {
        if (activeTicket) {
             const closedTicketId = await closeActiveTicket(activeTicket.id);
             if(closedTicketId) {
                setActiveTicket(null);
                toast({
                    title: "Ticket Encerrado",
                    description: `O ticket ${closedTicketId} foi encerrado.`,
                });
             }
        }
    };

    if (isLoading) {
        // You can add a loading skeleton here if you want
        return <div className="p-8 text-center">Carregando...</div>
    }

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
