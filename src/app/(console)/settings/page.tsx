import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function SettingsPage() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>Configurações</PageHeaderTitle>
                <PageHeaderDescription>Ajustes da sua conta, empresa e integrações.</PageHeaderDescription>
            </PageHeader>
             <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Opções de configuração em construção.</p>
            </div>
        </>
    );
}
