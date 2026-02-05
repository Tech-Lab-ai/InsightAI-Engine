import { Button } from "@/components/ui/button";
import { Building, PlusCircle } from "lucide-react";

export function AdminCompaniesEmpty() {
    return (
        <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed rounded-lg mt-8">
            <div className="bg-muted text-muted-foreground p-4 rounded-full mb-4">
                <Building className="h-10 w-10" />
            </div>
            <h2 className="text-xl font-semibold">Nenhuma empresa encontrada</h2>
            <p className="text-muted-foreground mt-2 mb-6">
                Filtros aplicados não retornaram resultados ou nenhuma empresa foi criada.
            </p>
            <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Criar Nova Empresa
            </Button>
        </div>
    );
}
