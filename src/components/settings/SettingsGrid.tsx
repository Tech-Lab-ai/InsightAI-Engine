import { SettingsCard } from "@/components/settings/SettingsCard";
import { Building, Users, Shield, Zap, CreditCard, LifeBuoy } from "lucide-react";

const settingsCategories = [
    {
        href: "/settings/company",
        icon: Building,
        title: "Empresa",
        description: "Gerencie os dados e configurações da sua organização.",
    },
    {
        href: "/users",
        icon: Users,
        title: "Usuários & Acessos",
        description: "Controle quem pode acessar e o que pode fazer.",
    },
    {
        href: "/settings/security",
        icon: Shield,
        title: "Segurança",
        description: "Ajuste as políticas de autenticação e segurança.",
    },
    {
        href: "/settings/integrations",
        icon: Zap,
        title: "Integrações",
        description: "Conecte o InsightAI com outras ferramentas.",
    },
    {
        href: "/billing",
        icon: CreditCard,
        title: "Plano & Faturamento",
        description: "Gerencie sua assinatura, pagamentos e faturas.",
    },
    {
        href: "/support",
        icon: LifeBuoy,
        title: "Suporte",
        description: "Fale com nossa equipe e tire suas dúvidas.",
    },
];


export function SettingsGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {settingsCategories.map((category) => (
                <SettingsCard 
                    key={category.href}
                    href={category.href}
                    icon={category.icon}
                    title={category.title}
                    description={category.description}
                />
            ))}
        </div>
    );
}
