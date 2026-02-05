'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, FileText, Workflow, User } from "lucide-react";
import Link from "next/link";

const activities = [
    { type: 'Documento', user: 'Ana Silva', description: 'enviou o documento "Contrato_NDA_v3.pdf"', timestamp: '2 min atrás', icon: FileText },
    { type: 'Chat', user: 'Bruno Costa', description: 'iniciou uma nova conversa', timestamp: '5 min atrás', icon: Bot },
    { type: 'Workflow', user: 'Sistema', description: 'executou o workflow "Relatório Financeiro Mensal"', timestamp: '15 min atrás', icon: Workflow },
    { type: 'Usuário', user: 'Admin', description: 'convidou "carlos.pereira@cliente.com"', timestamp: '1 hora atrás', icon: User },
];

export function ActivityCard() {
    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle>Atividade Recente</CardTitle>
                <CardDescription>
                    Um resumo das últimas ações realizadas na plataforma.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                {activities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <activity.icon className="h-4 w-4 text-muted-foreground mt-1" />
                        <div className="grid gap-0.5 text-sm">
                            <p>
                                <span className="font-medium">{activity.user}</span> {activity.description}
                            </p>
                            <time className="text-xs text-muted-foreground">{activity.timestamp}</time>
                        </div>
                    </div>
                ))}
            </CardContent>
            <CardFooter>
                 <Button asChild variant="outline" className="w-full">
                    <Link href="#">
                        Ver todos os logs <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
