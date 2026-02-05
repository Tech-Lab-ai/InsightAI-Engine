import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export function SettingsHeader() {
    return (
        <PageHeader>
            <div className="flex-1">
                <PageHeaderTitle>Configurações</PageHeaderTitle>
                <PageHeaderDescription>Gerencie as preferências e controles da sua conta, empresa e sistema.</PageHeaderDescription>
            </div>
        </PageHeader>
    );
}
