'use client';
import * as React from 'react';
import { ReportsROIHeader } from '@/features/reports/components/roi/ReportsROIHeader';
import { ReportsROICards } from '@/features/reports/components/roi/ReportsROICards';
import { ReportsROICharts } from '@/features/reports/components/roi/ReportsROICharts';
import { ReportsROIBreakdown } from '@/features/reports/components/roi/ReportsROIBreakdown';
import { ReportsROILoading } from '@/features/reports/components/roi/ReportsROILoading';
import { ReportsROIEmptyState } from '@/features/reports/components/roi/ReportsROIEmptyState';

export default function ReportsRoiPage() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasData, setHasData] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <ReportsROILoading />;
    }
    if (!hasData) {
      return <ReportsROIEmptyState />;
    }
    return (
      <>
        <ReportsROICards />
        <ReportsROICharts />
        <ReportsROIBreakdown />
      </>
    );
  };

  return (
    <div className="space-y-8">
      <ReportsROIHeader />
      {renderContent()}
    </div>
  );
}
