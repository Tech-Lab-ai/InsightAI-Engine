'use client';
import * as React from 'react';
import { ReportsROIHeader } from '@/components/reports/roi/ReportsROIHeader';
import { ReportsROICards } from '@/components/reports/roi/ReportsROICards';
import { ReportsROICharts } from '@/components/reports/roi/ReportsROICharts';
import { ReportsROIBreakdown } from '@/components/reports/roi/ReportsROIBreakdown';
import { ReportsROILoading } from '@/components/reports/roi/ReportsROILoading';
import { ReportsROIEmptyState } from '@/components/reports/roi/ReportsROIEmptyState';

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
