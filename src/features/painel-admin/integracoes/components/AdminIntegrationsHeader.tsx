import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

type AdminIntegrationsHeaderProps = {
    totalIntegrations: number;
}

export function AdminIntegrationsHeader({ totalIntegrations }: AdminIntegrationsHeaderProps) {
    return (
        <PageHeader>
            <div className="flex-1">
                <PageHeaderTitle>Integrações Globais ({totalIntegrations})</PageHeaderTitle>
                <PageHeaderDescription>
                    Gerencie o catálogo de integrações disponíveis para os clientes da plataforma SaaS.
                </PageHeaderDescription>
            </div>
        </PageHeader>
    );
}
