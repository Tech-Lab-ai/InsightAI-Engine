'use client';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ShieldCheck, Download } from 'lucide-react';

export function AdminAuditSection() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Auditoria & Evidências</CardTitle>
                <CardDescription>Acesse logs e gere relatórios para auditorias internas e externas.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <div>
                            <p className="text-sm font-medium">Logs Imutáveis</p>
                            <p className="text-xs text-muted-foreground">Todos os eventos críticos do sistema.</p>
                        </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                        <Link href="/painel-admin/telemetria">Ver Logs</Link>
                    </Button>
                </div>
                 <div className="flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center gap-3">
                        <ShieldCheck className="h-5 w-5 text-muted-foreground" />
                        <div>
                            <p className="text-sm font-medium">Trilhas de Auditoria</p>
                            <p className="text-xs text-muted-foreground">Logs de acesso administrativo.</p>
                        </div>
                    </div>
                    <Button variant="outline" size="sm">Ver Acessos</Button>
                </div>
                 <div className="mt-4">
                    <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Exportar Relatório de Auditoria (Mock)
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
