import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function WorkflowsPage() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>Workflows</PageHeaderTitle>
                <PageHeaderDescription>Crie e gerencie automações inteligentes.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Workflows em construção.</p>
            </div>
        </>
    );
}
