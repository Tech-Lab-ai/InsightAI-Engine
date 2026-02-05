
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { WorkflowRow } from "./WorkflowRow";
import { Workflow } from "./mock-data";

type WorkflowListProps = {
    workflows: Workflow[];
};

export function WorkflowList({ workflows }: WorkflowListProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[40%]">Nome do Workflow</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Última Execução</TableHead>
                    <TableHead>Próxima Execução</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {workflows.map((workflow) => (
                    <WorkflowRow key={workflow.id} workflow={workflow} />
                ))}
            </TableBody>
        </Table>
    );
}
