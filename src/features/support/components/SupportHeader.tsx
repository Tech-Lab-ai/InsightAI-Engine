import Link from 'next/link';
import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function SupportHeader() {
    return (
        <PageHeader>
            <div className="flex-1">
                <PageHeaderTitle>Suporte</PageHeaderTitle>
                <PageHeaderDescription>
                    Precisa de ajuda ou tem alguma dúvida? Fale com nosso time.
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
