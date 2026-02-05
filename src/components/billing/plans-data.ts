export type FeatureStatus = 'included' | 'limited' | 'excluded';

export type PlanFeature = {
    name: string;
    status: FeatureStatus;
};

export type Plan = {
    id: 'trial' | 'basico' | 'starter' | 'pro' | 'enterprise';
    name: string;
    price: string;
    description: string;
    features: PlanFeature[];
    cta: string;
    popular?: boolean;
    asaasLink?: string;
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
        id: 'basico',
        name: 'Básico',
        price: '17,99',
        description: 'Plano pago mais acessível para começar.',
        features: [
            { name: 'Chat IA', status: 'included' },
            { name: 'Até 500 Documentos', status: 'limited' },
            { name: 'Workflows (3 ativos)', status: 'limited' },
            { name: 'Relatórios básicos', status: 'limited' },
            { name: '2 Usuários', status: 'included' },
            { name: 'Auditoria', status: 'excluded' },
        ],
        cta: 'Assinar plano',
        asaasLink: 'https://www.asaas.com/c/5o0h8z2tpdfb5j6k',
    },
    {
        id: 'starter',
        name: 'Starter',
        price: '49',
        description: 'Para startups e pequenas equipes em crescimento.',
        features: [
            { name: 'Chat IA', status: 'included' },
            { name: 'Até 1.000 Documentos', status: 'limited' },
            { name: 'Workflows (5 ativos)', status: 'limited' },
            { name: 'Relatórios completos', status: 'included' },
            { name: 'Até 5 Usuários', status: 'included' },
            { name: 'Auditoria', status: 'excluded' },
        ],
        cta: 'Assinar plano',
        asaasLink: 'https://www.asaas.com/c/k70hj8azups1naqa',
    },
    {
        id: 'pro',
        name: 'Pro',
        price: '149',
        description: 'Para empresas que precisam de colaboração e mais poder.',
        features: [
            { name: 'Chat IA', status: 'included' },
            { name: 'Documentos Ilimitados', status: 'included' },
            { name: 'Workflows Ilimitados', status: 'included' },
            { name: 'Relatórios completos', status: 'included' },
            { name: 'Até 20 Usuários', status: 'included' },
            { name: 'Auditoria', status: 'included' },
        ],
        cta: 'Assinar plano',
        popular: true,
        asaasLink: 'https://www.asaas.com/c/4i4cv68t7vhz04dv',
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
