'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

export function AdminFeatureFlagsFilters() {
    return (
        <div className="flex flex-wrap items-center gap-2 pb-4">
            <div className="relative flex-1 min-w-[250px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Buscar por nome ou chave..."
                    className="pl-8 w-full"
                />
            </div>
            <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="active">Ativa</SelectItem>
                    <SelectItem value="testing">Em teste</SelectItem>
                    <SelectItem value="inactive">Desativada</SelectItem>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Escopo" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="global">Global</SelectItem>
                    <SelectItem value="plan">Por Plano</SelectItem>
                    <SelectItem value="company">Por Empresa</SelectItem>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="feature">Feature</SelectItem>
                    <SelectItem value="experiment">Experimento</SelectItem>
                    <SelectItem value="kill-switch">Kill Switch</SelectItem>
                </SelectContent>
            </Select>
            <Button variant="outline">Filtrar</Button>
        </div>
    );
}
