'use client';
import * as React from 'react';
import { ReportsHeader } from '@/components/reports/ReportsHeader';
import { ReportsKPIs } from '@/components/reports/ReportsKPIs';
import { ReportsCharts } from '@/components/reports/ReportsCharts';
import { ReportsTable } from '@/components/reports/ReportsTable';
import { ReportsLoading } from '@/components/reports/ReportsLoading';

export default function ReportsPage() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-8">
      <ReportsHeader />
      {isLoading ? (
        <ReportsLoading />
      ) : (
        <>
          <ReportsKPIs />
          <ReportsCharts />
          <ReportsTable />
        </>
      )}
    </div>
  );
}
