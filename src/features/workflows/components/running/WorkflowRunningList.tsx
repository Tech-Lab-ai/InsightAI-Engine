import { WorkflowRunningItem } from "./WorkflowRunningItem";
import { RunningWorkflow } from "../../types/running";

type WorkflowRunningListProps = {
    workflows: RunningWorkflow[];
};

export function WorkflowRunningList({ workflows }: WorkflowRunningListProps) {
    return (
        <div className="space-y-4">
            {workflows.map((workflow) => (
                <WorkflowRunningItem key={workflow.id} workflow={workflow} />
            ))}
        </div>
    );
}
