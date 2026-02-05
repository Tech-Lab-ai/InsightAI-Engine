import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { AdminOverview } from "@/features/painel-admin/dashboard/components/AdminOverview";
import { HealthStatusCard } from "@/features/painel-admin/dashboard/components/HealthStatusCard";
import { AdminCharts } from "@/features/painel-admin/dashboard/components/AdminCharts";

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <PageHeader>
                <PageHeaderTitle>Admin Dashboard</PageHeaderTitle>
                <PageHeaderDescription>Visão geral da plataforma InsightAI.</PageHeaderDescription>
            </PageHeader>
            <AdminOverview />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                 <div className="lg:col-span-2">
                    <AdminCharts />
                 </div>
                 <div>
                    <HealthStatusCard />
                 </div>
            </div>
        </div>
    );
}
