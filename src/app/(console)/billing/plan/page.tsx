import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function BillingPlanPage() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>Plano Atual</PageHeaderTitle>
                <PageHeaderDescription>Visualize os detalhes do seu plano e uso atual.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Plano Atual em construção.</p>
            </div>
        </>
    );
}
