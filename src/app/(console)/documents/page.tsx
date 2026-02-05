import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function DocumentsPage() {
    return (
        <div className="flex flex-col gap-4">
            <PageHeader>
                <div className="flex-1">
                    <PageHeaderTitle>Documentos</PageHeaderTitle>
                    <PageHeaderDescription>Gerencie sua base de conhecimento. Faça upload, controle versões e defina níveis de acesso.</PageHeaderDescription>
                </div>
                 <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Fazer Upload
                </Button>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Tabela de documentos em breve.</p>
            </div>
        </div>
    );
}
