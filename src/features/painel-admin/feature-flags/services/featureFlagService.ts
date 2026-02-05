import { FeatureFlag, FeatureFlagsOverview } from '../types';

const mockFlags: FeatureFlag[] = [
    {
        id: 'ff_new_chat_ui',
        key: 'feature.new_chat_ui',
        name: 'Nova Interface de Chat',
        description: 'Ativa a interface de chat redesenhada com mais recursos.',
        type: 'Feature',
        status: 'Em teste',
        scope: 'Por Empresa',
        lastModified: '29/07/2024',
        rollout: {
            percentage: 10,
            companies: ['tn_1a2b3c', 'tn_4d5e6f'],
            plans: [],
        },
        history: [
            { date: '29/07/2024', author: 'operator@insightai.com', action: 'Colocada em teste para 10%.' },
            { date: '28/07/2024', author: 'operator@insightai.com', action: 'Criada como Desativada.' },
        ]
    },
    {
        id: 'ff_disable_integrations',
        key: 'killswitch.all_integrations',
        name: 'Kill Switch de Integrações',
        description: 'Desativa globalmente todas as integrações em caso de instabilidade.',
        type: 'Kill Switch',
        status: 'Desativada',
        scope: 'Global',
        lastModified: '15/01/2024',
        rollout: {
            percentage: 0,
            companies: [],
            plans: [],
        },
         history: [
            { date: '15/01/2024', author: 'system', action: 'Criada como Desativada.' },
        ]
    },
    {
        id: 'ff_agent_planner',
        key: 'feature.agent_planner',
        name: 'Agente Planejador',
        description: 'Habilita o agente de IA que planeja ações complexas.',
        type: 'Feature',
        status: 'Ativa',
        scope: 'Por Plano',
        lastModified: '01/06/2024',
         rollout: {
            percentage: 100,
            companies: [],
            plans: ['Pro', 'Enterprise'],
        },
         history: [
            { date: '01/06/2024', author: 'operator@insightai.com', action: 'Ativada para planos Pro e Enterprise.' },
        ]
    },
     {
        id: 'ff_new_pricing_model',
        key: 'experiment.pricing_v2',
        name: 'Experimento de Pricing V2',
        description: 'Testa um novo modelo de precificação para 5% dos novos trials.',
        type: 'Experimento',
        status: 'Ativa',
        scope: 'Global',
        lastModified: '20/07/2024',
         rollout: {
            percentage: 5,
            companies: [],
            plans: ['Trial'],
        },
         history: [
            { date: '20/07/2024', author: 'operator@insightai.com', action: 'Ativada para 5% dos novos trials.' },
        ]
    },
];

const mockOverview: FeatureFlagsOverview = {
    total: mockFlags.length,
    active: mockFlags.filter(f => f.status === 'Ativa').length,
    testing: mockFlags.filter(f => f.status === 'Em teste').length,
    inactive: mockFlags.filter(f => f.status === 'Desativada').length,
    critical: mockFlags.filter(f => f.type === 'Kill Switch').length,
};

export const getFeatureFlags = (): Promise<FeatureFlag[]> => {
    return new Promise(resolve => setTimeout(() => resolve(mockFlags), 1200));
}

export const getFeatureFlagsOverview = (): Promise<FeatureFlagsOverview> => {
    return new Promise(resolve => setTimeout(() => resolve(mockOverview), 800));
}
