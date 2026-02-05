export type AuditEvent = {
    id: string;
    timestamp: string;
    eventType: string;
    user: string;
    resource: string;
    result: 'Success' | 'Failure' | 'Denied';
    severity: 'Crítico' | 'Alto' | 'Médio' | 'Baixo' | 'Informativo';
    details: object;
};
