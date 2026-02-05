import Link from "next/link";
import { Bell, LifeBuoy, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserNav } from "./UserNav";
import { InstallPwaButton } from "@/features/pwa/components/InstallPwaButton";

export function DashboardHeader() {
  return (
    <header className="flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
       <div className="flex-1">
         <h1 className="font-semibold text-lg">InsightAI Corp</h1>
       </div>
      <div className="flex flex-1 items-center justify-end gap-4 md:gap-2 lg:gap-4">
        <div className="w-full flex-1 sm:w-auto sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
        </div>
        <InstallPwaButton />
        <Button variant="outline" size="icon" className="h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Notificações</span>
        </Button>
         <Button variant="outline" size="icon" className="h-8 w-8">
          <LifeBuoy className="h-4 w-4" />
          <span className="sr-only">Suporte</span>
        </Button>
        <UserNav />
      </div>
    </header>
  );
}
