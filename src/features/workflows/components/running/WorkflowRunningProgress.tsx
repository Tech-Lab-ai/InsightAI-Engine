import { Progress } from "@/components/ui/progress";

type WorkflowRunningProgressProps = {
    value: number;
};

export function WorkflowRunningProgress({ value }: WorkflowRunningProgressProps) {
    return (
        <div className="flex items-center gap-2">
            <Progress value={value} className="w-[100px]" />
            <span className="text-xs font-mono text-muted-foreground">{value}%</span>
        </div>
    );
}
