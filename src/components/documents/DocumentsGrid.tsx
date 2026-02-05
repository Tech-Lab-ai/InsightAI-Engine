'use client';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, FileText } from "lucide-react";
import { Document } from "./mock-data";

type DocumentsGridProps = {
    documents: Document[];
    onSelectDocument: (document: Document) => void;
};

export function DocumentsGrid({ documents, onSelectDocument }: DocumentsGridProps) {
    return (
        <div className="grid gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {documents.map((doc) => (
                <Card key={doc.id} className="cursor-pointer" onClick={() => onSelectDocument(doc)}>
                    <CardHeader>
                        <CardTitle className="flex items-start gap-2 text-base">
                             <FileText className="h-5 w-5 mt-1 text-muted-foreground flex-shrink-0" />
                            <span className="truncate flex-1">{doc.name}</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                        <p className="text-muted-foreground">Modificado: {doc.modified}</p>
                         <p className="text-muted-foreground">Proprietário: {doc.owner}</p>
                    </CardContent>
                    <CardFooter>
                        <Badge variant="outline">{doc.category}</Badge>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}