import { Puzzle } from 'lucide-react';

export function AdminIntegrationsEmpty() {
    return (
        <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed rounded-lg">
            <div className="bg-muted text-muted-foreground p-4 rounded-full mb-4">
                <Puzzle className="h-10 w-10" />
            </div>
            <h2 className="text-xl font-semibold">Nenhuma integração encontrada</h2>
            <p className="text-muted-foreground mt-2 mb-6">
                Não há integrações no catálogo ou os filtros aplicados não retornaram resultados.
            </p>
        </div>
    );
}
