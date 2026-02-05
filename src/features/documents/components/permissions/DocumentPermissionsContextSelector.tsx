'use client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getMockDocuments } from "../../services/documentService";

export function DocumentPermissionsContextSelector() {
    const documents = getMockDocuments();
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg">Contexto de Permissão</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Papel</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione um papel..." />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Todos os Papéis</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="editor">Editor</SelectItem>
                            <SelectItem value="viewer">Visualizador</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Categoria</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione uma categoria..." />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Todas as Categorias</SelectItem>
                            <SelectItem value="juridico">Jurídico</SelectItem>
                            <SelectItem value="financeiro">Financeiro</SelectItem>
                            <SelectItem value="tecnico">Técnico</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Documento</label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione um documento..." />
                        </SelectTrigger>
                         <SelectContent>
                            <SelectItem value="all">Todos os Documentos</SelectItem>
                            {documents.map(doc => (
                                <SelectItem key={doc.id} value={doc.id}>{doc.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
        </Card>
    );
}
