import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function AuditPage() {
    return (
        <div className="flex flex-col gap-4">
            <PageHeader>
                <PageHeaderTitle>Auditoria</PageHeaderTitle>
                <PageHeaderDescription>Visualize todas as ações realizadas na plataforma. Essencial para compliance e governança.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Tabela de logs de auditoria em breve.</p>
            </div>
        </div>
    );
}
