import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function AdminBillingPage() {
    return (
        <div className="space-y-8">
            <PageHeader>
                <PageHeaderTitle>Billing & Receita</PageHeaderTitle>
                <PageHeaderDescription>Controle financeiro do SaaS, incluindo planos, assinaturas e receita.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Billing & Receita em construção.</p>
            </div>
        </div>
    );
}
