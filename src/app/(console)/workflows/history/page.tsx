'use client';

import * as React from 'react';
import { WorkflowHistoryHeader } from '@/features/workflows/components/history/WorkflowHistoryHeader';
import { WorkflowHistoryFilters } from '@/features/workflows/components/history/WorkflowHistoryFilters';
import { WorkflowHistoryList } from '@/features/workflows/components/history/WorkflowHistoryList';
import { WorkflowHistoryEmptyState } from '@/features/workflows/components/history/WorkflowHistoryEmptyState';
import { WorkflowHistoryLoading } from '@/features/workflows/components/history/WorkflowHistoryLoading';
import { getMockExecutions } from '@/features/workflows/services/executionService';
import { WorkflowExecution } from '@/features/workflows/types/execution';

export default function WorkflowsHistoryPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [executions, setExecutions] = React.useState<WorkflowExecution[]>([]);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setExecutions(getMockExecutions());
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
