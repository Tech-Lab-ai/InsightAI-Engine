import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { DashboardOverview } from "@/features/painel-admin/dashboard/components/DashboardOverview";
import { ActivityCard } from "@/features/painel-admin/dashboard/components/ActivityCard";
import { ChartsSection } from "@/features/painel-admin/dashboard/components/ChartsSection";

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <PageHeader>
                <PageHeaderTitle>Dashboard</PageHeaderTitle>
                <PageHeaderDescription>Visão geral da sua atividade na plataforma InsightAI.</PageHeaderDescription>
            </PageHeader>
            <DashboardOverview />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                 <div className="lg:col-span-2">
                    <ChartsSection />
                 </div>
                 <div>
                    <ActivityCard />
                 </div>
            </div>
        </div>
    );
}
