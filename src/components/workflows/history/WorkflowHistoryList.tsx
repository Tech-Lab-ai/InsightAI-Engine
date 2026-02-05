
'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { WorkflowHistoryRow } from "./WorkflowHistoryRow";
import { WorkflowExecution } from "./history-mock-data";

type WorkflowHistoryListProps = {
    executions: WorkflowExecution[];
};

export function WorkflowHistoryList({ executions }: WorkflowHistoryListProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[30%]">Workflow</TableHead>
                    <TableHead>ID da Execução</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Início</TableHead>
                    <TableHead>Duração</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {executions.map((execution) => (
                    <WorkflowHistoryRow key={execution.executionId} execution={execution} />
                ))}
            </TableBody>
        </Table>
    );
}
