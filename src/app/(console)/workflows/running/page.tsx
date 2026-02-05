'use client';

import * as React from 'react';
import { WorkflowRunningHeader } from '@/features/workflows/components/running/WorkflowRunningHeader';
import { WorkflowRunningStats } from '@/features/workflows/components/running/WorkflowRunningStats';
import { WorkflowRunningList } from '@/features/workflows/components/running/WorkflowRunningList';
import { WorkflowRunningEmptyState } from '@/features/workflows/components/running/WorkflowRunningEmptyState';
import { WorkflowRunningLoading } from '@/features/workflows/components/running/WorkflowRunningLoading';
import { getMockRunningWorkflows, RunningWorkflow } from '@/features/workflows/services/runningService';

export default function WorkflowsRunningPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [runningWorkflows, setRunningWorkflows] = React.useState<RunningWorkflow[]>([]);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setRunningWorkflows(getMockRunningWorkflows());
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const renderContent = () => {
        if (isLoading) {
            return <WorkflowRunningLoading />;
        }
        if (runningWorkflows.length === 0) {
            return <WorkflowRunningEmptyState />;
        }
        return <WorkflowRunningList workflows={runningWorkflows} />;
    };

    return (
        <div className="space-y-8">
            <WorkflowRunningHeader />
            <WorkflowRunningStats />
            {renderContent()}
        </div>
    );
}
