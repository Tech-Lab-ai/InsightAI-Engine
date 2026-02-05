import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function WorkflowsHistoryPage() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>Histórico de Workflows</PageHeaderTitle>
                <PageHeaderDescription>Consulte o histórico de todos os workflows executados.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Histórico de Workflows em construção.</p>
            </div>
        </>
    );
}
