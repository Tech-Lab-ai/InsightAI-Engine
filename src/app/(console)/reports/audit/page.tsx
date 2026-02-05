'use client';
import * as React from 'react';
import { ReportsAuditHeader } from '@/components/reports/audit/ReportsAuditHeader';
import { ReportsAuditFilters } from '@/components/reports/audit/ReportsAuditFilters';
import { ReportsAuditTable } from '@/components/reports/audit/ReportsAuditTable';
import { ReportsAuditLoading } from '@/components/reports/audit/ReportsAuditLoading';
import { ReportsAuditEmptyState } from '@/components/reports/audit/ReportsAuditEmptyState';
import { mockAuditEvents, AuditEvent } from '@/components/reports/audit/audit-mock-data';

export default function ReportsAuditPage() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [events, setEvents] = React.useState<AuditEvent[]>([]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
        setEvents(mockAuditEvents);
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
