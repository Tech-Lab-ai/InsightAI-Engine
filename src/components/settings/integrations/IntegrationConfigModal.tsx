'use client';

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { Integration } from "./integrations-data";

type ModalProps = {
    integration: Integration;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

export function IntegrationConfigModal({ integration, isOpen, setIsOpen }: ModalProps) {
    if (!integration) return null;

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[480px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <integration.icon className="h-5 w-5" />
                        Configurar {integration.name}
                    </DialogTitle>
                    <DialogDescription>
                        Insira as credenciais para ativar a integração.
                    </DialogDescription>
                </DialogHeader>
                <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Ambiente de Demonstração</AlertTitle>
                    <AlertDescription>
                        Esta é uma configuração visual. As chaves não serão salvas ou utilizadas.
                    </AlertDescription>
                </Alert>
                <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="api-key">API Key</Label>
                        <Input id="api-key" type="password" placeholder="******************" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="webhook-url">Webhook URL</Label>
                        <Input id="webhook-url" placeholder="https://api.insightai.com/webhooks/..." />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>Cancelar</Button>
                    <Button type="submit" onClick={() => setIsOpen(false)}>Salvar Configuração</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
