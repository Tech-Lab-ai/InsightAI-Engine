'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SecurityIncident } from "../../types";

type AdminIncidentCardProps = {
    incident: SecurityIncident;
};

const severityMap: Record<SecurityIncident['severity'], { text: string; variant: "destructive" | "secondary" }> = {
    CRITICAL: { text: "Crítico", variant: "destructive" },
    HIGH: { text: "Alto", variant: "destructive" },
    MEDIUM: { text: "Médio", variant: "secondary" },
};

const statusMap: Record<SecurityIncident['status'], { text: string; variant: "default" | "outline" }> = {
    OPEN: { text: "Aberto", variant: "outline" },
    INVESTIGATING: { text: "Investigando", variant: "default" },
    RESOLVED: { text: "Resolvido", variant: "default" },
};


export function AdminIncidentCard({ incident }: AdminIncidentCardProps) {
    const severity = severityMap[incident.severity];
    const status = statusMap[incident.status];

    return (
        <Card className={severity.variant === 'destructive' ? 'border-red-500/50' : 'border-amber-500/50'}>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <CardTitle className="text-base">{incident.title}</CardTitle>
                    <Badge variant={severity.variant}>{severity.text}</Badge>
                </div>
                <CardDescription>ID: {incident.id}</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-4 text-sm">
                <div>
                    <p className="font-medium">Status</p>
                    <Badge variant={status.variant} className="mt-1">{status.text}</Badge>
                </div>
                 <div>
                    <p className="font-medium">Empresas Afetadas</p>
                    <p className="text-muted-foreground">{incident.affectedCompanies}</p>
                </div>
                 <div>
                    <p className="font-medium">Aberto em</p>
                    <p className="text-muted-foreground">{incident.openedAt}</p>
                </div>
            </CardContent>
            <CardFooter className="justify-end gap-2">
                <Button variant="ghost" size="sm">Marcar como Resolvido</Button>
                <Button variant="secondary" size="sm">Ver Detalhes</Button>
            </CardFooter>
        </Card>
    );
}
