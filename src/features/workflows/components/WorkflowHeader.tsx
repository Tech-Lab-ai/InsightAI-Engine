import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle, Search } from "lucide-react";

type WorkflowHeaderProps = {
  onCreateWorkflow: () => void;
};

export function WorkflowHeader({ onCreateWorkflow }: WorkflowHeaderProps) {
  return (
    <PageHeader>
      <div className="flex-1">
        <PageHeaderTitle>Workflows</PageHeaderTitle>
        <PageHeaderDescription>
          Visão geral das suas automações inteligentes.
        </PageHeaderDescription>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar workflows..."
            className="pl-8 sm:w-[200px] lg:w-[300px]"
          />
        </div>
        <Button onClick={onCreateWorkflow}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Criar Workflow
        </Button>
      </div>
    </PageHeader>
  );
}
