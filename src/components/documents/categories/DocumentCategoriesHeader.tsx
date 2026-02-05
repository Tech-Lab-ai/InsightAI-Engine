'use client';
import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

type HeaderProps = {
    onNewCategory: () => void;
}

export function DocumentCategoriesHeader({ onNewCategory }: HeaderProps) {
  return (
    <PageHeader>
      <div className="flex-1">
        <PageHeaderTitle>Categorias de Documentos</PageHeaderTitle>
        <PageHeaderDescription>
          Gerencie e organize as categorias para agrupar seus documentos.
        </PageHeaderDescription>
      </div>
      <Button onClick={onNewCategory}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Nova Categoria
      </Button>
    </PageHeader>
  );
}
