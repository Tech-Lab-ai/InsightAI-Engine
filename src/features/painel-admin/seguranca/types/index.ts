export interface SecurityPosture {
    overallStatus: 'Estável' | 'Atenção' | 'Crítico';
    openIncidents: number;
    criticalEvents30d: number;
    affectedCompanies: number;
    lastReview: string;
}

export interface FrameworkStatus {
    name: string;
    status: 'Planejado' | 'Em Andamento' | 'Concluído';
    progress: number;
    description: string;
}

export interface ComplianceStatus {
    soc2: FrameworkStatus;
    iso27001: FrameworkStatus;
    lgpd_gdpr: FrameworkStatus;
}

export interface PolicyDocument {
    id: string;
    title: string;
    version: string;
    lastUpdated: string;
    owner: string;
}
