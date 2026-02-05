'use client';
import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

type UsersHeaderProps = {
    onInviteUser: () => void;
};

export function UsersHeader({ onInviteUser }: UsersHeaderProps) {
  return (
    <PageHeader>
      <div className="flex-1">
        <PageHeaderTitle>Usuários & Acessos</PageHeaderTitle>
        <PageHeaderDescription>
          Gerencie os usuários e suas permissões na organização.
        </PageHeaderDescription>
      </div>
      <Button onClick={onInviteUser}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Convidar Usuário
      </Button>
    </PageHeader>
  );
}
