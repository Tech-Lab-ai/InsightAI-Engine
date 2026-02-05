'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, List, LayoutGrid } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type DocumentsFiltersProps = {
    view: 'list' | 'grid';
    setView: (view: 'list' | 'grid') => void;
};

export function DocumentsFilters({ view, setView }: DocumentsFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
        <div className="relative flex-1 min-w-[250px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
                type="search"
                placeholder="Buscar por nome..."
                className="pl-8 w-full"
            />
        </div>
        <Select>
            <SelectTrigger className="w-full sm:w-auto">
                <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">Todos os Tipos</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="docx">DOCX</SelectItem>
                <SelectItem value="csv">CSV</SelectItem>
            </SelectContent>
        </Select>
        <Select>
            <SelectTrigger className="w-full sm:w-auto">
                <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">Todas as Categorias</SelectItem>
                <SelectItem value="juridico">Jurídico</SelectItem>
                <SelectItem value="financeiro">Financeiro</SelectItem>
                <SelectItem value="tecnico">Técnico</SelectItem>
            </SelectContent>
        </Select>
        <Button variant="outline">Filtrar</Button>
        <div className="flex-grow"></div>
         <ToggleGroup type="single" value={view} onValueChange={(value) => { if(value) setView(value as 'list' | 'grid')}} className="hidden sm:flex">
            <ToggleGroupItem value="list" aria-label="Toggle list">
                <List className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="grid" aria-label="Toggle grid">
                <LayoutGrid className="h-4 w-4" />
            </ToggleGroupItem>
        </ToggleGroup>
    </div>
  );
}
