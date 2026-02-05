import { PlayCircle } from "lucide-react";

export function WorkflowRunningEmptyState() {
    return (
        <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed rounded-lg">
            <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                <PlayCircle className="h-10 w-10" />
            </div>
            <h2 className="text-xl font-semibold">Nenhum workflow em execução</h2>
            <p className="text-muted-foreground mt-2">
                Quando um workflow for iniciado, você poderá acompanhá-lo aqui em tempo real.
            </p>
        </div>
    );
}
