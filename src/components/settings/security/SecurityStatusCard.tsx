import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, XCircle } from "lucide-react";

const securityChecks = [
    { text: "Autenticação Multi-Fator (MFA) ativa para todos os admins", status: "ok" },
    { text: "Política de senhas fortes aplicada", status: "ok" },
    { text: "Logs de auditoria habilitados e imutáveis", status: "ok" },
    { text: "Nenhuma tentativa de acesso suspeita nas últimas 24h", status: "ok" },
    { text: "Tempo de expiração de sessão configurado", status: "warning" },
]

export function SecurityStatusCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-green-500" />
                    <span>Status de Segurança: Seguro</span>
                </CardTitle>
                <CardDescription>
                    Uma visão geral das principais configurações de segurança da sua conta.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3">
                    {securityChecks.map((check, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                            {check.status === 'ok' ? (
                                <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : (
                                <XCircle className="h-4 w-4 text-yellow-500" />
                            )}
                            <span className={check.status === 'warning' ? 'text-yellow-500' : ''}>{check.text}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
