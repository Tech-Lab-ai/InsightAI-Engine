import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, GitBranch, ShieldQuestion, CheckCircle, Clock } from "lucide-react";

const blocks = [
    { name: "Gatilho", icon: PlayCircle, description: "Inicia o workflow" },
    { name: "Ação", icon: GitBranch, description: "Executa uma tarefa" },
    { name: "Condição", icon: ShieldQuestion, description: "Divide o fluxo" },
    { name: "Aprovação", icon: CheckCircle, description: "Pausa para aprovação humana" },
    { name: "Espera (Delay)", icon: Clock, description: "Aguardar por um tempo" },
];

export function WorkflowSidebar() {
    return (
        <aside>
            <Card>
                <CardHeader>
                    <CardTitle>Blocos de Construção</CardTitle>
                    <CardDescription>Arraste ou clique para adicionar.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    {blocks.map(block => (
                        <Button key={block.name} variant="ghost" className="w-full justify-start h-auto p-3 cursor-grab active:cursor-grabbing">
                            <block.icon className="mr-3 h-5 w-5 text-muted-foreground" />
                            <div>
                                <p className="font-semibold">{block.name}</p>
                                <p className="text-xs text-muted-foreground text-left">{block.description}</p>
                            </div>
                        </Button>
                    ))}
                </CardContent>
            </Card>
        </aside>
    );
}
