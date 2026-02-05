import { Lock } from "lucide-react";

export function DocumentPermissionsEmptyState() {
    return (
        <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed rounded-lg">
            <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                <Lock className="h-10 w-10" />
            </div>
            <h2 className="text-xl font-semibold">Selecione um contexto</h2>
            <p className="text-muted-foreground mt-2 max-w-sm">
                Para visualizar ou editar permissões, selecione um papel, categoria ou documento específico nos filtros acima.
            </p>
        </div>
    );
}
