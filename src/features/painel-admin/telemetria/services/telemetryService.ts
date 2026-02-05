import { TelemetryEvent, SecurityIncident, TelemetryMetrics, SystemStatus } from '../types';

const mockMetrics: TelemetryMetrics = {
    criticalEvents24h: 3,
    openIncidents: 2,
    suspiciousAttempts: 17,
    affectedCompanies: 5,
};

const mockSystemStatus: SystemStatus = 'ALERT';

const mockIncidents: SecurityIncident[] = [
    {
        id: 'INC-2024-001',
        severity: 'CRITICAL',
        status: 'INVESTIGATING',
        title: 'Tentativa de acesso não autorizado a dados de múltiplos tenants',
        affectedCompanies: 3,
        openedAt: '29/07/2024 10:05:12',
    },
    {
        id: 'INC-2024-002',
        severity: 'HIGH',
        status: 'OPEN',
        title: 'API de integração com ERP retornando erros 5xx em alta frequência',
        affectedCompanies: 8,
        openedAt: '29/07/2024 14:30:00',
    },
];

const mockEvents: TelemetryEvent[] = [
    { id: 'evt_1', timestamp: '29/07/2024 14:30:00', severity: 'WARNING', eventType: 'integration.api.error_5xx', companyId: 'tn_4d5e6f', origin: 'Backend', context: { api: 'ERP', error: 'Service Unavailable' } },
    { id: 'evt_2', timestamp: '29/07/2024 14:25:10', severity: 'INFO', eventType: 'user.login.success', companyId: 'tn_1a2b3c', userId: 'usr_1a2b3c', origin: 'Frontend', context: { ip: '192.168.1.1' } },
    { id: 'evt_3', timestamp: '29/07/2024 14:22:05', severity: 'SECURITY', eventType: 'auth.mfa.failure', companyId: 'tn_j1k2l3', userId: 'usr_j1k2l3', origin: 'Backend', context: { reason: 'Invalid MFA code' } },
    { id: 'evt_4', timestamp: '29/07/2024 10:05:12', severity: 'CRITICAL', eventType: 'auth.access.multi_tenant', companyId: 'N/A', userId: 'anonymous', origin: 'Backend', context: { ip: '203.0.113.55', target: 'all_tenants' } },
];

export const getTelemetryMetrics = (): Promise<TelemetryMetrics> => {
    return new Promise(resolve => setTimeout(() => resolve(mockMetrics), 800));
};

export const getSystemStatus = (): Promise<SystemStatus> => {
    return new Promise(resolve => setTimeout(() => resolve(mockSystemStatus), 800));
}

export const getSecurityIncidents = (): Promise<SecurityIncident[]> => {
    return new Promise(resolve => setTimeout(() => resolve(mockIncidents), 1200));
};

export const getTelemetryEvents = (): Promise<TelemetryEvent[]> => {
    return new Promise(resolve => setTimeout(() => resolve(mockEvents), 1500));
};
