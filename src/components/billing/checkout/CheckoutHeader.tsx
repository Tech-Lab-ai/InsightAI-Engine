import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export function CheckoutHeader() {
    return (
        <PageHeader className="text-center">
            <PageHeaderTitle>Finalizar Assinatura</PageHeaderTitle>
            <PageHeaderDescription>
                Revise os detalhes do seu plano e confirme o pagamento.
            </PageHeaderDescription>
        </PageHeader>
    );
}
