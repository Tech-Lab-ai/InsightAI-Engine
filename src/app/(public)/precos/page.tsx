import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Básico",
    price: "R$ 17,99",
    priceSuffix: "/mês",
    description: "Para indivíduos e pequenas equipes que estão começando.",
    features: [
      "Chat com IA",
      "Até 500 documentos/mês",
      "Workflows básicos (até 3)",
      "Até 2 usuários",
      "Suporte via e-mail",
    ],
    cta: "Falar com um especialista",
    ctaLink: "/contato",
  },
  {
    name: "Starter",
    price: "R$ 49",
    priceSuffix: "/mês",
    description: "Para startups e equipes que precisam de mais capacidade.",
    features: [
      "Tudo do Básico, e mais:",
      "Até 1.000 documentos/mês",
      "Workflows (até 5)",
      "Relatórios completos",
      "Até 5 usuários",
    ],
    cta: "Falar com um especialista",
    ctaLink: "/contato",
  },
  {
    name: "Pro",
    price: "R$ 149",
    priceSuffix: "/mês",
    description: "Para empresas que precisam de colaboração e poder total.",
    features: [
      "Tudo do Starter, e mais:",
      "Documentos ilimitados",
      "Workflows ilimitados",
      "Auditoria completa",
      "Até 20 usuários",
      "Suporte prioritário",
    ],
    cta: "Falar com um especialista",
    ctaLink: "/contato",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Customizado",
    priceSuffix: "",
    description: "Para grandes organizações com requisitos de segurança e escala.",
    features: [
      "Tudo do Pro, e mais:",
      "Compliance & Governança",
      "SLA Dedicado e suporte 24/7",
      "Integrações Premium",
      "Gerente de Contas dedicado",
    ],
    cta: "Falar com Vendas",
    ctaLink: "/contato",
  },
];

export default function PrecosPage() {
  return (
    <>
      <section className="py-16 md:py-24 text-center bg-card">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl font-headline">
            Planos flexíveis para cada etapa do seu negócio
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
            Escolha o plano que melhor se adapta às suas necessidades. Sem surpresas, com total escalabilidade.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier) => (
              <Card key={tier.name} className={`flex flex-col ${tier.popular ? 'border-primary ring-2 ring-primary' : ''}`}>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{tier.name}</span>
                    {tier.popular && <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">MAIS POPULAR</span>}
                  </CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    {tier.priceSuffix && <span className="text-muted-foreground">{tier.priceSuffix}</span>}
                  </div>
                  <ul className="space-y-4">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={tier.popular ? "default" : "outline"} asChild>
                    <Link href={tier.ctaLink}>{tier.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
