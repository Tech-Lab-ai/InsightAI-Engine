import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function ReportsUsagePage() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>Uso & Atividade</PageHeaderTitle>
                <PageHeaderDescription>Analise as métricas de uso da plataforma e atividade dos usuários.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Uso & Atividade em construção.</p>
            </div>
        </>
    );
}
