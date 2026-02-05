'use client';
import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export function DocumentsHeader() {
  return (
    <PageHeader>
      <div className="flex-1">
        <PageHeaderTitle>Documentos</PageHeaderTitle>
        <PageHeaderDescription>
          Gerencie e organize todos os documentos da sua organização.
        </PageHeaderDescription>
      </div>
      <Button>
        <PlusCircle className="mr-2 h-4 w-4" />
        Novo Documento
      </Button>
    </PageHeader>
  );
}