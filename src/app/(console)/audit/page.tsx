import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function AuditPage() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>Auditoria</PageHeaderTitle>
                <PageHeaderDescription>Visualize todas as ações realizadas na plataforma.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Auditoria em construção.</p>
            </div>
        </>
    );
}
