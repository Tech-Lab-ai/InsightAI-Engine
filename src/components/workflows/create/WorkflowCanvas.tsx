'use client';

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreateWorkflowEmptyState } from "./WorkflowEmptyState";
import { WorkflowBlock } from "./WorkflowBlock";
import { WorkflowReview } from "./WorkflowReview";
import { PlayCircle, GitBranch, ArrowRight, ArrowLeft } from "lucide-react";

type WorkflowCanvasProps = {
    currentStep: number;
    nextStep: () => void;
    prevStep: () => void;
};

export function WorkflowCanvas({ currentStep, nextStep, prevStep }: WorkflowCanvasProps) {

    if (currentStep === 1) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>1. Informações Básicas</CardTitle>
                    <CardDescription>Dê um nome e descreva o propósito deste workflow.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="workflow-name">Nome do Workflow</label>
                        <Input id="workflow-name" placeholder="Ex: Análise de Contratos Jurídicos" />
                    </div>
                     <div className="space-y-2">
                        <label htmlFor="workflow-description">Descrição</label>
                        <Textarea id="workflow-description" placeholder="Este workflow irá..." />
                    </div>
                     <div className="space-y-2">
                        <label htmlFor="workflow-category">Categoria</label>
                        <Input id="workflow-category" placeholder="Ex: Jurídico, Financeiro" />
                    </div>
                    <div className="flex justify-end pt-4">
                        <Button onClick={nextStep}>
                            Próximo <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        );
    }

    if (currentStep === 2) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>2. Gatilho (Trigger)</CardTitle>
                    <CardDescription>Selecione o que irá iniciar este workflow automaticamente.</CardDescription>
                </CardHeader>
                <CardContent>
                    <WorkflowBlock
                        icon={PlayCircle}
                        title="Gatilho: Novo Documento Adicionado"
                        description="Este workflow será iniciado sempre que um novo documento for adicionado à categoria 'Contratos'."
                        isTrigger
                    />
                    <div className="flex justify-between pt-6">
                        <Button variant="outline" onClick={prevStep}>
                            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
                        </Button>
                        <Button onClick={nextStep}>
                            Próximo <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        );
    }

    if (currentStep === 3) {
        return (
             <div className="space-y-4">
                <WorkflowBlock
                    icon={PlayCircle}
                    title="Gatilho: Novo Documento Adicionado"
                    description="Categoria: Contratos"
                    isTrigger
                />
                <div className="pl-4 border-l-2 border-dashed ml-5 h-8"></div>
                <WorkflowBlock
                    icon={GitBranch}
                    title="Ação: Analisar com IA"
                    description="Usar o agente 'Jurídico' para extrair cláusulas de risco."
                />
                 <div className="pl-4 border-l-2 border-dashed ml-5 h-8"></div>
                <CreateWorkflowEmptyState />
                 <div className="flex justify-between pt-6">
                    <Button variant="outline" onClick={prevStep}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
                    </Button>
                    <Button onClick={nextStep}>
                        Próximo <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
             </div>
        );
    }
    
    if (currentStep === 4) {
        return <WorkflowReview prevStep={prevStep} />;
    }

    return (
        <CreateWorkflowEmptyState />
    );
}
