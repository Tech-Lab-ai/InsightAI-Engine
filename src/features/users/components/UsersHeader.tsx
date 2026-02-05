'use client';
import Link from 'next/link';
import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { PlusCircle, ArrowLeft } from "lucide-react";

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
      <div className="flex items-center gap-2">
        <Button onClick={onInviteUser}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Convidar Usuário
        </Button>
        <Button variant="outline" asChild>
            <Link href="/settings">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
            </Link>
        </Button>
      </div>
    </PageHeader>
  );
}
