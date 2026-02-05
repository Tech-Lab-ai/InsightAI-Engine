'use client';

import * as React from 'react';
import { cn } from "@/lib/utils";

type WorkflowStepperProps = {
    currentStep: number;
    onStepClick: (step: number) => void;
};

const steps = [
    { number: 1, title: "Informações" },
    { number: 2, title: "Gatilho" },
    { number: 3, title: "Etapas" },
    { number: 4, title: "Revisão" },
];

export function WorkflowStepper({ currentStep, onStepClick }: WorkflowStepperProps) {
    return (
        <div className="flex items-center border-b pb-4">
            {steps.map((step, index) => {
                const isActive = currentStep === step.number;
                const isCompleted = currentStep > step.number;
                return (
                    <React.Fragment key={step.number}>
                        <div className="flex flex-col items-center cursor-pointer" onClick={() => onStepClick(step.number)}>
                             <div className={cn("flex items-center justify-center w-8 h-8 rounded-full text-sm transition-colors",
                                isActive ? "bg-primary text-primary-foreground" :
                                isCompleted ? "bg-primary/20 text-primary" :
                                "bg-muted text-muted-foreground border"
                            )}>
                                {isCompleted ? <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" /></svg> : step.number}
                            </div>
                            <p className={cn("mt-2 text-sm", isActive ? "text-primary font-semibold" : "text-muted-foreground")}>
                                {step.title}
                            </p>
                        </div>
                        {index < steps.length - 1 && <div className={cn("flex-1 h-px", isCompleted ? 'bg-primary' : 'bg-border')} />}
                    </React.Fragment>
                );
            })}
        </div>
    );
}
