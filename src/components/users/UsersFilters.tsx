'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

export function UsersFilters() {
  return (
    <div className="flex flex-wrap items-center gap-2 pb-4 border-b">
        <div className="relative flex-1 min-w-[250px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
                type="search"
                placeholder="Buscar por nome ou email..."
                className="pl-8 w-full"
            />
        </div>
        <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Papel" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">Todos os Papéis</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="editor">Editor</SelectItem>
                <SelectItem value="viewer">Visualizador</SelectItem>
            </SelectContent>
        </Select>
        <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">Todos os Status</SelectItem>
                <SelectItem value="active">Ativo</SelectItem>
                <SelectItem value="pending">Pendente</SelectItem>
                <SelectItem value="suspended">Suspenso</SelectItem>
            </SelectContent>
        </Select>
        <Button variant="outline">Filtrar</Button>
    </div>
  );
}
