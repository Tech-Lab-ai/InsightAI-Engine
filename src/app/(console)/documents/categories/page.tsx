import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function DocumentCategoriesPage() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>Categorias de Documentos</PageHeaderTitle>
                <PageHeaderDescription>Gerencie as categorias para organizar seus documentos.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Categorias de Documentos em construção.</p>
            </div>
        </>
    );
}
