import { AuditEvent } from '../types/audit';

const mockAuditEvents: AuditEvent[] = [
    {
        id: 'evt_1',
        timestamp: '29/07/2024 10:05:12',
        eventType: 'auth.login.success',
        user: 'admin@insightai.com',
        resource: 'Plataforma',
        result: 'Success',
        severity: 'Informativo',
        details: { ip: '200.10.20.30', userAgent: 'Chrome/126.0' }
    },
    {
        id: 'evt_2',
        timestamp: '29/07/2024 10:04:30',
        eventType: 'document.access.denied',
        user: 'bruno.costa@cliente.com',
        resource: 'doc_confidential_01',
        result: 'Denied',
        severity: 'Médio',
        details: { reason: 'Nível de acesso insuficiente.' }
    },
    {
        id: 'evt_3',
        timestamp: '29/07/2024 10:02:45',
        eventType: 'workflow.execution.failure',
        user: 'Sistema',
        resource: 'wf_003',
        result: 'Failure',
        severity: 'Alto',
        details: { error: 'API externa retornou 503', step: 'Etapa 2: Conexão com API' }
    },
    {
        id: 'evt_4',
        timestamp: '29/07/2024 10:01:00',
        eventType: 'user.permission.change',
        user: 'admin@insightai.com',
        resource: 'user_ana.silva',
        result: 'Success',
        severity: 'Médio',
        details: { from: 'viewer', to: 'editor' }
    },
    {
        id: 'evt_5',
        timestamp: '29/07/2024 09:58:20',
        eventType: 'auth.login.failure',
        user: 'desconhecido',
        resource: 'Plataforma',
        result: 'Failure',
        severity: 'Crítico',
        details: { ip: '189.50.60.70', reason: 'Tentativa de acesso não autorizado.' }
    },
    {
        id: 'evt_6',
        timestamp: '29/07/2024 09:55:00',
        eventType: 'document.upload.success',
        user: 'ana.silva@cliente.com',
        resource: 'Relatório Financeiro Q3.pdf',
        result: 'Success',
        severity: 'Informativo',
        details: { size: '2.5MB', category: 'Financeiro' }
    }
];

export function getMockAuditEvents(): AuditEvent[] {
    return mockAuditEvents;
}
