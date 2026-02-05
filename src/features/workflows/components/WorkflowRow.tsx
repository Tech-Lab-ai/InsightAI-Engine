import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Play, Pause, Edit, Trash2 } from "lucide-react";
import { Workflow } from "../types/workflow";

type WorkflowRowProps = {
    workflow: Workflow;
};

const statusVariant: { [key: string]: "default" | "secondary" | "destructive" | "outline" } = {
    'Ativo': 'default',
    'Pausado': 'secondary',
    'Com erro': 'destructive',
    'Agendado': 'outline'
}

export function WorkflowRow({ workflow }: WorkflowRowProps) {
    return (
        <TableRow>
            <TableCell className="font-medium">{workflow.name}</TableCell>
            <TableCell>
                <Badge variant={statusVariant[workflow.status] || 'secondary'} className="capitalize">
                    {workflow.status}
                </Badge>
            </TableCell>
            <TableCell>{workflow.lastRun}</TableCell>
            <TableCell>{workflow.nextRun}</TableCell>
            <TableCell className="text-right">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Abrir menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                            <Play className="mr-2 h-4 w-4" />
                            Executar Agora
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Pause className="mr-2 h-4 w-4" />
                            Pausar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Excluir
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        </TableRow>
    );
}
