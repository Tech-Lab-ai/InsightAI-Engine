import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function UploadDocumentPage() {
    return (
        <>
            <PageHeader>
                <PageHeaderTitle>Upload de Documentos</PageHeaderTitle>
                <PageHeaderDescription>Adicione novos documentos à sua base de conhecimento.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Interface de upload de documentos em construção.</p>
            </div>
        </>
    );
}
