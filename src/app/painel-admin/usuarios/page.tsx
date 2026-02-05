import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function AdminUsersPage() {
    return (
        <div className="space-y-8">
            <PageHeader>
                <PageHeaderTitle>Usuários Globais</PageHeaderTitle>
                <PageHeaderDescription>Visualize e gerencie todos os usuários da plataforma.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Usuários Globais em construção.</p>
            </div>
        </div>
    );
}
