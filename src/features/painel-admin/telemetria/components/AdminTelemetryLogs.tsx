'use client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { TelemetryEvent } from "../../types";
import { AdminTelemetryLogRow } from "./AdminTelemetryLogRow";
import { AdminTelemetryEmpty } from "./AdminTelemetryEmpty";

type AdminTelemetryLogsProps = {
    events: TelemetryEvent[];
};

export function AdminTelemetryLogs({ events }: AdminTelemetryLogsProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Logs Detalhados</CardTitle>
                <CardDescription>Fluxo de eventos do sistema em tempo real.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
                {events.length === 0 ? (
                    <AdminTelemetryEmpty />
                ) : (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[180px]">Timestamp</TableHead>
                                <TableHead>Severidade</TableHead>
                                <TableHead>Evento</TableHead>
                                <TableHead>Empresa</TableHead>
                                <TableHead>Usuário</TableHead>
                                <TableHead>Origem</TableHead>
                                <TableHead className="text-right">Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {events.map((event) => (
                                <AdminTelemetryLogRow key={event.id} event={event} />
                            ))}
                        </TableBody>
                    </Table>
                )}
            </CardContent>
        </Card>
    );
}
