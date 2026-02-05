export type FeatureStatus = 'included' | 'limited' | 'excluded';

export type PlanFeature = {
    name: string;
    status: FeatureStatus;
};

export type Plan = {
    id: 'trial' | 'free' | 'starter' | 'pro' | 'enterprise';
    name: string;
    price: string;
    description: string;
    features: PlanFeature[];
    cta: string;
    popular?: boolean;
};

export const plans: Plan[] = [
    {
        id: 'trial',
        name: 'Trial',
        price: 'R$ 0,00',
        description: '15 dias para testar todos os recursos do plano Pro.',
        features: [
            { name: 'Chat IA', status: 'included' },
            { name: 'Documentos Ilimitados', status: 'included' },
            { name: 'Workflows', status: 'included' },
            { name: 'Relatórios', status: 'included' },
            { name: 'Até 10 Usuários', status: 'included' },
            { name: 'Auditoria', status: 'included' },
        ],
        cta: 'Ativo',
    },
    {
        id: 'free',
        name: 'Free',
        price: 'R$ 0,00',
        description: 'Para uso pessoal e projetos pequenos, para sempre.',
        features: [
            { name: 'Chat IA', status: 'included' },
            { name: 'Até 100 Documentos', status: 'limited' },
            { name: 'Workflows (1 ativo)', status: 'limited' },
            { name: 'Relatórios básicos', status: 'limited' },
            { name: '1 Usuário', status: 'included' },
            { name: 'Auditoria', status: 'excluded' },
        ],
        cta: 'Selecionar',
    },
    {
        id: 'starter',
        name: 'Starter',
        price: 'R$ 49',
        description: 'Para startups e pequenas equipes em crescimento.',
        features: [
            { name: 'Chat IA', status: 'included' },
            { name: 'Até 1.000 Documentos', status: 'limited' },
            { name: 'Workflows (5 ativos)', status: 'limited' },
            { name: 'Relatórios completos', status: 'included' },
            { name: 'Até 5 Usuários', status: 'included' },
            { name: 'Auditoria', status: 'excluded' },
        ],
        cta: 'Fazer upgrade',
    },
    {
        id: 'pro',
        name: 'Pro',
        price: 'R$ 149',
        description: 'Para empresas que precisam de colaboração e mais poder.',
        features: [
            { name: 'Chat IA', status: 'included' },
            { name: 'Documentos Ilimitados', status: 'included' },
            { name: 'Workflows Ilimitados', status: 'included' },
            { name: 'Relatórios completos', status: 'included' },
            { name: 'Até 20 Usuários', status: 'included' },
            { name: 'Auditoria', status: 'included' },
        ],
        cta: 'Fazer upgrade',
        popular: true,
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        price: 'Custom',
        description: 'Para grandes organizações com requisitos de segurança e escala.',
        features: [
            { name: 'Tudo do Pro, e mais:', status: 'included' },
            { name: 'Compliance & Governança', status: 'included' },
            { name: 'SLA Dedicado', status: 'included' },
            { name: 'Integrações Premium', status: 'included' },
            { name: 'Gerente de Contas', status: 'included' },
            { name: 'On-premise (opcional)', status: 'included' },
        ],
        cta: 'Falar com Vendas',
    },
];
