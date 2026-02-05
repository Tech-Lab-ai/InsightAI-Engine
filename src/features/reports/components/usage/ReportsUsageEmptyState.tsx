import { BarChart3 } from "lucide-react";

export function ReportsUsageEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed rounded-lg">
      <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
        <BarChart3 className="h-10 w-10" />
      </div>
      <h2 className="text-xl font-semibold">Nenhum dado de uso</h2>
      <p className="text-muted-foreground mt-2 max-w-sm">
        Ainda não há dados de atividade para o período ou filtros selecionados. Comece a usar a plataforma para ver as métricas.
      </p>
    </div>
  );
}
