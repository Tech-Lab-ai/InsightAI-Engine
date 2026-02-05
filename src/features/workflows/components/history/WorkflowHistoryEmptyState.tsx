import { History } from "lucide-react";

export function WorkflowHistoryEmptyState() {
    return (
        <div className="flex flex-col items-center justify-center text-center p-12">
            <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                <History className="h-10 w-10" />
            </div>
            <h2 className="text-xl font-semibold">Nenhum histórico encontrado</h2>
            <p className="text-muted-foreground mt-2">
                Nenhuma execução de workflow foi registrada no período selecionado ou com os filtros aplicados.
            </p>
        </div>
    );
}
