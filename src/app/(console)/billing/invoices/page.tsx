import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function BillingInvoicesPage() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>Faturas</PageHeaderTitle>
                <PageHeaderDescription>Acesse seu histórico de faturas e notas fiscais.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Faturas em construção.</p>
            </div>
        </>
    );
}
