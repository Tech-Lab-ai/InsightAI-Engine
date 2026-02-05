'use client';

import * as React from 'react';
import { WorkflowCreateHeader } from '@/features/workflows/components/create/WorkflowCreateHeader';
import { WorkflowStepper } from '@/features/workflows/components/create/WorkflowStepper';
import { WorkflowSidebar } from '@/features/workflows/components/create/WorkflowSidebar';
import { WorkflowCanvas } from '@/features/workflows/components/create/WorkflowCanvas';

export default function CreateWorkflowPage() {
    const [currentStep, setCurrentStep] = React.useState(1);
    const totalSteps = 4;

    // Funções mock para navegação no stepper
    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));
    const goToStep = (step: number) => setCurrentStep(step);

    return (
        <div className="flex flex-col h-full gap-8">
            <WorkflowCreateHeader />
            <WorkflowStepper currentStep={currentStep} onStepClick={goToStep} />
            <div className="flex-1 grid md:grid-cols-[280px_1fr] gap-8">
                <WorkflowSidebar />
                <WorkflowCanvas currentStep={currentStep} nextStep={nextStep} prevStep={prevStep} />
            </div>
        </div>
    );
}
