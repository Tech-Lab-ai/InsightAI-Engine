'use client';
import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { SystemEnvironment } from '../../types';

type AdminSystemHeaderProps = {
    environment: SystemEnvironment;
};

const envMap: Record<SystemEnvironment, { text: string; className: string }> = {
    'PRODUCTION': { text: "Produção", className: "bg-red-500/10 text-red-700 border-red-500/50" },
    'DEMO': { text: "Demonstração", className: "bg-blue-500/10 text-blue-700 border-blue-500/50" },
};

export function AdminSystemHeader({ environment }: AdminSystemHeaderProps) {
    const currentEnv = envMap[environment];

    return (
        <PageHeader>
            <div className="flex-1">
                <PageHeaderTitle>Configurações do Sistema</PageHeaderTitle>
                <PageHeaderDescription>Parâmetros e controles globais que afetam toda a plataforma.</PageHeaderDescription>
            </div>
             <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Ambiente Atual:</span>
                <Badge variant="outline" className={currentEnv.className}>{currentEnv.text}</Badge>
            </div>
        </PageHeader>
    );
}
