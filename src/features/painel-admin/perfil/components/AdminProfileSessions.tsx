'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AdminSession } from "../../types";
import { Laptop, Smartphone, Monitor } from "lucide-react";

type AdminProfileSessionsProps = {
    sessions: AdminSession[];
};

const getDeviceIcon = (device: string) => {
    if (device.toLowerCase().includes('mobile')) return Smartphone;
    if (device.toLowerCase().includes('desktop')) return Laptop;
    return Monitor;
}

export function AdminProfileSessions({ sessions }: AdminProfileSessionsProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Sessões Ativas</CardTitle>
                <CardDescription>Sessões onde sua conta está conectada.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {sessions.map(session => {
                    const Icon = getDeviceIcon(session.device);
                    return (
                        <div key={session.id} className="flex items-center gap-3">
                            <Icon className="h-8 w-8 text-muted-foreground" />
                            <div className="flex-1">
                                <p className="text-sm font-medium">{session.browser}</p>
                                <p className="text-xs text-muted-foreground">
                                    {session.location} - IP: {session.ip}
                                    {session.isCurrent && <span className="text-green-600"> (Sessão atual)</span>}
                                </p>
                            </div>
                            {!session.isCurrent && (
                                <Button variant="ghost" size="sm">Encerrar</Button>
                            )}
                        </div>
                    )
                })}
                 <div className="pt-2">
                    <Button variant="destructive" className="w-full">Encerrar Todas as Outras Sessões</Button>
                </div>
            </CardContent>
        </Card>
    );
}
