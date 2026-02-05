'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, Clock } from 'lucide-react';

const controls = [
    { name: 'MFA Obrigatório para Admins', status: true },
    { name: 'Política de Senha Global', status: true },
    { name: 'Proteção contra Brute-force', status: true },
    { name: 'Hardware Key (FIDO2)', status: false },
    { name: 'Restrição de Acesso por IP', status: false },
];

export function AdminSecurityControls() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Controles de Segurança</CardTitle>
                <CardDescription>Status dos principais controles de segurança da plataforma.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {controls.map(control => (
                    <div key={control.name} className="flex items-center justify-between">
                        <p className="text-sm font-medium">{control.name}</p>
                        <div className="flex items-center gap-2">
                             {control.status ? (
                                <>
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span className="text-sm text-muted-foreground">Ativo</span>
                                </>
                            ) : (
                                 <>
                                    <Clock className="h-4 w-4 text-amber-500" />
                                    <span className="text-sm text-muted-foreground">Planejado</span>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
