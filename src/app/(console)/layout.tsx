"use client"

import { usePathname } from 'next/navigation';
import { AppHeader } from "@/components/layout/AppHeader";
import { AppFooter } from "@/components/layout/AppFooter";
import { Sidebar } from "@/components/layout/Sidebar";
import { cn } from "@/lib/utils";

export default function ConsoleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isChatPage = pathname.startsWith('/chat');

  // Oculta a sidebar nas sub-páginas de Configurações para dar mais espaço ao conteúdo.
  // A página principal /settings continua com a sidebar.
  const isSettingsSubPage = pathname.startsWith('/settings') && pathname.split('/').filter(Boolean).length > 1;


  return (
    <div className="light-theme flex h-screen w-full flex-col bg-background">
      <AppHeader />
      <div className="flex flex-1 overflow-hidden border-t">
        {!isSettingsSubPage && <Sidebar />}
        <main className={cn("relative flex-1 overflow-y-auto", !isChatPage && "p-4 md:p-8")}>
          {children}
        </main>
      </div>
      <AppFooter />
    </div>
  );
}
