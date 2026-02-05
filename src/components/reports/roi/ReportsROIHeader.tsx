'use client';
import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { DateRangePicker } from "@/components/reports/DateRangePicker";

export function ReportsROIHeader() {
  return (
    <PageHeader>
      <div className="flex-1">
        <PageHeaderTitle>Análise de ROI</PageHeaderTitle>
        <PageHeaderDescription>
          Acompanhe o retorno sobre o investimento gerado pela plataforma.
        </PageHeaderDescription>
      </div>
      <div className="flex items-center gap-2">
        <DateRangePicker />
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Exportar Relatório
        </Button>
      </div>
    </PageHeader>
  );
}
