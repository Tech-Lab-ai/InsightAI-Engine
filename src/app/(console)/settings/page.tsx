import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function SettingsPage() {
    return (
        <div className="flex flex-col gap-4">
            <PageHeader>
                <PageHeaderTitle>Configurações</PageHeaderTitle>
                <PageHeaderDescription>Ajustes da empresa, segurança e integrações do sistema.</PageHeaderDescription>
            </PageHeader>
             <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Opções de configuração em breve.</p>
            </div>
        </div>
    );
}
