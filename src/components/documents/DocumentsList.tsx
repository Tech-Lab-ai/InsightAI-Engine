'use client';
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DocumentsRow } from "./DocumentsRow";
import { Document } from "./mock-data";

type DocumentsListProps = {
    documents: Document[];
    onSelectDocument: (document: Document) => void;
};

export function DocumentsList({ documents, onSelectDocument }: DocumentsListProps) {
    return (
        <div className="border rounded-lg mt-8">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[40%]">Nome do Documento</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Categoria</TableHead>
                        <TableHead>Última Modificação</TableHead>
                        <TableHead>Proprietário</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {documents.map((doc) => (
                        <DocumentsRow key={doc.id} document={doc} onSelectDocument={onSelectDocument} />
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}