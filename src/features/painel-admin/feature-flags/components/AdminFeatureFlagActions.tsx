'use client';
import * as React from 'react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Eye, Power, PowerOff, TestTube, BarChart, ShieldAlert } from "lucide-react";
import { FeatureFlag } from '../../types';
import { AdminFeatureFlagDetails } from './AdminFeatureFlagDetails';
import { AdminFeatureFlagConfirmAction } from './AdminFeatureFlagConfirmAction';

type AdminFeatureFlagActionsProps = {
    featureFlag: FeatureFlag;
}

export function AdminFeatureFlagActions({ featureFlag }: AdminFeatureFlagActionsProps) {
    const [isDetailsOpen, setIsDetailsOpen] = React.useState(false);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Abrir menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onSelect={() => setIsDetailsOpen(true)}>
                        <Eye className="mr-2 h-4 w-4" />
                        Ver Detalhes
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <BarChart className="mr-2 h-4 w-4" />
                        Ver Impacto e Uso
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                     <AdminFeatureFlagConfirmAction
                        title="Ativar Globalmente"
                        description={`Tem certeza que deseja ativar a flag "${featureFlag.name}" para todos?`}
                     >
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="text-green-600 focus:text-green-700">
                            <Power className="mr-2 h-4 w-4" />
                            Ativar Globalmente
                        </DropdownMenuItem>
                    </AdminFeatureFlagConfirmAction>
                    <AdminFeatureFlagConfirmAction
                        title="Colocar em Teste"
                        description={`Tem certeza que deseja colocar a flag "${featureFlag.name}" em modo de teste?`}
                    >
                         <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="text-blue-600 focus:text-blue-700">
                            <TestTube className="mr-2 h-4 w-4" />
                            Colocar em Teste
                        </DropdownMenuItem>
                    </AdminFeatureFlagConfirmAction>
                    <AdminFeatureFlagConfirmAction
                        title="Desativar Globalmente"
                        description={`Tem certeza que deseja desativar a flag "${featureFlag.name}" para todos? Esta ação pode impactar usuários.`}
                        variant="destructive"
                    >
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="text-red-600 focus:text-red-700">
                            <PowerOff className="mr-2 h-4 w-4" />
                            Desativar Globalmente
                        </DropdownMenuItem>
                    </AdminFeatureFlagConfirmAction>
                    <DropdownMenuSeparator />
                     <AdminFeatureFlagConfirmAction
                        title="Arquivar Flag"
                        description={`Tem certeza que deseja arquivar a flag "${featureFlag.name}"?`}
                     >
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="text-amber-600 focus:text-amber-700">
                            <ShieldAlert className="mr-2 h-4 w-4" />
                            Arquivar Flag
                        </DropdownMenuItem>
                    </AdminFeatureFlagConfirmAction>
                </DropdownMenuContent>
            </DropdownMenu>
            <AdminFeatureFlagDetails
                featureFlag={featureFlag}
                isOpen={isDetailsOpen}
                setIsOpen={setIsDetailsOpen}
            />
        </>
    );
}
