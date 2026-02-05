export type DocumentCategory = {
    id: string;
    name: string;
    description: string;
    documentCount: number;
    status: 'Ativa' | 'Inativa';
};

export const mockCategories: DocumentCategory[] = [
    {
        id: 'cat_001',
        name: 'Jurídico',
        description: 'Contratos, aditivos e documentos legais.',
        documentCount: 125,
        status: 'Ativa',
    },
    {
        id: 'cat_002',
        name: 'Financeiro',
        description: 'Relatórios, faturas e projeções financeiras.',
        documentCount: 250,
        status: 'Ativa',
    },
    {
        id: 'cat_003',
        name: 'Técnico',
        description: 'Documentação de APIs, manuais e guias.',
        documentCount: 88,
        status: 'Ativa',
    },
    {
        id: 'cat_004',
        name: 'Recursos Humanos',
        description: 'Políticas internas, guias de onboarding e avaliações.',
        documentCount: 42,
        status: 'Inativa',
    },
];
