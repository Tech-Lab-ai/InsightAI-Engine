'use client';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GlobalIntegration } from "../../types";

type AdminIntegrationDetailsProps = {
    integration: GlobalIntegration | null;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

export function AdminIntegrationDetails({ integration, isOpen, setIsOpen }: AdminIntegrationDetailsProps) {
    if (!integration) return null;
    
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-2xl">
                        <integration.icon className="h-6 w-6" />
                        {integration.name}
                    </DialogTitle>
                    <DialogDescription>
                        {integration.description}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex items-center gap-4">
                        <Badge>{integration.category}</Badge>
                        <Badge variant="secondary">{integration.status}</Badge>
                    </div>
                    <Separator />
                    <div>
                        <h4 className="font-semibold mb-2">Disponibilidade por Plano</h4>
                         <div className="flex flex-wrap gap-2">
                            {integration.availablePlans.map(plan => (
                                <Badge key={plan} variant="outline">{plan}</Badge>
                            ))}
                        </div>
                    </div>
                    <Separator />
                     <div>
                        <h4 className="font-semibold mb-2">Detalhes Técnicos (Mock)</h4>
                        <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                            <li>Eventos Suportados: ticket.created, comment.added</li>
                            <li>Ações Disponíveis: create_issue, update_status</li>
                            <li>Limites Globais: 1000 chamadas/min</li>
                            <li>Dependências: Nenhuma</li>
                        </ul>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={() => setIsOpen(false)}>Fechar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
