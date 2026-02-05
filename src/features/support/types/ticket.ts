export type TicketType = 'Suporte' | 'Incidente' | 'Financeiro' | 'Segurança';
export type TicketPriority = 'Baixa' | 'Média' | 'Alta' | 'Crítica';
export type TicketStatus = 'Aberto' | 'Em atendimento' | 'Aguardando cliente' | 'Resolvido' | 'Fechado';

export interface TicketMessage {
    id: string;
    authorId: string;
    authorName: string;
    content: string;
    createdAt: string;
    attachments?: { name: string; url: string; }[];
}

export interface TicketSLA {
    response: {
        due: string;
        violated: boolean;
    };
    resolution: {
        due: string;
        violated: boolean;
    };
}

export interface TicketAuditEvent {
    timestamp: string;
    event: string;
    author: string;
    details: string;
}

export interface Ticket {
    id: string;
    companyId: string;
    userId: string;
    type: TicketType;
    priority: TicketPriority;
    status: TicketStatus;
    subject: string;
    sla: TicketSLA;
    createdAt: string;
    updatedAt: string;
    resolvedAt?: string;
    history: TicketAuditEvent[];
    messages: TicketMessage[];
}
