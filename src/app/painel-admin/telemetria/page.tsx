'use client';
import * as React from 'react';
import { AdminTelemetryHeader } from '@/features/painel-admin/telemetria/components/AdminTelemetryHeader';
import { AdminTelemetryMetrics } from '@/features/painel-admin/telemetria/components/AdminTelemetryMetrics';
import { AdminIncidentsList } from '@/features/painel-admin/telemetria/components/AdminIncidentsList';
import { AdminTelemetryFilters } from '@/features/painel-admin/telemetria/components/AdminTelemetryFilters';
import { AdminTelemetryLogs } from '@/features/painel-admin/telemetria/components/AdminTelemetryLogs';
import { AdminTelemetryLoading } from '@/features/painel-admin/telemetria/components/AdminTelemetryLoading';
import { getTelemetryMetrics, getSecurityIncidents, getTelemetryEvents, getSystemStatus } from '@/features/painel-admin/telemetria/services/telemetryService';
import { TelemetryMetrics, SecurityIncident, TelemetryEvent, SystemStatus } from '@/features/painel-admin/telemetria/types';

export default function AdminTelemetryPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [metrics, setMetrics] = React.useState<TelemetryMetrics | null>(null);
    const [systemStatus, setSystemStatus] = React.useState<SystemStatus>('NORMAL');
    const [incidents, setIncidents] = React.useState<SecurityIncident[]>([]);
    const [events, setEvents] = React.useState<TelemetryEvent[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const [metricsData, statusData, incidentsData, eventsData] = await Promise.all([
                    getTelemetryMetrics(),
                    getSystemStatus(),
                    getSecurityIncidents(),
                    getTelemetryEvents(),
                ]);
                setMetrics(metricsData);
                setSystemStatus(statusData);
                setIncidents(incidentsData);
                setEvents(eventsData);
            } catch (error) {
                console.error("Failed to fetch telemetry data", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <AdminTelemetryLoading />;
    }

    return (
        <div className="space-y-8">
            <AdminTelemetryHeader status={systemStatus} />
            {metrics && <AdminTelemetryMetrics metrics={metrics} />}
            <AdminIncidentsList incidents={incidents} />
            <AdminTelemetryFilters />
            <AdminTelemetryLogs events={events} />
        </div>
    );
}
