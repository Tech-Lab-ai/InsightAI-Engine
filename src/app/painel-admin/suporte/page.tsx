import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function AdminSupportPage() {
    return (
        <div className="space-y-8">
            <PageHeader>
                <PageHeaderTitle>Suporte & Tickets</PageHeaderTitle>
                <PageHeaderDescription>Gerencie tickets de suporte de todos os clientes.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Suporte & Tickets em construção.</p>
            </div>
        </div>
    );
}
