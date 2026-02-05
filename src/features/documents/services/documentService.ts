import { Document } from '../types/document';

const mockDocuments: Document[] = [
    {
        id: 'doc_001',
        name: 'Contrato de Prestação de Serviços 2024.pdf',
        type: 'PDF',
        category: 'Jurídico',
        modified: '29/07/2024',
        owner: 'Ana Silva',
        status: 'Ativo',
    },
    {
        id: 'doc_002',
        name: 'Relatório Financeiro Q2 2024.docx',
        type: 'DOCX',
        category: 'Financeiro',
        modified: '28/07/2024',
        owner: 'Bruno Costa',
        status: 'Ativo',
    },
    {
        id: 'doc_003',
        name: 'Especificação Técnica API v3.pdf',
        type: 'PDF',
        category: 'Técnico',
        modified: '25/07/2024',
        owner: 'Carlos Pereira',
        status: 'Em Revisão',
    },
    {
        id: 'doc_004',
        name: 'Política de Férias 2024.pdf',
        type: 'PDF',
        category: 'RH',
        modified: '22/07/2024',
        owner: 'Daniela Martins',
        status: 'Arquivado',
    },
    {
        id: 'doc_005',
        name: 'Base de Clientes Ativos.csv',
        type: 'CSV',
        category: 'Financeiro',
        modified: 'Hoje',
        owner: 'Ana Silva',
        status: 'Ativo',
    },
];

export function getMockDocuments(): Document[] {
    return mockDocuments;
}
