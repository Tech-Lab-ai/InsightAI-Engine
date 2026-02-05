export type Document = {
    id: string;
    name: string;
    type: 'PDF' | 'DOCX' | 'CSV';
    category: 'Jurídico' | 'Financeiro' | 'Técnico' | 'RH';
    modified: string;
    owner: string;
    status: 'Ativo' | 'Arquivado' | 'Em Revisão';
};
