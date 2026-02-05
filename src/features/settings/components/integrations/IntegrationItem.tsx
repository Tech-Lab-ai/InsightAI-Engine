'use client';

import * as React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { IntegrationConfigModal } from './IntegrationConfigModal';
import { Integration } from '../../services/integrationService';

type IntegrationItemProps = {
    integration: Integration;
};

export function IntegrationItem({ integration }: IntegrationItemProps) {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [isActive, setIsActive] = React.useState(false);

    return (
        <>
            <Card className="flex flex-col">
                <CardHeader className="flex-1">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center h-12 w-12 bg-muted rounded-lg">
                                <integration.icon className="h-6 w-6" />
                            </div>
                            <div>
                                <CardTitle>{integration.name}</CardTitle>
                                <CardDescription>{integration.description}</CardDescription>
                            </div>
                        </div>
                         <Switch checked={isActive} onCheckedChange={setIsActive} aria-readonly />
                    </div>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                    <Badge variant={isActive ? 'default' : 'outline'}>{isActive ? 'Ativado' : 'Desativado'}</Badge>
                    <Button variant="secondary" onClick={() => setIsModalOpen(true)}>
                        Configurar
                    </Button>
                </CardFooter>
            </Card>
            <IntegrationConfigModal
                integration={integration}
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
            />
        </>
    );
}
