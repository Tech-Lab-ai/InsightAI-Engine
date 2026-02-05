'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

export function AdminCompaniesFilters() {
    return (
        <div className="flex flex-wrap items-center gap-2 pb-4">
            <div className="relative flex-1 min-w-[250px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Buscar por nome ou ID..."
                    className="pl-8 w-full"
                />
            </div>
            <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Todos os Status</SelectItem>
                    <SelectItem value="active">Ativa</SelectItem>
                    <SelectItem value="trial">Trial</SelectItem>
                    <SelectItem value="suspended">Suspensa</SelectItem>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Plano" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Todos os Planos</SelectItem>
                    <SelectItem value="basico">Básico</SelectItem>
                    <SelectItem value="starter">Starter</SelectItem>
                    <SelectItem value="pro">Pro</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                </SelectContent>
            </Select>
            <Button variant="outline">Filtrar</Button>
        </div>
    );
}
