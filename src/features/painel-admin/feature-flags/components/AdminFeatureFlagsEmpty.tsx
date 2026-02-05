import { Button } from "@/components/ui/button";
import { Flag, PlusCircle } from "lucide-react";

export function AdminFeatureFlagsEmpty() {
    return (
        <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed rounded-lg">
            <div className="bg-muted text-muted-foreground p-4 rounded-full mb-4">
                <Flag className="h-10 w-10" />
            </div>
            <h2 className="text-xl font-semibold">Nenhuma feature flag encontrada</h2>
            <p className="text-muted-foreground mt-2 mb-6">
                Crie a primeira feature flag para começar a controlar o rollout de funcionalidades.
            </p>
             <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Criar Nova Flag
            </Button>
        </div>
    );
}
