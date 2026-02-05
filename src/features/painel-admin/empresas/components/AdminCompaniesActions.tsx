'use client';

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Eye, Users, Activity, MessageSquareWarning, PauseCircle } from "lucide-react";

type AdminCompaniesActionsProps = {
    companyId: string;
}

export function AdminCompaniesActions({ companyId }: AdminCompaniesActionsProps) {
    const router = useRouter();

    const handleNavigate = (path: string) => {
        router.push(path);
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Abrir menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleNavigate(`/painel-admin/empresas/${companyId}`)}>
                    <Eye className="mr-2 h-4 w-4" />
                    Ver Detalhes
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigate(`/painel-admin/empresas/${companyId}/users`)}>
                    <Users className="mr-2 h-4 w-4" />
                    Ver Usuários
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigate(`/painel-admin/empresas/${companyId}/usage`)}>
                    <Activity className="mr-2 h-4 w-4" />
                    Ver Uso
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigate(`/painel-admin/empresas/${companyId}/tickets`)}>
                    <MessageSquareWarning className="mr-2 h-4 w-4" />
                    Abrir Ticket
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-amber-600 focus:text-amber-700">
                    <PauseCircle className="mr-2 h-4 w-4" />
                    Suspender Empresa
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
