import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

export function WorkflowRunningHeader() {
  return (
    <PageHeader>
      <div className="flex-1">
        <PageHeaderTitle>Workflows em Execução</PageHeaderTitle>
        <PageHeaderDescription>
          Acompanhe o progresso das suas automações em tempo real.
        </PageHeaderDescription>
      </div>
      <Button variant="outline">
        <RefreshCw className="mr-2 h-4 w-4" />
        Atualizar
      </Button>
    </PageHeader>
  );
}
