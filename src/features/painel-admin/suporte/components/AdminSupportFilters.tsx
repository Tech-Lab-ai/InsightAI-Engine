'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

export function AdminSupportFilters() {
    return (
        <div className="flex flex-wrap items-center gap-2 pb-4 border-b">
            <div className="relative flex-1 min-w-[250px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Buscar por ID, empresa ou assunto..."
                    className="pl-8 w-full"
                />
            </div>
            <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Todos os Status</SelectItem>
                    <SelectItem value="open">Aberto</SelectItem>
                    <SelectItem value="in_progress">Em atendimento</SelectItem>
                    <SelectItem value="pending_client">Aguardando cliente</SelectItem>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Prioridade" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Todas as Prioridades</SelectItem>
                    <SelectItem value="critical">Crítica</SelectItem>
                    <SelectItem value="high">Alta</SelectItem>
                    <SelectItem value="medium">Média</SelectItem>
                    <SelectItem value="low">Baixa</SelectItem>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="SLA" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Qualquer SLA</SelectItem>
                    <SelectItem value="violated">Violado</SelectItem>
                    <SelectItem value="ok">OK</SelectItem>
                </SelectContent>
            </Select>
            <Button variant="outline">Filtrar</Button>
        </div>
    );
}
