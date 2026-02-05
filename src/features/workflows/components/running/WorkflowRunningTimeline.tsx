'use client';

import { cn } from "@/lib/utils";
import { CheckCircle, Loader, Circle } from "lucide-react";

type Step = {
    name: string;
    status: 'Concluído' | 'Em Execução' | 'Pendente';
};

type WorkflowRunningTimelineProps = {
    steps: Step[];
};

const statusMap: { [key: string]: { icon: React.ElementType, color: string, pulse?: boolean } } = {
    'Concluído': { icon: CheckCircle, color: 'text-green-500' },
    'Em Execução': { icon: Loader, color: 'text-blue-500', pulse: true },
    'Pendente': { icon: Circle, color: 'text-muted-foreground' },
}

export function WorkflowRunningTimeline({ steps }: WorkflowRunningTimelineProps) {
    return (
        <ol className="relative border-l border-border ml-2">
            {steps.map((step, index) => {
                const { icon: Icon, color, pulse } = statusMap[step.status];
                return (
                    <li key={index} className="mb-6 ml-6">
                        <span className={cn("absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-background ring-4 ring-background", color)}>
                            <Icon className={cn("w-4 h-4", pulse && "animate-spin")} />
                        </span>
                        <h3 className="font-semibold">{step.name}</h3>
                    </li>
                )
            })}
        </ol>
    );
}
