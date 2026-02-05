import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function CreateWorkflowPage() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>Criar Novo Workflow</PageHeaderTitle>
                <PageHeaderDescription>Desenhe e configure uma nova automação inteligente.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Interface de criação de workflows em construção.</p>
            </div>
        </>
    );
}
