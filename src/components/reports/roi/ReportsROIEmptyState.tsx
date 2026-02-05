import { DollarSign } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function ReportsROIEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed rounded-lg">
      <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
        <DollarSign className="h-10 w-10" />
      </div>
      <h2 className="text-xl font-semibold">Cálculo de ROI indisponível</h2>
      <p className="text-muted-foreground mt-2 max-w-md">
        Ainda não há dados suficientes para calcular o retorno sobre o investimento. O cálculo de ROI requer um histórico mínimo de uso da plataforma.
      </p>
      <Alert className="mt-8 max-w-md text-left">
        <AlertTitle>Como funciona o cálculo?</AlertTitle>
        <AlertDescription>
          O ROI é estimado com base no tempo economizado em tarefas automatizadas, na redução de custos operacionais e no aumento de eficiência. Continue usando a plataforma para habilitar esta análise.
        </AlertDescription>
      </Alert>
    </div>
  );
}
