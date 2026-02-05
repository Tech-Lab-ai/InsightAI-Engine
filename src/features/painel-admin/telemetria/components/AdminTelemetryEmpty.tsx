import { Terminal } from "lucide-react";

export function AdminTelemetryEmpty() {
    return (
        <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed rounded-lg">
            <div className="bg-muted text-muted-foreground p-4 rounded-full mb-4">
                <Terminal className="h-10 w-10" />
            </div>
            <h2 className="text-xl font-semibold">Nenhum evento registrado</h2>
            <p className="text-muted-foreground mt-2 mb-6">
                Não há eventos de telemetria para o período ou filtros selecionados.
            </p>
        </div>
    );
}
