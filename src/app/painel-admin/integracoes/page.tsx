import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function AdminIntegrationsPage() {
    return (
        <div className="space-y-8">
            <PageHeader>
                <PageHeaderTitle>Integrações Globais</PageHeaderTitle>
                <PageHeaderDescription>Gerencie o status e os limites das integrações de todo o sistema.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Integrações Globais em construção.</p>
            </div>
        </div>
    );
}
