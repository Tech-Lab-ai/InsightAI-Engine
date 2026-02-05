export type SystemEnvironment = 'PRODUCTION' | 'DEMO';
export type SystemMode = 'NORMAL' | 'MAINTENANCE' | 'EMERGENCY';

export interface SystemParameter {
    key: string;
    name: string;
    value: string;
}

export interface PlanLimit {
    planName: 'Básico' | 'Starter' | 'Pro' | 'Enterprise';
    users: string;
    documents: string;
    aiUsage: string; // Tokens per month
}

export interface CriticalFlagsSummary {
    activeKillSwitches: number;
    criticalGlobalFlags: number;
    lastModified: string;
}

export interface SystemConfig {
    environment: SystemEnvironment;
    systemMode: SystemMode;
    globalParameters: SystemParameter[];
    planLimits: PlanLimit[];
    criticalFlags: CriticalFlagsSummary;
}

export interface SystemNotice {
    id: string;
    type: 'MAINTENANCE' | 'ANNOUNCEMENT';
    message: string;
    date: string;
    status: 'ATIVA' | 'AGENDADA' | 'CONCLUÍDA';
}
