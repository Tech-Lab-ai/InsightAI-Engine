import { DollarSign } from "lucide-react";

export function AdminBillingEmpty() {
    return (
        <div className="flex flex-col items-center justify-center text-center p-12">
            <div className="bg-muted text-muted-foreground p-4 rounded-full mb-4">
                <DollarSign className="h-10 w-10" />
            </div>
            <h2 className="text-xl font-semibold">Nenhuma assinatura encontrada</h2>
            <p className="text-muted-foreground mt-2 mb-6">
                Ainda não há dados de faturamento para exibir.
            </p>
        </div>
    );
}
