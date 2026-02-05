'use client';
import * as React from 'react';
import { AdminSupportHeader } from '@/features/painel-admin/suporte/components/AdminSupportHeader';
import { AdminSupportMetrics } from '@/features/painel-admin/suporte/components/AdminSupportMetrics';
import { AdminSupportFilters } from '@/features/painel-admin/suporte/components/AdminSupportFilters';
import { AdminTicketsList } from '@/features/painel-admin/suporte/components/AdminTicketsList';
import { AdminTicketDetails } from '@/features/painel-admin/suporte/components/AdminTicketDetails';
import { AdminTicketDetailsEmpty } from '@/features/painel-admin/suporte/components/AdminTicketDetailsEmpty';
import { AdminSupportLoading } from '@/features/painel-admin/suporte/components/AdminSupportLoading';
import { getAdminTickets, getAdminSupportMetrics } from '@/features/painel-admin/suporte/services/adminSupportService';
import { AdminTicket, AdminSupportMetrics as MetricsType } from '@/features/painel-admin/suporte/types';

export default function AdminSupportPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [tickets, setTickets] = React.useState<AdminTicket[]>([]);
    const [metrics, setMetrics] = React.useState<MetricsType | null>(null);
    const [selectedTicket, setSelectedTicket] = React.useState<AdminTicket | null>(null);

    React.useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const [ticketsData, metricsData] = await Promise.all([
                    getAdminTickets(),
                    getAdminSupportMetrics(),
                ]);
                setTickets(ticketsData);
                setMetrics(metricsData);
                if (ticketsData.length > 0) {
                    setSelectedTicket(ticketsData[0]);
                }
            } catch (error) {
                console.error("Failed to fetch admin support data", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isLoading) {
        return <AdminSupportLoading />;
    }

    return (
        <div className="flex flex-col h-full gap-8">
            <AdminSupportHeader />
            {metrics && <AdminSupportMetrics metrics={metrics} />}
            <AdminSupportFilters />
            <div className="flex-1 grid md:grid-cols-[minmax(0,_1fr)_2fr] gap-8 overflow-hidden">
                <AdminTicketsList
                    tickets={tickets}
                    selectedTicketId={selectedTicket?.id}
                    onSelectTicket={setSelectedTicket}
                />
                <div className="hidden md:flex flex-col h-full">
                    {selectedTicket ? (
                        <AdminTicketDetails ticket={selectedTicket} />
                    ) : (
                        <AdminTicketDetailsEmpty />
                    )}
                </div>
            </div>
        </div>
    );
}
