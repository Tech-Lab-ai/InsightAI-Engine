import { BarChart } from "lucide-react";

export function ReportsEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed rounded-lg">
      <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
        <BarChart className="h-10 w-10" />
      </div>
      <h2 className="text-xl font-semibold">Nenhum dado para exibir</h2>
      <p className="text-muted-foreground mt-2">
        Ainda não há dados suficientes para gerar relatórios. Use a plataforma para começar.
      </p>
    </div>
  );
}
