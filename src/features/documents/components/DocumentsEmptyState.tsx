import { Button } from "@/components/ui/button";
import { FileText, PlusCircle } from "lucide-react";

export function DocumentsEmptyState() {
    return (
        <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed rounded-lg mt-8">
            <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                <FileText className="h-10 w-10" />
            </div>
            <h2 className="text-xl font-semibold">Nenhum documento encontrado</h2>
            <p className="text-muted-foreground mt-2 mb-6">
                Comece fazendo o upload do seu primeiro documento.
            </p>
            <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Fazer Upload
            </Button>
        </div>
    );
}
