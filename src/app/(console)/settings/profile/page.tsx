import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { ProfileForm } from "@/components/settings/profile/ProfileForm";
import { Separator } from "@/components/ui/separator";

export default function ProfileSettingsPage() {
    return (
        <div className="space-y-6">
            <PageHeader>
                <PageHeaderTitle>Perfil</PageHeaderTitle>
                <PageHeaderDescription>Gerencie suas informações pessoais e preferências da conta.</PageHeaderDescription>
            </PageHeader>
            <Separator />
            <ProfileForm />
        </div>
    );
}
