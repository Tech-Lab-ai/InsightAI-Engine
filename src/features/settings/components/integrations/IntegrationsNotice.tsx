import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Zap } from "lucide-react";

export function IntegrationsNotice() {
    return (
        <Alert>
            <Zap className="h-4 w-4" />
            <AlertTitle>Integrações Desativadas por Padrão</AlertTitle>
            <AlertDescription>
                Todas as integrações são opcionais e permanecem inativas até que sejam configuradas e ativadas manualmente. A segurança e o isolamento dos seus dados são nossa prioridade.
            </AlertDescription>
        </Alert>
    );
}
