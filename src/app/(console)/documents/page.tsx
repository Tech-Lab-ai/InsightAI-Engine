import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function DocumentsPage() {
    return (
        <>
            <PageHeader>
                <div className="flex-1">
                    <PageHeaderTitle>Documentos</PageHeaderTitle>
                    <PageHeaderDescription>Gerencie sua base de conhecimento.</PageHeaderDescription>
                </div>
                 <Button variant="outline">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Fazer Upload
                </Button>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Tabela de documentos em construção.</p>
            </div>
        </>
    );
}
