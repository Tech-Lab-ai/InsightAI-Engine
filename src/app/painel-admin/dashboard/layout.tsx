import { AdminHeader } from "@/features/painel-admin/layout/components/AdminHeader";
import { AdminSidebar } from "@/features/painel-admin/layout/components/AdminSidebar";
import { cn } from "@/lib/utils";

export default function PainelAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full flex-col bg-background">
      <AdminHeader />
      <div className="flex flex-1 overflow-hidden border-t">
        <AdminSidebar />
        <main className={cn("relative flex-1 p-4 md:p-8")}>
          {children}
        </main>
      </div>
    </div>
  );
}
