import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function ProfileSettingsPage() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>Perfil</PageHeaderTitle>
                <PageHeaderDescription>Gerencie as configurações do seu perfil de usuário.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Perfil em construção.</p>
            </div>
        </>
    );
}
