import Link from 'next/link';
import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export function IntegrationsHeader() {
    return (
        <PageHeader>
            <div className="flex-1">
                <PageHeaderTitle>Integrações</PageHeaderTitle>
                <PageHeaderDescription>
                    Conecte o InsightAI com outras ferramentas e serviços do seu ecossistema.
                </PageHeaderDescription>
            </div>
            <Button variant="outline" asChild>
                <Link href="/settings">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar
                </Link>
            </Button>
        </PageHeader>
    );
}
