import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export function CreateWorkflowEmptyState() {
    return (
        <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed rounded-lg bg-background/50">
            <h2 className="text-xl font-semibold">Adicione uma nova etapa</h2>
            <p className="text-muted-foreground mt-2 mb-6 max-w-xs">
                Selecione um bloco do painel lateral para continuar construindo sua automação.
            </p>
            <Button variant="outline">
                <PlusCircle className="mr-2 h-4 w-4" />
                Adicionar Ação
            </Button>
        </div>
    );
}
