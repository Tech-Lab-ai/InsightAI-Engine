import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function SecuritySettingsPage() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>Segurança</PageHeaderTitle>
                <PageHeaderDescription>Ajuste as políticas de segurança, autenticação e acesso.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Segurança em construção.</p>
            </div>
        </>
    );
}
