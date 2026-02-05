import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function BillingPage() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>Billing</PageHeaderTitle>
                <PageHeaderDescription>Gerencie sua assinatura e histórico de pagamentos.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Billing em construção.</p>
            </div>
        </>
    );
}
