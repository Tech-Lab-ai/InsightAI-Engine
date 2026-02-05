import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function WorkflowsRunningPage() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>Workflows em Execução</PageHeaderTitle>
                <PageHeaderDescription>Visualize workflows que estão rodando em tempo real.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Workflows em Execução em construção.</p>
            </div>
        </>
    );
}
