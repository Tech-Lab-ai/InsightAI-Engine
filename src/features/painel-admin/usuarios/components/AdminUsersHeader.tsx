import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

type AdminUsersHeaderProps = {
    totalUsers: number;
};

export function AdminUsersHeader({ totalUsers }: AdminUsersHeaderProps) {
    return (
        <PageHeader>
            <div className="flex-1">
                <PageHeaderTitle>Usuários Globais ({totalUsers})</PageHeaderTitle>
                <PageHeaderDescription>
                    Visualize e gerencie todos os usuários de todas as empresas clientes na plataforma.
                </PageHeaderDescription>
            </div>
        </PageHeader>
    );
}
