'use client';

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WorkflowRunningProgress } from "./WorkflowRunningProgress";
import { RunningWorkflow } from "../../types/running";
import { PlayCircle, Timer } from "lucide-react";
import { WorkflowRunningTimeline } from "./WorkflowRunningTimeline";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type WorkflowRunningItemProps = {
    workflow: RunningWorkflow;
};

export function WorkflowRunningItem({ workflow }: WorkflowRunningItemProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex justify-between items-start">
                    <span className="flex-1">{workflow.name}</span>
                    <Badge variant="secondary" className="whitespace-nowrap">
                        <PlayCircle className="mr-2 h-3 w-3 animate-pulse text-green-500" />
                        {workflow.status}
                    </Badge>
                </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-4 gap-4 text-sm">
                <div>
                    <p className="font-semibold">Progresso</p>
                    <WorkflowRunningProgress value={workflow.progress} />
                </div>
                <div>
                    <p className="font-semibold">Etapa Atual</p>
                    <p className="text-muted-foreground truncate">{workflow.currentStep}</p>
                </div>
                <div>
                    <p className="font-semibold">Iniciado às</p>
                    <p className="text-muted-foreground">{workflow.startedAt}</p>
                </div>
                <div>
                    <p className="font-semibold">Tempo Decorrido</p>
                     <p className="text-muted-foreground flex items-center gap-1">
                        <Timer className="h-4 w-4" />
                        {workflow.elapsedTime}
                    </p>
                </div>
            </CardContent>
            <CardFooter className="justify-end">
                 <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="sm">Ver Detalhes</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>{workflow.name}</DialogTitle>
                        </DialogHeader>
                        <div className="py-4">
                           <WorkflowRunningTimeline steps={workflow.steps} />
                        </div>
                    </DialogContent>
                </Dialog>
            </CardFooter>
        </Card>
    );
}
