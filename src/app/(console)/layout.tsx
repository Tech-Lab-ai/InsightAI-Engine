import { AppHeader } from "@/components/layout/AppHeader";
import { AppFooter } from "@/components/layout/AppFooter";
import { Sidebar } from "@/components/layout/Sidebar";

export default function ConsoleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="light-theme grid h-screen w-full overflow-hidden md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <AppHeader />
        <main className="relative flex flex-1 flex-col gap-4 p-4 overflow-y-auto md:gap-8 md:p-8">
          {children}
        </main>
        <AppFooter />
      </div>
    </div>
  );
}
