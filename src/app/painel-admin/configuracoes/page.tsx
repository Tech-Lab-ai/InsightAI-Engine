import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function AdminSettingsPage() {
    return (
        <div className="space-y-8">
            <PageHeader>
                <PageHeaderTitle>Configurações do Sistema</PageHeaderTitle>
                <PageHeaderDescription>Gerencie variáveis globais, limites e modos de operação da plataforma.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Configurações do Sistema em construção.</p>
            </div>
        </div>
    );
}
