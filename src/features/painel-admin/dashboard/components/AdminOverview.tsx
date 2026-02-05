import { Building, Users, DollarSign, BrainCircuit } from "lucide-react";
import { AdminMetricsCard } from "./AdminMetricsCard";

const stats = [
    { title: "Empresas Ativas", value: "89", icon: Building, description: "+12.5% no último mês" },
    { title: "Usuários Totais", value: "1,420", icon: Users, description: "+8.1% no último mês" },
    { title: "MRR Estimado", value: "R$ 47.3k", icon: DollarSign, description: "+15.2% no último mês" },
    { title: "Uso de IA (Tokens)", value: "2.8M", icon: BrainCircuit, description: "+35% no último mês" },
];

export function AdminOverview() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
                <AdminMetricsCard
                    key={stat.title}
                    title={stat.title}
                    value={stat.value}
                    icon={stat.icon}
                    description={stat.description}
                />
            ))}
        </div>
    );
}
