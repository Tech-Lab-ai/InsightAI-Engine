'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, Server, ShieldCheck, Database, Zap } from "lucide-react";

const healthChecks = [
    { name: "API Principal", status: "ok", icon: Server },
    { name: "Banco de Dados", status: "ok", icon: Database },
    { name: "Sistema de Autenticação", status: "ok", icon: ShieldCheck },
    { name: "Engine de Workflows", status: "ok", icon: Zap },
];

export function HealthStatusCard() {
    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle>Saúde do Sistema</CardTitle>
                <CardDescription>
                    Status operacional dos serviços críticos da plataforma.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                {healthChecks.map((check, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <check.icon className="h-5 w-5 text-muted-foreground" />
                        <div className="flex-1">
                           <p className="text-sm font-medium">{check.name}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-green-500">
                           <CheckCircle className="h-4 w-4" />
                           <span>Operacional</span>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
