import { Button } from "@/components/ui/button";
import { Users, PlusCircle } from "lucide-react";

type EmptyStateProps = {
    onInviteUser: () => void;
}

export function UsersEmptyState({ onInviteUser }: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed rounded-lg">
            <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
                <Users className="h-10 w-10" />
            </div>
            <h2 className="text-xl font-semibold">Nenhum usuário encontrado</h2>
            <p className="text-muted-foreground mt-2 mb-6">
                Comece convidando o primeiro membro para sua organização.
            </p>
            <Button onClick={onInviteUser}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Convidar Usuário
            </Button>
        </div>
    );
}
