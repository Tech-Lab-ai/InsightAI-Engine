import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function AdminTelemetryPage() {
    return (
        <div className="space-y-8">
            <PageHeader>
                <PageHeaderTitle>Telemetria & Eventos</PageHeaderTitle>
                <PageHeaderDescription>Monitore eventos de segurança, anomalias e ações críticas em tempo real.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Telemetria & Eventos em construção.</p>
            </div>
        </div>
    );
}
