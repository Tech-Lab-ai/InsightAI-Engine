'use client';
import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export function AdminSupportHeader() {
    return (
        <PageHeader>
            <div className="flex-1">
                <PageHeaderTitle>Suporte & Tickets</PageHeaderTitle>
                <PageHeaderDescription>Gerencie todos os tickets de suporte dos clientes da plataforma.</PageHeaderDescription>
            </div>
        </PageHeader>
    );
}
