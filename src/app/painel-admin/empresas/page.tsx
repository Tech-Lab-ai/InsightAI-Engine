'use client';
import * as React from 'react';
import { AdminCompaniesHeader } from '@/features/painel-admin/empresas/components/AdminCompaniesHeader';
import { AdminCompaniesMetrics } from '@/features/painel-admin/empresas/components/AdminCompaniesMetrics';
import { AdminCompaniesFilters } from '@/features/painel-admin/empresas/components/AdminCompaniesFilters';
import { AdminCompaniesTable } from '@/features/painel-admin/empresas/components/AdminCompaniesTable';
import { AdminCompaniesLoading } from '@/features/painel-admin/empresas/components/AdminCompaniesLoading';
import { AdminCompaniesEmpty } from '@/features/painel-admin/empresas/components/AdminCompaniesEmpty';
import { getAdminCompanies, getAdminCompanyMetrics } from '@/features/painel-admin/empresas/services/adminCompaniesService';
import { AdminCompany, AdminCompanyMetrics } from '@/features/painel-admin/empresas/types';

export default function AdminCompaniesPage() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [companies, setCompanies] = React.useState<AdminCompany[]>([]);
    const [metrics, setMetrics] = React.useState<AdminCompanyMetrics | null>(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const [companiesData, metricsData] = await Promise.all([
                    getAdminCompanies(),
                    getAdminCompanyMetrics()
                ]);
                setCompanies(companiesData);
                setMetrics(metricsData);
            } catch (error) {
                console.error("Failed to fetch admin companies data", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <AdminCompaniesLoading />;
    }

    return (
        <div className="space-y-8">
            <AdminCompaniesHeader totalCompanies={metrics?.total || 0} />
            {metrics && <AdminCompaniesMetrics metrics={metrics} />}
            <AdminCompaniesFilters />
            {companies.length > 0 ? (
                <AdminCompaniesTable companies={companies} />
            ) : (
                <AdminCompaniesEmpty />
            )}
        </div>
    );
}
