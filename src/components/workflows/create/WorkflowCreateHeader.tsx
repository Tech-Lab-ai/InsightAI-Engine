import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Button } from "@/components/ui/button";

export function WorkflowCreateHeader() {
    return (
        <PageHeader>
            <div className="flex-1">
                <PageHeaderTitle>Criar Novo Workflow</PageHeaderTitle>
                <PageHeaderDescription>
                    Configure uma automação inteligente passo a passo.
                </PageHeaderDescription>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="ghost">Cancelar</Button>
                <Button variant="outline">Salvar Rascunho</Button>
            </div>
        </PageHeader>
    );
}
