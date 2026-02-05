'use client';

import { usePathname } from 'next/navigation';
import { AdminHeader } from "@/features/painel-admin/layout/components/AdminHeader";
import { AdminSidebar } from "@/features/painel-admin/layout/components/AdminSidebar";
import { cn } from "@/lib/utils";

export default function PainelAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboard = pathname === '/painel-admin/dashboard';

  return (
    <div className="flex h-screen w-full flex-col bg-background">
      <AdminHeader />
      <div className="flex flex-1 overflow-hidden border-t">
        <AdminSidebar />
        <main className={cn(
          "relative flex-1 p-4 md:p-8",
          isDashboard ? "flex flex-col" : "overflow-y-auto"
        )}>
          {children}
        </main>
      </div>
    </div>
  );
}
