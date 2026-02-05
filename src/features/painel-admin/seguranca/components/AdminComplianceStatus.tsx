'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ComplianceStatus, FrameworkStatus } from '../../types';

type AdminComplianceStatusProps = {
    status: ComplianceStatus;
};

const statusVariant: Record<FrameworkStatus['status'], "default" | "secondary" | "outline"> = {
    'Planejado': 'outline',
    'Em Andamento': 'secondary',
    'Concluído': 'default',
};

function FrameworkCard({ framework }: { framework: FrameworkStatus }) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <p className="font-semibold">{framework.name}</p>
                <Badge variant={statusVariant[framework.status]}>{framework.status}</Badge>
            </div>
            <Progress value={framework.progress} />
            <p className="text-xs text-muted-foreground">{framework.description}</p>
        </div>
    );
}

export function AdminComplianceStatus({ status }: AdminComplianceStatusProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Compliance & Certificações</CardTitle>
                <CardDescription>Acompanhe o progresso da conformidade com os principais frameworks.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <FrameworkCard framework={status.soc2} />
                <FrameworkCard framework={status.iso27001} />
                <FrameworkCard framework={status.lgpd_gdpr} />
            </CardContent>
        </Card>
    );
}
