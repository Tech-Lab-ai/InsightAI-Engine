import Link from 'next/link';
import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";


export function BillingHeader() {
    return (
        <PageHeader>
            <div className="flex-1">
                <PageHeaderTitle>Plano & Faturamento</PageHeaderTitle>
                <PageHeaderDescription>
                    Gerencie sua assinatura, métodos de pagamento e histórico de faturas.
                </PageHeaderDescription>
            </div>
            <Button variant="outline" asChild>
                <Link href="/dashboard">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar ao Dashboard
                </Link>
            </Button>
        </PageHeader>
    );
}
