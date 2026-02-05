'use client';
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DocumentCategoriesRow } from "./DocumentCategoriesRow";
import { DocumentCategory } from "../../types/category";

type ListProps = {
    categories: DocumentCategory[];
};

export function DocumentCategoriesList({ categories }: ListProps) {
    return (
        <div className="border rounded-lg mt-4">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[30%]">Nome da Categoria</TableHead>
                        <TableHead>Descrição</TableHead>
                        <TableHead>Documentos</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {categories.map((category) => (
                        <DocumentCategoriesRow key={category.id} category={category} />
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
