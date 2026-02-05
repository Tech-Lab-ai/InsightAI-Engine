import Link from 'next/link';
import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { CompanyForm } from "@/features/settings/components/company/CompanyForm";
import { Separator } from "@/components/ui/separator";
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function CompanySettingsPage() {
    return (
        <div className="space-y-6">
            <PageHeader>
                <div className="flex-1">
                    <PageHeaderTitle>Empresa</PageHeaderTitle>
                    <PageHeaderDescription>Gerencie as informações e preferências da sua organização.</PageHeaderDescription>
                </div>
                 <Button variant="outline" asChild>
                    <Link href="/settings">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Voltar
                    </Link>
                </Button>
            </PageHeader>
            <Separator />
            <CompanyForm />
        </div>
    );
}
