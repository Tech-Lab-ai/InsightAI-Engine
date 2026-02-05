import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function AgentsSettingsPage() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>Agentes de IA</PageHeaderTitle>
                <PageHeaderDescription>Gerencie e configure os agentes de IA especializados.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Agentes em construção.</p>
            </div>
        </>
    );
}
