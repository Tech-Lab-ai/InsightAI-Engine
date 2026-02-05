import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function ReportsPage() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>Relatórios</PageHeaderTitle>
                <PageHeaderDescription>Visualize e exporte relatórios de atividade e uso.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Relatórios em construção.</p>
            </div>
        </>
    );
}
