import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function DocumentPermissionsPage() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>Permissões de Documentos</PageHeaderTitle>
                <PageHeaderDescription>Defina quem pode acessar quais documentos e categorias.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Permissões de Documentos em construção.</p>
            </div>
        </>
    );
}
