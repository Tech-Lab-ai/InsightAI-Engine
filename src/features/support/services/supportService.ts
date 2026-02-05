'use server';

import { Ticket, TicketStatus } from "../types/ticket";

// This is a server-side mock. In a real application, this would interact with a database.
let currentActiveTicket: Ticket | null = null;

// Simulate fetching the active ticket for the current user/company
export const getActiveTicket = async (): Promise<Ticket | null> => {
    console.log("Mock Service: Fetching active ticket...");
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
    console.log("Mock Service: Returning ticket:", currentActiveTicket?.id || "none");
    return currentActiveTicket;
}

// Simulate creating a new ticket
export const createTicket = async (data: {
    subject: string,
    message: string,
    topic: string,
    companyId: string,
    userId: string
}): Promise<Ticket | null> => {
    console.log("Mock Service: Attempting to create ticket...");
    if (currentActiveTicket) {
        console.log("Mock Service: Active ticket exists, creation denied.");
        return null; // Enforce the "one active ticket" rule
    }
    
    const newTicket: Ticket = {
        id: `TKT-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
        companyId: data.companyId,
        userId: data.userId,
        type: 'Suporte', // Mocked
        priority: 'Média', // Mocked
        status: 'Aberto',
        subject: data.subject,
        sla: {
            response: { due: '24h', violated: false },
            resolution: { due: '72h', violated: false },
        },
        createdAt: new Date().toLocaleString('pt-BR'),
        updatedAt: new Date().toLocaleString('pt-BR'),
        history: [{
            timestamp: new Date().toLocaleString('pt-BR'),
            event: 'Ticket Criado',
            author: 'Cliente',
            details: `Ticket aberto com o assunto: "${data.subject}"`
        }],
        messages: [{
            id: `msg-${Math.random().toString(36).substr(2, 9)}`,
            authorId: data.userId,
            authorName: 'Cliente (Você)',
            content: data.message,
            createdAt: new Date().toLocaleString('pt-BR'),
        }]
    };

    currentActiveTicket = newTicket;
    console.log("Mock Service: Ticket created successfully:", newTicket.id);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
    return newTicket;
}

// Simulate closing an active ticket
export const closeActiveTicket = async (ticketId: string): Promise<string | null> => {
    console.log("Mock Service: Attempting to close ticket:", ticketId);
    if (currentActiveTicket && currentActiveTicket.id === ticketId) {
        const id = currentActiveTicket.id;
        currentActiveTicket = null;
        console.log("Mock Service: Ticket closed successfully:", id);
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
        return id;
    }
    console.log("Mock Service: Ticket to close not found or ID mismatch.");
    return null;
}
