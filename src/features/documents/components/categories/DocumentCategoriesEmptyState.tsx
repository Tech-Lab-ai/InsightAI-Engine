import { Button } from "@/components/ui/button";
import { Folder, PlusCircle } from "lucide-react";

type EmptyStateProps = {
    onNewCategory: () => void;
}

export function DocumentCategoriesEmptyState({ onNewCategory }: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed rounded-lg mt-4">
            <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                <Folder className="h-10 w-10" />
            </div>
            <h2 className="text-xl font-semibold">Nenhuma categoria encontrada</h2>
            <p className="text-muted-foreground mt-2 mb-6">
                Comece criando sua primeira categoria para organizar os documentos.
            </p>
            <Button onClick={onNewCategory}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Criar Categoria
            </Button>
        </div>
    );
}
