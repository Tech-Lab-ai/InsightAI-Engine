'use client';

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getMockWorkflows } from '@/features/workflows/services/workflowService';

export function WorkflowHistoryFilters() {
    const mockWorkflows = getMockWorkflows();
    return (
        <div className="flex items-center gap-2">
            <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Todos os Status</SelectItem>
                    <SelectItem value="success">Sucesso</SelectItem>
                    <SelectItem value="error">Com Erro</SelectItem>
                    <SelectItem value="running">Em Execução</SelectItem>
                    <SelectItem value="canceled">Cancelado</SelectItem>
                </SelectContent>
            </Select>

             <Select>
                <SelectTrigger className="w-[280px]">
                    <SelectValue placeholder="Filtrar por workflow..." />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Todos os Workflows</SelectItem>
                    {mockWorkflows.map(wf => (
                         <SelectItem key={wf.id} value={wf.id}>{wf.name}</SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Button variant="outline">Filtrar</Button>
            <Button variant="ghost">Limpar Filtros</Button>
        </div>
    );
}
