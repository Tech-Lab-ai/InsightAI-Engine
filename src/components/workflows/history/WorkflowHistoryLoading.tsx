
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export function WorkflowHistoryLoading() {
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
                {Array.from({ length: 5 }).map((_, i) => (
                    <TableRow key={i}>
                        <TableCell><Skeleton className="h-4 w-3/4" /></TableCell>
                        <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                        <TableCell><Skeleton className="h-6 w-[100px] rounded-full" /></TableCell>
                        <TableCell><Skeleton className="h-4 w-[120px]" /></TableCell>
                        <TableCell><Skeleton className="h-4 w-[60px]" /></TableCell>
                        <TableCell className="text-right"><Skeleton className="h-8 w-[100px] ml-auto" /></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
