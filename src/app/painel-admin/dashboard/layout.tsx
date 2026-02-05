import { DashboardHeader } from "@/features/painel-admin/layout/components/DashboardHeader";
import { DashboardSidebar } from "@/features/painel-admin/layout/components/DashboardSidebar";
import { cn } from "@/lib/utils";

export default function PainelAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full flex-col bg-background">
      <DashboardHeader />
      <div className="flex flex-1 overflow-hidden border-t">
        <DashboardSidebar />
        <main className={cn("relative flex-1 overflow-y-auto p-4 md:p-8")}>
          {children}
        </main>
      </div>
    </div>
  );
}
