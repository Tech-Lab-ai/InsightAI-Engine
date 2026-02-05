import { Settings } from "lucide-react";

export function SettingsEmptyState() {
    return (
        <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed rounded-lg">
            <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                <Settings className="h-10 w-10" />
            </div>
            <h2 className="text-xl font-semibold">Nenhuma configuração disponível</h2>
            <p className="text-muted-foreground mt-2">
                Não há seções de configuração para exibir no momento.
            </p>
        </div>
    );
}
