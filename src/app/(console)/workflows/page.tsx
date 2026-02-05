
'use client';

import * as React from 'react';
import { WorkflowHeader } from '@/features/workflows/components/WorkflowHeader';
import { WorkflowStats } from '@/features/workflows/components/WorkflowStats';
import { WorkflowList } from '@/features/workflows/components/WorkflowList';
import { WorkflowEmptyState } from '@/features/workflows/components/WorkflowEmptyState';
import { WorkflowLoading } from '@/features/workflows/components/WorkflowLoading';
import { getMockWorkflows } from '@/features/workflows/services/workflowService';
import { Workflow } from '@/features/workflows/types/workflow';
import { useRouter } from 'next/navigation';


export default function WorkflowsPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [workflows, setWorkflows] = React.useState<Workflow[]>([]);
    const router = useRouter();

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setWorkflows(getMockWorkflows());
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleCreateWorkflow = () => {
        router.push('/workflows/create');
    };

    const renderContent = () => {
        if (isLoading) {
            return <WorkflowLoading />;
        }
        if (workflows.length === 0) {
            return <WorkflowEmptyState onCreateWorkflow={handleCreateWorkflow} />;
        }
        return <WorkflowList workflows={workflows} />;
    };

    return (
        <div className="space-y-8">
            <WorkflowHeader onCreateWorkflow={handleCreateWorkflow} />
            <WorkflowStats />
            {renderContent()}
        </div>
    );
}
