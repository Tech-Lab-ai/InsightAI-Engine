
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle, Loader } from "lucide-react";

type Step = {
    status: 'Sucesso' | 'Com Erro' | 'Em Execução';
    title: string;
    time: string;
};

type WorkflowExecutionTimelineProps = {
    steps: Step[];
};

const statusMap: { [key: string]: { icon: React.ElementType, color: string } } = {
    'Sucesso': { icon: CheckCircle, color: 'text-green-500' },
    'Com Erro': { icon: XCircle, color: 'text-red-500' },
    'Em Execução': { icon: Loader, color: 'text-yellow-500' },
}

export function WorkflowExecutionTimeline({ steps }: WorkflowExecutionTimelineProps) {
    return (
        <div className="relative pl-6">
             <div className="absolute left-[30px] top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
             <ul className="space-y-8">
                {steps.map((step, index) => {
                     const { icon: Icon, color } = statusMap[step.status];
                     return (
                        <li key={index} className="relative flex items-center">
                            <div className={cn("absolute left-0 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-background", color)}>
                                <Icon className={cn("w-5 h-5", step.status === 'Em Execução' && 'animate-spin')} />
                            </div>
                            <div className="ml-8 flex-1">
                                <p className="font-semibold">{step.title}</p>
                                <time className="text-sm text-muted-foreground">{step.time}</time>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
