'use client';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function ReportsUsageFilters() {
    return (
        <div className="flex items-center gap-2">
            <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Tipo de Atividade" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Todas as Atividades</SelectItem>
                    <SelectItem value="chat">Chat</SelectItem>
                    <SelectItem value="workflow">Workflow</SelectItem>
                    <SelectItem value="document">Documento</SelectItem>
                </SelectContent>
            </Select>

             <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Filtrar por usuário..."
                    className="pl-8 sm:w-[200px] lg:w-[240px]"
                />
            </div>

            <Button variant="outline">Filtrar</Button>
            <Button variant="ghost">Limpar Filtros</Button>
        </div>
    );
}
