'use client';
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DocumentPermissionsRow } from "./DocumentPermissionsRow";
import { mockRoles } from "./mock-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function DocumentPermissionsMatrix() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg">Matriz de Permissões</CardTitle>
                <CardDescription>
                    Controle o que cada papel pode fazer dentro do contexto selecionado.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="border rounded-lg">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[40%]">Papel</TableHead>
                                <TableHead className="text-center">Visualizar</TableHead>
                                <TableHead className="text-center">Editar</TableHead>
                                <TableHead className="text-center">Compartilhar</TableHead>
                                <TableHead className="text-center">Excluir</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockRoles.map((role) => (
                                <DocumentPermissionsRow key={role.id} role={role} />
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="flex justify-end gap-2 mt-6">
                    <Button variant="ghost">Redefinir</Button>
                    <Button>Salvar Alterações</Button>
                </div>
            </CardContent>
        </Card>
    );
}
