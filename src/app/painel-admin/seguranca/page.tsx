import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function AdminSecurityPage() {
    return (
        <div className="space-y-8">
            <PageHeader>
                <PageHeaderTitle>Segurança & Compliance</PageHeaderTitle>
                <PageHeaderDescription>Acesse logs imutáveis, exporte dados para auditoria e gerencie incidentes.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Segurança & Compliance em construção.</p>
            </div>
        </div>
    );
}
