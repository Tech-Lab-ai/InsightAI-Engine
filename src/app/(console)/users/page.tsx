import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function UsersPage() {
    return (
        <div className="flex flex-col gap-4">
            <PageHeader>
                 <div className="flex-1">
                    <PageHeaderTitle>Usuários & Acessos</PageHeaderTitle>
                    <PageHeaderDescription>Gerencie quem pode acessar o quê. Use papéis e permissões para manter a segurança.</PageHeaderDescription>
                </div>
                 <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Convidar Usuário
                </Button>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Tabela de usuários em breve.</p>
            </div>
        </div>
    );
}
