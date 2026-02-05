import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export default function AdminFeatureFlagsPage() {
    return (
        <div className="space-y-8">
            <PageHeader>
                <PageHeaderTitle>Feature Flags & Experimentos</PageHeaderTitle>
                <PageHeaderDescription>Controle o rollout de novas funcionalidades e configure testes A/B.</PageHeaderDescription>
            </PageHeader>
            <div className="p-8 text-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">Página de Feature Flags em construção.</p>
            </div>
        </div>
    );
}
