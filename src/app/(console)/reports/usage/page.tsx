'use client';
import * as React from 'react';
import { ReportsUsageHeader } from '@/components/reports/usage/ReportsUsageHeader';
import { ReportsUsageFilters } from '@/components/reports/usage/ReportsUsageFilters';
import { ReportsUsageMetrics } from '@/components/reports/usage/ReportsUsageMetrics';
import { ReportsUsageCharts } from '@/components/reports/usage/ReportsUsageCharts';
import { ReportsUsageTable } from '@/components/reports/usage/ReportsUsageTable';
import { ReportsUsageLoading } from '@/components/reports/usage/ReportsUsageLoading';
import { ReportsUsageEmptyState } from '@/components/reports/usage/ReportsUsageEmptyState';

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
