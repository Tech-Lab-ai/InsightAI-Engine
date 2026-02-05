'use client';
import * as React from 'react';
import { ReportsAuditHeader } from '@/features/reports/components/audit/ReportsAuditHeader';
import { ReportsAuditFilters } from '@/features/reports/components/audit/ReportsAuditFilters';
import { ReportsAuditTable } from '@/features/reports/components/audit/ReportsAuditTable';
import { ReportsAuditLoading } from '@/features/reports/components/audit/ReportsAuditLoading';
import { ReportsAuditEmptyState } from '@/features/reports/components/audit/ReportsAuditEmptyState';
import { getMockAuditEvents, AuditEvent } from '@/features/reports/services/auditService';

export default function ReportsAuditPage() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [events, setEvents] = React.useState<AuditEvent[]>([]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
        setEvents(getMockAuditEvents());
        setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <ReportsAuditLoading />;
    }
    if (events.length === 0) {
      return <ReportsAuditEmptyState />;
    }
    return <ReportsAuditTable events={events} />;
  };

  return (
    <div className="space-y-8">
      <ReportsAuditHeader />
      <ReportsAuditFilters />
      {renderContent()}
    </div>
  );
}
