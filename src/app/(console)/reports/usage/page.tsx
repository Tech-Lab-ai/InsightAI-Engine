'use client';
import * as React from 'react';
import { ReportsUsageHeader } from '@/features/reports/components/usage/ReportsUsageHeader';
import { ReportsUsageFilters } from '@/features/reports/components/usage/ReportsUsageFilters';
import { ReportsUsageMetrics } from '@/features/reports/components/usage/ReportsUsageMetrics';
import { ReportsUsageCharts } from '@/features/reports/components/usage/ReportsUsageCharts';
import { ReportsUsageTable } from '@/features/reports/components/usage/ReportsUsageTable';
import { ReportsUsageLoading } from '@/features/reports/components/usage/ReportsUsageLoading';
import { ReportsUsageEmptyState } from '@/features/reports/components/usage/ReportsUsageEmptyState';

export default function ReportsUsagePage() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasData, setHasData] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <ReportsUsageLoading />;
    }
    if (!hasData) {
      return <ReportsUsageEmptyState />;
    }
    return (
      <>
        <ReportsUsageMetrics />
        <ReportsUsageCharts />
        <ReportsUsageTable />
      </>
    );
  };


  return (
    <div className="space-y-8">
      <ReportsUsageHeader />
      <ReportsUsageFilters />
      {renderContent()}
    </div>
  );
}
