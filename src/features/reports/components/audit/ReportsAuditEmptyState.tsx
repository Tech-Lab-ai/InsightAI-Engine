import { ShieldCheck } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function ReportsAuditEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed rounded-lg">
      <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
        <ShieldCheck className="h-10 w-10" />
      </div>
      <h2 className="text-xl font-semibold">Nenhum evento de auditoria</h2>
      <p className="text-muted-foreground mt-2 max-w-md">
        Não há eventos de auditoria para o período ou filtros selecionados.
      </p>
      <Alert className="mt-8 max-w-md text-left">
        <AlertTitle>Sobre a Auditoria</AlertTitle>
        <AlertDescription>
          O log de auditoria registra todas as ações críticas executadas na plataforma para garantir segurança e conformidade.
        </AlertDescription>
      </Alert>
    </div>
  );
}
