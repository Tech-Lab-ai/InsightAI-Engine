import { Users } from "lucide-react";

export function AdminUsersEmpty() {
    return (
        <div className="flex flex-col items-center justify-center text-center p-12 border-2 border-dashed rounded-lg mt-8">
            <div className="bg-muted text-muted-foreground p-4 rounded-full mb-4">
                <Users className="h-10 w-10" />
            </div>
            <h2 className="text-xl font-semibold">Nenhum usuário encontrado</h2>
            <p className="text-muted-foreground mt-2 mb-6">
                Filtros aplicados não retornaram resultados ou não há usuários na plataforma.
            </p>
        </div>
    );
}
