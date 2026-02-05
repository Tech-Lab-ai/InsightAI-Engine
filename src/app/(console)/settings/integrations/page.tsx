import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function IntegrationsSettingsPage() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>Integrações</PageHeaderTitle>
                <PageHeaderDescription>Conecte o InsightAI com outras ferramentas do seu ecossistema.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Integrações em construção.</p>
            </div>
        </>
    );
}
