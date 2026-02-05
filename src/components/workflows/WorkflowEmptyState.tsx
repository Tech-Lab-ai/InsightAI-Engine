
import { Button } from "@/components/ui/button";
import { Workflow, PlusCircle } from "lucide-react";

type WorkflowEmptyStateProps = {
    onCreateWorkflow: () => void;
};

export function WorkflowEmptyState({ onCreateWorkflow }: WorkflowEmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed rounded-lg">
            <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                <Workflow className="h-10 w-10" />
            </div>
            <h2 className="text-xl font-semibold">Nenhum workflow encontrado</h2>
            <p className="text-muted-foreground mt-2 mb-6">
                Comece a automatizar suas tarefas criando seu primeiro workflow.
            </p>
            <Button onClick={onCreateWorkflow}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Criar seu primeiro Workflow
            </Button>
        </div>
    );
}
