import { Ticket } from "@/features/support/types/ticket";

export type AdminTicket = Omit<Ticket, 'messages' | 'history'> & {
    companyName: string;
    userName: string;
};

export interface AdminSupportMetrics {
    openTickets: number;
    pendingClient: number;
    slaViolations: number;
    avgResponseTime: string;
}
