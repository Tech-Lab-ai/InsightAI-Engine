import { AppLayout } from "@/components/app-layout";

export default function ConsoleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="light-theme">
      <AppLayout>{children}</AppLayout>
    </div>
  );
}
