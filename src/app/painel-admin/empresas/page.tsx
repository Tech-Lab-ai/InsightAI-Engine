import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function AdminCompaniesPage() {
    return (
        <div className="space-y-8">
            <PageHeader>
                <PageHeaderTitle>Empresas (Tenants)</PageHeaderTitle>
                <PageHeaderDescription>Gerencie todas as empresas clientes na plataforma.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Empresas em construção.</p>
            </div>
        </div>
    );
}
