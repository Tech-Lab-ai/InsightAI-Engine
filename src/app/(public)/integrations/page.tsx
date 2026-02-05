import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { integrationsByCategory } from "@/components/settings/integrations/integrations-data";
import { CheckCircle, ArrowRight, GitBranch, MessageSquare, BarChart, Code, Briefcase, Puzzle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const categoryIcons = {
    "Comunicação": MessageSquare,
    "Gestão & Projetos": GitBranch,
    "Desenvolvimento": Code,
    "Dados & BI": BarChart,
    "ERP / Financeiro": Briefcase,
    "Automação": Puzzle
};

export default function IntegrationsPage() {
    return (
        <div className="flex flex-col">
            <HeroSection />
            <HowItWorksSection />
            <CategoriesSection />
            <BenefitsSection />
            <AvailableIntegrationsSection />
            <CtaSection />
        </div>
    );
}

function HeroSection() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'integrations-banner');
    return (
        <section className="relative py-16 md:py-24 bg-card text-center overflow-hidden">
             {heroImage && (
                    <div className="absolute inset-0">
                        <Image
                            src={heroImage.imageUrl}
                            alt={heroImage.description}
                            fill
                            data-ai-hint={heroImage.imageHint}
                            className="object-cover opacity-10"
                        />
                         <div className="absolute inset-0 bg-background/80" />
                    </div>
                )}
            <div className="container relative mx-auto px-6">
                <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl font-headline">
                    Conecte seus sistemas. Multiplique resultados.
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
                    As integrações ampliam o poder da plataforma, automatizando comunicação, dados, projetos e finanças.
                </p>
                <div className="mt-8">
                     <Button size="lg" asChild>
                        <a href="#available-integrations">Ver integrações disponíveis</a>
                    </Button>
                </div>
            </div>
        </section>
    );
}

function HowItWorksSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl font-headline">
                        Como as integrações funcionam
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        As integrações não substituem a plataforma, elas expandem suas capacidades. O InsightAI funciona perfeitamente de forma autônoma, mas se conecta às ferramentas que sua empresa já utiliza para criar um ecossistema de automação inteligente e centralizado.
                    </p>
                     <p className="mt-4 text-sm text-muted-foreground italic">
                        Durante demonstrações, as integrações podem operar em modo visual para ilustrar seu potencial.
                    </p>
                </div>
            </div>
        </section>
    );
}

function CategoriesSection() {
    return (
         <section className="py-16 md:py-24 bg-card">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                     <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl font-headline">
                        Um Hub Central para sua Operação
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Conecte todas as pontas da sua operação para um fluxo de trabalho unificado e mais inteligente.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {Object.entries(categoryIcons).map(([category, Icon]) => (
                        <Card key={category} className="bg-background/50">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <Icon className="h-6 w-6 text-primary" />
                                    <span>{category}</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Exemplo de benefício prático para a categoria {category.toLowerCase()}.
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

const benefits = [
    "Menos tarefas manuais e mais tempo para estratégia",
    "Visibilidade completa dos seus processos em um só lugar",
    "Decisões mais rápidas e bem-informadas com dados conectados",
    "Automação de ponta a ponta, desde a comunicação até a análise",
    "Redução de erros operacionais e aumento da conformidade"
];

function BenefitsSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl font-headline">
                        Benefícios Práticos e Imediatos
                    </h2>
                     <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Veja como as integrações podem transformar a eficiência da sua equipe.
                    </p>
                </div>
                <div className="max-w-2xl mx-auto">
                    <ul className="space-y-4">
                        {benefits.map((benefit, index) => (
                             <li key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg">
                                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                <span className="text-muted-foreground">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

function AvailableIntegrationsSection() {
    return (
        <section id="available-integrations" className="py-16 md:py-24 bg-card">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                     <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl font-headline">
                        Integrações Disponíveis
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Um ecossistema crescente de conexões para potencializar sua operação.
                    </p>
                </div>
                <div className="space-y-12">
                    {integrationsByCategory.map(category => (
                        <div key={category.title}>
                             <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                                {React.createElement(categoryIcons[category.title as keyof typeof categoryIcons] || GitBranch, { className: "h-6 w-6 text-primary" })}
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                                {category.integrations.map(integration => (
                                    <div key={integration.name} className="flex flex-col items-center text-center gap-3">
                                        <div className="flex items-center justify-center h-16 w-16 bg-background rounded-lg shadow-md">
                                             <integration.icon className="h-8 w-8 text-muted-foreground" />
                                        </div>
                                        <span className="text-sm font-medium">{integration.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                 <p className="mt-12 text-center text-sm text-muted-foreground">
                    As integrações podem ser ativadas conforme a necessidade da sua empresa, garantindo flexibilidade e controle.
                </p>
            </div>
        </section>
    );
}

function CtaSection() {
    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl font-headline">
                    Pronto para conectar seus sistemas e escalar sua operação?
                </h2>
                <div className="mt-8 flex justify-center gap-4">
                    <Button size="lg" asChild>
                        <Link href="/login">Criar Conta</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                         <Link href="/contato">Falar com um especialista</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}