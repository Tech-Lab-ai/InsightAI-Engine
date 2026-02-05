import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Shield } from "lucide-react";

export function DocumentPermissionsHeader() {
    return (
        <>
            <PageHeader>
                <div className="flex-1">
                    <PageHeaderTitle>Permissões de Documentos</PageHeaderTitle>
                    <PageHeaderDescription>
                        Controle quem pode visualizar, editar e gerenciar documentos e categorias.
                    </PageHeaderDescription>
                </div>
            </PageHeader>
            <Alert>
                <Shield className="h-4 w-4" />
                <AlertTitle>Modo de Visualização</AlertTitle>
                <AlertDescription>
                    Esta é uma visualização das permissões. As regras reais são aplicadas e garantidas pelo backend.
                </AlertDescription>
            </Alert>
        </>
    );
}
