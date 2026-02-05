import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { CompanyForm } from "@/components/settings/company/CompanyForm";
import { Separator } from "@/components/ui/separator";

export default function CompanySettingsPage() {
    return (
        <div className="space-y-6">
            <PageHeader>
                <PageHeaderTitle>Empresa</PageHeaderTitle>
                <PageHeaderDescription>Gerencie as informações e preferências da sua organização.</PageHeaderDescription>
            </PageHeader>
            <Separator />
            <CompanyForm />
        </div>
    );
}
