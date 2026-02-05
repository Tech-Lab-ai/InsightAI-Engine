'use client';
import * as React from 'react';
import { ReportsHeader } from '@/features/reports/components/ReportsHeader';
import { ReportsKPIs } from '@/features/reports/components/ReportsKPIs';
import { ReportsCharts } from '@/features/reports/components/ReportsCharts';
import { ReportsTable } from '@/features/reports/components/ReportsTable';
import { ReportsLoading } from '@/features/reports/components/ReportsLoading';

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
