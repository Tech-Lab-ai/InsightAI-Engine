'use client';
import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { SystemStatus } from "../../types";

type AdminTelemetryHeaderProps = {
    status: SystemStatus;
};

const statusMap: Record<SystemStatus, { text: string; variant: "default" | "destructive" | "outline", className: string }> = {
    NORMAL: { text: "Normal", variant: "default", className: "bg-green-500/10 text-green-700 border-green-500/50" },
    ALERT: { text: "Alerta", variant: "outline", className: "bg-amber-500/10 text-amber-700 border-amber-500/50" },
    CRITICAL: { text: "Crítico", variant: "destructive", className: "" },
};


export function AdminTelemetryHeader({ status }: AdminTelemetryHeaderProps) {
    const currentStatus = statusMap[status];

    return (
        <PageHeader>
            <div className="flex-1">
                <PageHeaderTitle>Telemetria & Incidentes</PageHeaderTitle>
                <PageHeaderDescription>Monitoramento de segurança, integridade e conformidade do sistema.</PageHeaderDescription>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Status do Sistema:</span>
                <Badge variant={currentStatus.variant} className={currentStatus.className}>{currentStatus.text}</Badge>
            </div>
        </PageHeader>
    );
}
