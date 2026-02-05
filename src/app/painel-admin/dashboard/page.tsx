import { AdminOverview } from "@/features/painel-admin/dashboard/components/AdminOverview";
import { HealthStatusCard } from "@/features/painel-admin/dashboard/components/HealthStatusCard";
import { AdminCharts } from "@/features/painel-admin/dashboard/components/AdminCharts";

export default function DashboardPage() {
    return (
        <div className="flex h-full flex-col gap-8">
            <AdminOverview />
            <div className="grid min-h-0 flex-1 grid-cols-1 gap-8 lg:grid-cols-3">
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
