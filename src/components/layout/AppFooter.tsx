import { cn } from "@/lib/utils";

export function AppFooter({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "flex h-12 items-center justify-between border-t px-6 text-xs text-muted-foreground",
        className
      )}
    >
      <p>InsightAI v1.0</p>
      <p>&copy; {new Date().getFullYear()} InsightAI. Todos os direitos reservados.</p>
    </footer>
  );
}
