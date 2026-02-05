import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function CompanySettingsPage() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>Empresa</PageHeaderTitle>
                <PageHeaderDescription>Gerencie as configurações gerais da sua empresa na plataforma.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Empresa em construção.</p>
            </div>
        </>
    );
}
