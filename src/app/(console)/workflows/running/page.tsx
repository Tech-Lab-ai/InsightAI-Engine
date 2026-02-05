'use client';

import * as React from 'react';
import { WorkflowRunningHeader } from '@/components/workflows/running/WorkflowRunningHeader';
import { WorkflowRunningStats } from '@/components/workflows/running/WorkflowRunningStats';
import { WorkflowRunningList } from '@/components/workflows/running/WorkflowRunningList';
import { WorkflowRunningEmptyState } from '@/components/workflows/running/WorkflowRunningEmptyState';
import { WorkflowRunningLoading } from '@/components/workflows/running/WorkflowRunningLoading';
import { mockRunningWorkflows, RunningWorkflow } from '@/components/workflows/running/mock-data';

export default function WorkflowsRunningPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [runningWorkflows, setRunningWorkflows] = React.useState<RunningWorkflow[]>([]);

    React.useEffect(() => {
        // Simula o carregamento dos dados
        const timer = setTimeout(() => {
            setRunningWorkflows(mockRunningWorkflows);
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
