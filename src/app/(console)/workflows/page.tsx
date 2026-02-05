
'use client';

import * as React from 'react';
import { WorkflowHeader } from '@/components/workflows/WorkflowHeader';
import { WorkflowStats } from '@/components/workflows/WorkflowStats';
import { WorkflowList } from '@/components/workflows/WorkflowList';
import { WorkflowEmptyState } from '@/components/workflows/WorkflowEmptyState';
import { WorkflowLoading } from '@/components/workflows/WorkflowLoading';
import { mockWorkflows } from '@/components/workflows/mock-data';

export default function WorkflowsPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [workflows, setWorkflows] = React.useState(mockWorkflows);

    // Simula o carregamento dos dados
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleCreateWorkflow = () => {
        // Lógica para navegação ou abertura de modal de criação
        console.log("Criar novo workflow");
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
