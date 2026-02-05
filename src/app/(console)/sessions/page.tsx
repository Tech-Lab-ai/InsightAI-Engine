import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function SessionsPage() {
    return (
        <div className="flex flex-col gap-4">
            <PageHeader>
                <PageHeaderTitle>Sessões</PageHeaderTitle>
                <PageHeaderDescription>Cada sessão mantém o contexto das perguntas. Você pode reiniciar a memória quando desejar.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Lista de sessões de chat em breve.</p>
            </div>
        </div>
    );
}
