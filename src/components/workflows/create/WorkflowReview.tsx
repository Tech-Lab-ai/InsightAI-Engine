import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Check, Shield, ArrowLeft } from "lucide-react";
import { WorkflowBlock } from "./WorkflowBlock";
import { PlayCircle, GitBranch } from "lucide-react";

type WorkflowReviewProps = {
    prevStep: () => void;
};

export function WorkflowReview({ prevStep }: WorkflowReviewProps) {
    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>4. Revisão e Ativação</CardTitle>
                    <CardDescription>Revise o workflow completo antes de salvá-lo e ativá-lo.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h3 className="font-semibold mb-2">Informações</h3>
                        <p className="text-sm"><span className="text-muted-foreground">Nome:</span> Análise de Contratos Jurídicos</p>
                        <p className="text-sm"><span className="text-muted-foreground">Descrição:</span> Este workflow irá analisar novos contratos com IA assim que forem adicionados.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Fluxo de Execução</h3>
                        <div className="space-y-4">
                            <WorkflowBlock
                                icon={PlayCircle}
                                title="Gatilho: Novo Documento Adicionado"
                                description="Categoria: Contratos"
                                isTrigger
                            />
                            <div className="pl-4 border-l-2 border-dashed ml-5 h-4"></div>
                            <WorkflowBlock
                                icon={GitBranch}
                                title="Ação: Analisar com IA"
                                description="Usar o agente 'Jurídico' para extrair cláusulas de risco."
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Alert>
                <Shield className="h-4 w-4" />
                <AlertTitle>Próximos Passos</AlertTitle>
                <AlertDescription>
                   Após salvar, o workflow estará disponível na sua lista, mas precisará ser ativado para começar a rodar automaticamente.
                </AlertDescription>
            </Alert>

            <div className="flex justify-between items-center">
                 <Button variant="outline" onClick={prevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
                </Button>
                <Button size="lg">
                    <Check className="mr-2 h-4 w-4" />
                    Salvar e Ativar Workflow
                </Button>
            </div>
        </div>
    );
}
