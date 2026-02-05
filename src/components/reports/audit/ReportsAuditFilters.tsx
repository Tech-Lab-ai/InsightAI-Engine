'use client';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function ReportsAuditFilters() {
    return (
        <div className="flex flex-wrap items-center gap-2">
            <Select defaultValue="all_events">
                <SelectTrigger className="w-full sm:w-auto">
                    <SelectValue placeholder="Tipo de Evento" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all_events">Todos os Eventos</SelectItem>
                    <SelectItem value="auth">Autenticação</SelectItem>
                    <SelectItem value="document">Documento</SelectItem>
                    <SelectItem value="workflow">Workflow</SelectItem>
                    <SelectItem value="user">Usuário</SelectItem>
                </SelectContent>
            </Select>
            <Select defaultValue="all_severities">
                <SelectTrigger className="w-full sm:w-auto">
                    <SelectValue placeholder="Severidade" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all_severities">Todas as Severidades</SelectItem>
                    <SelectItem value="critical">Crítico</SelectItem>
                    <SelectItem value: "high">Alto</SelectItem>
                    <SelectItem value="medium">Médio</SelectItem>
                    <SelectItem value="low">Baixo</SelectItem>
                    <SelectItem value="info">Informativo</SelectItem>
                </SelectContent>
            </Select>
             <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Filtrar por usuário, recurso..."
                    className="pl-8 w-full"
                />
            </div>
            <Button variant="outline">Filtrar</Button>
            <Button variant="ghost">Limpar Filtros</Button>
        </div>
    );
}
