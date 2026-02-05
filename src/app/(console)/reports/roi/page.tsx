import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function ReportsRoiPage() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>Análise de ROI</PageHeaderTitle>
                <PageHeaderDescription>Acompanhe o retorno sobre o investimento gerado pela plataforma.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de ROI em construção.</p>
            </div>
        </>
    );
}
