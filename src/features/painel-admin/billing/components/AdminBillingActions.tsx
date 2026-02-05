'use client';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Building, FileText, History, AlertTriangle, XCircle } from "lucide-react";

type AdminBillingActionsProps = {
    subscriptionId: string;
}

export function AdminBillingActions({ subscriptionId }: AdminBillingActionsProps) {
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
                    <Building className="mr-2 h-4 w-4" />
                    Ver Empresa
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <History className="mr-2 h-4 w-4" />
                    Histórico de Pagamentos
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <FileText className="mr-2 h-4 w-4" />
                    Ver Faturas
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-amber-600 focus:text-amber-700">
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Marcar como Inadimplente
                </DropdownMenuItem>
                 <DropdownMenuItem className="text-red-600 focus:text-red-700">
                    <XCircle className="mr-2 h-4 w-4" />
                    Suspender Cobrança
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
