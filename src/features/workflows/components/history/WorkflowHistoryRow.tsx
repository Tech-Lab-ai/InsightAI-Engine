'use client';

import * as React from 'react';
import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { WorkflowExecutionTimeline } from "./WorkflowExecutionTimeline";
import { mockTimelineSteps, mockTimelineStepsError } from "../../services/executionService";
import { WorkflowExecution } from "../../types/execution";
import { CheckCircle, XCircle, Loader, CircleSlash } from "lucide-react";

type WorkflowHistoryRowProps = {
    execution: WorkflowExecution;
};

const statusMap: { [key: string]: { variant: "default" | "secondary" | "destructive" | "outline", icon: React.ElementType } } = {
    'Sucesso': { variant: 'default', icon: CheckCircle },
    'Com Erro': { variant: 'destructive', icon: XCircle },
    'Em Execução': { variant: 'secondary', icon: Loader },
    'Cancelado': { variant: 'outline', icon: CircleSlash },
}

export function WorkflowHistoryRow({ execution }: WorkflowHistoryRowProps) {
    const { variant, icon: Icon } = statusMap[execution.status] || { variant: 'secondary', icon: Loader };

    const getTimeline = () => {
        if (execution.status === 'Com Erro') return mockTimelineStepsError;
        return mockTimelineSteps;
    }

    return (
        <TableRow>
            <TableCell className="font-medium">
                <div className="font-medium">{execution.workflowName}</div>
                <div className="text-xs text-muted-foreground">{execution.workflowId}</div>
            </TableCell>
            <TableCell>
                <Badge variant="outline" className="font-mono">{execution.executionId}</Badge>
            </TableCell>
            <TableCell>
                <Badge variant={variant} className="capitalize">
                   <Icon className={`mr-2 h-3 w-3 ${execution.status === 'Em Execução' ? 'animate-spin' : ''}`} />
                   {execution.status}
                </Badge>
            </TableCell>
            <TableCell>{execution.startedAt}</TableCell>
            <TableCell>{execution.duration}</TableCell>
            <TableCell className="text-right">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="sm">Ver Detalhes</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-2xl">
                        <DialogHeader>
                            <DialogTitle>Detalhes da Execução</DialogTitle>
                            <DialogDescription>
                                ID: {execution.executionId}
                            </DialogDescription>
                        </DialogHeader>
                        <WorkflowExecutionTimeline steps={getTimeline()} />
                    </DialogContent>
                </Dialog>
            </TableCell>
        </TableRow>
    );
}
