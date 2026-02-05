'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SecurityIncident } from "../../types";
import { AdminIncidentCard } from "./AdminIncidentCard";

type AdminIncidentsListProps = {
    incidents: SecurityIncident[];
};

export function AdminIncidentsList({ incidents }: AdminIncidentsListProps) {
    if (incidents.length === 0) {
        return null;
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Incidentes Ativos</CardTitle>
                <CardDescription>Incidentes de segurança e operacionais que requerem atenção.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {incidents.map((incident) => (
                    <AdminIncidentCard key={incident.id} incident={incident} />
                ))}
            </CardContent>
        </Card>
    );
}
