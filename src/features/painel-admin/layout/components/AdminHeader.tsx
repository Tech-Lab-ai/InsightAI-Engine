import Link from "next/link";
import { Bell, LifeBuoy, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AdminUserNav } from "./AdminUserNav";
import { Logo } from "@/components/logo";

export function AdminHeader() {
  return (
    <header className="flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
       <Link href="/painel-admin/dashboard" className="flex items-center gap-4">
          <Logo />
         <h1 className="hidden font-semibold text-lg text-muted-foreground md:block">Painel do Operador</h1>
       </Link>
      <div className="flex flex-1 items-center justify-end gap-4 md:gap-2 lg:gap-4">
        <div className="w-full flex-1 sm:w-auto sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar empresas, usuários..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
        </div>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Notificações</span>
        </Button>
         <Button variant="outline" size="icon" className="h-8 w-8">
          <LifeBuoy className="h-4 w-4" />
          <span className="sr-only">Suporte</span>
        </Button>
        <AdminUserNav />
      </div>
    </header>
  );
}
