import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function BillingPage() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>Plano & Faturamento</PageHeaderTitle>
                <PageHeaderDescription>Gerencie sua assinatura, métodos de pagamento e histórico de faturas.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Faturamento em construção.</p>
            </div>
        </>
    );
}
