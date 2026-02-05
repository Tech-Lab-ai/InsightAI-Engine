'use client';

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Eye, Building, History, PowerOff, ShieldAlert } from "lucide-react";
import { AdminUser } from "../../types";

type AdminUsersActionsProps = {
    user: AdminUser;
}

export function AdminUsersActions({ user }: AdminUsersActionsProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Abrir menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>
                    <Eye className="mr-2 h-4 w-4" />
                    Ver Perfil do Usuário
                </DropdownMenuItem>
                 <DropdownMenuItem>
                    <Building className="mr-2 h-4 w-4" />
                    Ver Empresa Vinculada
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <History className="mr-2 h-4 w-4" />
                    Histórico de Acesso
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                 <DropdownMenuItem>
                    <PowerOff className="mr-2 h-4 w-4" />
                    Resetar Sessão
                </DropdownMenuItem>
                <DropdownMenuItem className="text-amber-600 focus:text-amber-700">
                    <ShieldAlert className="mr-2 h-4 w-4" />
                    Suspender Usuário
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
