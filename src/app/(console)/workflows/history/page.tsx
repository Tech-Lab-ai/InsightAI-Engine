'use client';

import * as React from 'react';
import { WorkflowHistoryHeader } from '@/components/workflows/history/WorkflowHistoryHeader';
import { WorkflowHistoryFilters } from '@/components/workflows/history/WorkflowHistoryFilters';
import { WorkflowHistoryList } from '@/components/workflows/history/WorkflowHistoryList';
import { WorkflowHistoryEmptyState } from '@/components/workflows/history/WorkflowHistoryEmptyState';
import { WorkflowHistoryLoading } from '@/components/workflows/history/WorkflowHistoryLoading';
import { mockExecutions, WorkflowExecution } from '@/components/workflows/history/history-mock-data';

export default function WorkflowsHistoryPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [executions, setExecutions] = React.useState<WorkflowExecution[]>([]);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setExecutions(mockExecutions);
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const renderContent = () => {
        if (isLoading) {
            return <WorkflowHistoryLoading />;
        }
        if (executions.length === 0) {
            return <WorkflowHistoryEmptyState />;
        }
        return <WorkflowHistoryList executions={executions} />;
    };

    return (
        <div className="space-y-8">
            <WorkflowHistoryHeader />
            <WorkflowHistoryFilters />
            <div className="border rounded-lg">
                {renderContent()}
            </div>
        </div>
    );
}
