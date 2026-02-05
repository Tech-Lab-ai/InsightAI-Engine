import { AppLayout } from "@/components/app-layout";

export default function ConsoleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout>{children}</AppLayout>;
}
