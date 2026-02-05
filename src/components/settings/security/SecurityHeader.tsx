import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldAlert } from "lucide-react";

export function SecurityHeader() {
    return (
        <>
            <PageHeader>
                <div className="flex-1">
                    <PageHeaderTitle>Segurança</PageHeaderTitle>
                    <PageHeaderDescription>
                        Gerencie as políticas de segurança, autenticação e acesso da sua organização.
                    </PageHeaderDescription>
                </div>
            </PageHeader>
            <Alert variant="destructive">
                <ShieldAlert className="h-4 w-4" />
                <AlertTitle>Configurações de Segurança</AlertTitle>
                <AlertDescription>
                    As configurações de segurança são gerenciadas centralmente pelo backend. Esta tela é uma representação visual das políticas ativas.
                </AlertDescription>
            </Alert>
        </>
    );
}
