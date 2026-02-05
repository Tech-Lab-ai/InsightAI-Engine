'use client';
import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { DateRangePicker } from "@/features/reports/components/DateRangePicker";

export function ReportsAuditHeader() {
  return (
    <PageHeader>
      <div className="flex-1">
        <PageHeaderTitle>Auditoria</PageHeaderTitle>
        <PageHeaderDescription>
          Registro imutável de eventos e ações críticas do sistema.
        </PageHeaderDescription>
      </div>
      <div className="flex items-center gap-2">
        <DateRangePicker />
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Exportar Logs
        </Button>
      </div>
    </PageHeader>
  );
}
