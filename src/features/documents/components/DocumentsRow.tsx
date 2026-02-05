'use client';

import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, FileText, Eye, Edit, Trash2 } from "lucide-react";
import { Document } from "../types/document";

type DocumentsRowProps = {
    document: Document;
    onSelectDocument: (document: Document) => void;
};

const statusVariant: { [key: string]: "default" | "secondary" | "destructive" | "outline" } = {
    'Ativo': 'default',
    'Arquivado': 'secondary',
    'Em Revisão': 'outline'
}

export function DocumentsRow({ document, onSelectDocument }: DocumentsRowProps) {
    return (
        <TableRow>
            <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span>{document.name}</span>
                </div>
            </TableCell>
            <TableCell>{document.type}</TableCell>
            <TableCell>
                <Badge variant="outline">{document.category}</Badge>
            </TableCell>
            <TableCell>{document.modified}</TableCell>
            <TableCell>{document.owner}</TableCell>
            <TableCell>
                 <Badge variant={statusVariant[document.status] || 'secondary'} className="capitalize">
                    {document.status}
                </Badge>
            </TableCell>
            <TableCell className="text-right">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Abrir menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => onSelectDocument(document)}>
                            <Eye className="mr-2 h-4 w-4" />
                            Ver Detalhes
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Editar
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Excluir
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        </TableRow>
    );
}
