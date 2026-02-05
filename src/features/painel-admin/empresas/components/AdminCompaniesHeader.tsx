import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

type AdminCompaniesHeaderProps = {
    totalCompanies: number;
};

export function AdminCompaniesHeader({ totalCompanies }: AdminCompaniesHeaderProps) {
    return (
        <PageHeader>
            <div className="flex-1">
                <PageHeaderTitle>Empresas ({totalCompanies})</PageHeaderTitle>
                <PageHeaderDescription>
                    Gerencie todos os tenants (empresas clientes) da plataforma.
                </PageHeaderDescription>
            </div>
            <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Nova Empresa
            </Button>
        </PageHeader>
    );
}
