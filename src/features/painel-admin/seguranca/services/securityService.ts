import { SecurityPosture, ComplianceStatus, PolicyDocument } from '../types';

const mockPosture: SecurityPosture = {
    overallStatus: 'Atenção',
    openIncidents: 2,
    criticalEvents30d: 18,
    affectedCompanies: 5,
    lastReview: '15/07/2024',
};

const mockCompliance: ComplianceStatus = {
    soc2: {
        name: 'SOC 2',
        status: 'Em Andamento',
        progress: 60,
        description: 'Auditoria de segurança, disponibilidade e confidencialidade.',
    },
    iso27001: {
        name: 'ISO 27001',
        status: 'Planejado',
        progress: 15,
        description: 'Sistema de Gestão de Segurança da Informação (SGSI).',
    },
    lgpd_gdpr: {
        name: 'LGPD / GDPR',
        status: 'Concluído',
        progress: 100,
        description: 'Conformidade com leis de proteção de dados.',
    },
};

const mockPolicies: PolicyDocument[] = [
    { id: 'pol_sec', title: 'Política de Segurança da Informação', version: '2.1', lastUpdated: '01/06/2024', owner: 'CSO' },
    { id: 'pol_priv', title: 'Política de Privacidade', version: '3.0', lastUpdated: '15/05/2024', owner: 'DPO' },
    { id: 'pol_ir', title: 'Plano de Resposta a Incidentes', version: '1.5', lastUpdated: '20/07/2024', owner: 'CSO' },
    { id: 'pol_ret', title: 'Política de Retenção de Dados', version: '1.2', lastUpdated: '10/04/2024', owner: 'DPO' },
];

export const getSecurityPosture = (): Promise<SecurityPosture> => {
    return new Promise(resolve => setTimeout(() => resolve(mockPosture), 1000));
};

export const getComplianceStatus = (): Promise<ComplianceStatus> => {
    return new Promise(resolve => setTimeout(() => resolve(mockCompliance), 1200));
};

export const getPolicies = (): Promise<PolicyDocument[]> => {
    return new Promise(resolve => setTimeout(() => resolve(mockPolicies), 1400));
};
