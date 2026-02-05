'use client';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Power, PowerOff, Play, Eye, BarChart, ShieldAlert } from "lucide-react";

type AdminIntegrationActionsProps = {
    integrationId: string;
}

export function AdminIntegrationActions({ integrationId }: AdminIntegrationActionsProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Abrir menu de governança</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>
                    <Eye className="mr-2 h-4 w-4" />
                    Ver Detalhes
                </DropdownMenuItem>
                 <DropdownMenuItem>
                    <BarChart className="mr-2 h-4 w-4" />
                    Ver Uso e Impacto
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-green-600 focus:text-green-700">
                    <Power className="mr-2 h-4 w-4" />
                    Ativar Globalmente
                </DropdownMenuItem>
                 <DropdownMenuItem className="text-blue-600 focus:text-blue-700">
                    <Play className="mr-2 h-4 w-4" />
                    Colocar em Modo Simulado
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-600 focus:text-red-700">
                    <PowerOff className="mr-2 h-4 w-4" />
                    Desativar Globalmente
                </DropdownMenuItem>
                 <DropdownMenuSeparator />
                 <DropdownMenuItem className="text-amber-600 focus:text-amber-700">
                    <ShieldAlert className="mr-2 h-4 w-4" />
                    Reportar Problema
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
