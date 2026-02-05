'use client';
import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function AdminBillingHeader() {
    const lastUpdated = format(new Date(), "dd 'de' MMMM, yyyy 'às' HH:mm", { locale: ptBR });
    return (
        <PageHeader>
            <div className="flex-1">
                <PageHeaderTitle>Billing & Receita</PageHeaderTitle>
                <PageHeaderDescription>Visão financeira completa da plataforma SaaS.</PageHeaderDescription>
            </div>
            <div className="text-sm text-muted-foreground">
                Última atualização: {lastUpdated}
            </div>
        </PageHeader>
    );
}
