'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, KeyRound, Webcam } from "lucide-react";

export function AdminProfileSecurity() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Segurança da Conta</CardTitle>
                <CardDescription>Gerencie sua senha, autenticação multi-fator e chaves de segurança.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                        <KeyRound className="h-5 w-5 text-muted-foreground" />
                        <p className="text-sm font-medium">Senha</p>
                    </div>
                    <Button variant="secondary" size="sm">Alterar Senha</Button>
                </div>
                 <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-muted-foreground" />
                        <div>
                            <p className="text-sm font-medium">Autenticação Multi-fator (MFA)</p>
                            <p className="text-xs text-green-600 flex items-center gap-1"><CheckCircle className="h-3 w-3" /> Habilitado</p>
                        </div>
                    </div>
                    <Button variant="secondary" size="sm">Gerenciar</Button>
                </div>
                 <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                        <Webcam className="h-5 w-5 text-muted-foreground" />
                         <div>
                            <p className="text-sm font-medium">Chave de Segurança (FIDO2)</p>
                            <p className="text-xs text-muted-foreground">Não configurado</p>
                        </div>
                    </div>
                    <Button variant="secondary" size="sm">Registrar Chave</Button>
                </div>
            </CardContent>
        </Card>
    );
}
