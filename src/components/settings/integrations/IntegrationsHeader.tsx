import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export function IntegrationsHeader() {
    return (
        <PageHeader>
            <div className="flex-1">
                <PageHeaderTitle>Integrações</PageHeaderTitle>
                <PageHeaderDescription>
                    Conecte o InsightAI com outras ferramentas e serviços do seu ecossistema.
                </PageHeaderDescription>
            </div>
        </PageHeader>
    );
}
