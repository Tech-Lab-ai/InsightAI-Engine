import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export function BillingHeader() {
    return (
        <PageHeader>
            <PageHeaderTitle>Plano & Faturamento</PageHeaderTitle>
            <PageHeaderDescription>
                Gerencie sua assinatura, métodos de pagamento e histórico de faturas.
            </PageHeaderDescription>
        </PageHeader>
    );
}
