'use client';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

type ModalProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

export function UserInviteModal({ isOpen, setIsOpen }: ModalProps) {
    const { toast } = useToast();

    const handleInvite = () => {
        toast({
            title: "Convite Enviado (Simulação)",
            description: "O convite para o novo usuário foi enviado com sucesso.",
        });
        setIsOpen(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Convidar Novo Usuário</DialogTitle>
                    <DialogDescription>
                        Envie um convite para um novo membro se juntar à sua organização.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="nome@empresa.com" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="role">Papel</Label>
                        <Select>
                            <SelectTrigger id="role">
                                <SelectValue placeholder="Selecione um papel" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="viewer">Visualizador</SelectItem>
                                <SelectItem value="editor">Editor</SelectItem>
                                <SelectItem value="admin">Admin</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>Cancelar</Button>
                    <Button type="submit" onClick={handleInvite}>Enviar Convite</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
