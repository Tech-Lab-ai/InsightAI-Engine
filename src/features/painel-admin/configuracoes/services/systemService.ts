import { SystemConfig, SystemNotice } from '../types';

const mockConfig: SystemConfig = {
    environment: 'DEMO',
    systemMode: 'NORMAL',
    globalParameters: [
        { key: 'request.timeout.ms', name: 'Timeout Padrão de Requests', value: '30000ms' },
        { key: 'global.retry.attempts', name: 'Retentativas Globais', value: '3' },
        { key: 'upload.max_size.mb', name: 'Tamanho Máx. de Upload', value: '50MB' },
        { key: 'ratelimit.window.ms', name: 'Janela de Rate Limit', value: '60000ms' },
        { key: 'data.retention.default.days', name: 'Retenção Padrão de Dados', value: '365 dias' },
    ],
    planLimits: [
        { planName: 'Básico', users: '5', documents: '500', aiUsage: '1M' },
        { planName: 'Starter', users: '10', documents: '1,000', aiUsage: '5M' },
        { planName: 'Pro', users: '50', documents: 'Ilimitado', aiUsage: '20M' },
        { planName: 'Enterprise', users: 'Ilimitado', documents: 'Ilimitado', aiUsage: 'Ilimitado' },
    ],
    criticalFlags: {
        activeKillSwitches: 0,
        criticalGlobalFlags: 1,
        lastModified: '20/07/2024',
    }
};

const mockNotices: SystemNotice[] = [
    {
        id: 'notice_1',
        type: 'MAINTENANCE',
        message: 'Manutenção programada na API de integrações no dia 01/08/2024 das 02:00 às 03:00.',
        date: '28/07/2024',
        status: 'AGENDADA',
    },
     {
        id: 'notice_2',
        type: 'ANNOUNCEMENT',
        message: 'Nova funcionalidade de relatórios de ROI já está disponível para planos Pro e Enterprise.',
        date: '25/07/2024',
        status: 'ATIVA',
    },
];

export const getSystemConfig = (): Promise<SystemConfig> => {
    return new Promise(resolve => setTimeout(() => resolve(mockConfig), 1000));
}

export const getSystemNotices = (): Promise<SystemNotice[]> => {
    return new Promise(resolve => setTimeout(() => resolve(mockNotices), 1200));
}
