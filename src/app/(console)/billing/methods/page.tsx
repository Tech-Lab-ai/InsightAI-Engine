import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function BillingMethodsPage() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>Métodos de Pagamento</PageHeaderTitle>
                <PageHeaderDescription>Gerencie os cartões e métodos de pagamento da sua conta.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Métodos de Pagamento em construção.</p>
            </div>
        </>
    );
}
