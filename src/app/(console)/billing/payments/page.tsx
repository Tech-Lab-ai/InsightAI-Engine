import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function BillingPaymentsPage() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>Histórico de Pagamentos</PageHeaderTitle>
                <PageHeaderDescription>Consulte todos os pagamentos realizados.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Histórico de Pagamentos em construção.</p>
            </div>
        </>
    );
}
