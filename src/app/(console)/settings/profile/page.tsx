import Link from 'next/link';
import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { ProfileForm } from "@/features/settings/components/profile/ProfileForm";
import { Separator } from "@/components/ui/separator";
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function ProfileSettingsPage() {
    return (
        <div className="space-y-6">
            <PageHeader>
                <div className="flex-1">
                    <PageHeaderTitle>Perfil</PageHeaderTitle>
                    <PageHeaderDescription>Gerencie suas informações pessoais e preferências da conta.</PageHeaderDescription>
                </div>
                <Button variant="outline" asChild>
                    <Link href="/settings">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Voltar
                    </Link>
                </Button>
            </PageHeader>
            <Separator />
            <ProfileForm />
        </div>
    );
}
