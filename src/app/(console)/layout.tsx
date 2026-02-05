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

  return (
    <div className="light-theme flex h-screen w-full flex-row bg-background overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col">
          <AppHeader />
          <main className={cn("relative flex-1 overflow-y-auto", !isChatPage && "p-4 md:p-8")}>
            {children}
          </main>
          <AppFooter />
      </div>
    </div>
  );
}
