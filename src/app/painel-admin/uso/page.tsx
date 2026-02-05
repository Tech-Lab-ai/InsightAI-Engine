import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function AdminUsagePage() {
    return (
        <div className="space-y-8">
            <PageHeader>
                <PageHeaderTitle>Uso & Métricas</PageHeaderTitle>
                <PageHeaderDescription>Observe o uso de IA, execução de workflows e outras métricas de produto.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Uso & Métricas em construção.</p>
            </div>
        </div>
    );
}
