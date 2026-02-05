'use client';
import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { AdminProfile } from "../../types";

type AdminProfileHeaderProps = {
    profile: AdminProfile;
};

export function AdminProfileHeader({ profile }: AdminProfileHeaderProps) {
    return (
        <PageHeader>
            <div className="flex items-center gap-4">
                 <Avatar className="h-16 w-16">
                    <AvatarImage src={profile.avatarUrl} alt={profile.name} />
                    <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <PageHeaderTitle>{profile.name}</PageHeaderTitle>
                    <PageHeaderDescription className="flex items-center gap-2">
                       Conta Administrativa <Badge variant="secondary">{profile.role}</Badge>
                    </PageHeaderDescription>
                </div>
            </div>
        </PageHeader>
    );
}
