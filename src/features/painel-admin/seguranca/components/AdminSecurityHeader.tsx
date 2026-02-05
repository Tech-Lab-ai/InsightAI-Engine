'use client';
import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";

type AdminSecurityHeaderProps = {
    status: 'Estável' | 'Atenção' | 'Crítico';
};

const statusMap = {
    'Estável': { text: 'Estável', variant: 'default', className: 'bg-green-500/10 text-green-700 border-green-500/50' },
    'Atenção': { text: 'Atenção', variant: 'outline', className: 'bg-amber-500/10 text-amber-700 border-amber-500/50' },
    'Crítico': { text: 'Crítico', variant: 'destructive', className: '' },
};

export function AdminSecurityHeader({ status }: AdminSecurityHeaderProps) {
    const currentStatus = statusMap[status];

    return (
        <PageHeader>
            <div className="flex-1">
                <PageHeaderTitle>Segurança & Compliance</PageHeaderTitle>
                <PageHeaderDescription>Governança, proteção e conformidade da plataforma SaaS.</PageHeaderDescription>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Status Geral:</span>
                <Badge variant={currentStatus.variant} className={currentStatus.className}>{currentStatus.text}</Badge>
            </div>
        </PageHeader>
    );
}
