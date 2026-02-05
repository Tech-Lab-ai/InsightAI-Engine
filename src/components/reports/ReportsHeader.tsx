'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { PageHeader, PageHeaderTitle, PageHeaderDescription } from '@/components/page-header';
import { DateRangePicker } from '@/components/reports/DateRangePicker';

export function ReportsHeader() {
  return (
    <PageHeader>
      <div className="flex-1">
        <PageHeaderTitle>Relatórios</PageHeaderTitle>
        <PageHeaderDescription>
          Resumo geral de uso, desempenho e ROI da plataforma.
        </PageHeaderDescription>
      </div>
      <div className="flex items-center gap-2">
        <DateRangePicker />
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Exportar
        </Button>
      </div>
    </PageHeader>
  );
}
