export type TelemetrySeverity = 'CRITICAL' | 'SECURITY' | 'WARNING' | 'INFO';

export interface TelemetryEvent {
    id: string;
    timestamp: string;
    severity: TelemetrySeverity;
    eventType: string;
    companyId: string;
    userId?: string;
    origin: 'Frontend' | 'Backend' | 'Integration';
    context: object;
}

export interface SecurityIncident {
    id: string;
    severity: 'CRITICAL' | 'HIGH' | 'MEDIUM';
    status: 'OPEN' | 'INVESTIGATING' | 'RESOLVED';
    title: string;
    affectedCompanies: number;
    openedAt: string;
}

export interface TelemetryMetrics {
    criticalEvents24h: number;
    openIncidents: number;
    suspiciousAttempts: number;
    affectedCompanies: number;
}

export type SystemStatus = 'NORMAL' | 'ALERT' | 'CRITICAL';
