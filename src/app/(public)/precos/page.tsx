import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";
import PricingSuggestionTool from "@/components/pricing-suggestion-tool";

const tiers = [
  {
    name: "Starter",
    price: "Consulte",
    description: "Para indivíduos e pequenas equipes que estão começando a automatizar.",
    features: [
      "Processamento de até 500 documentos/mês",
      "1 Agente de IA especializado",
      "Suporte via e-mail",
      "Chat com documentos",
    ],
    cta: "Falar com Especialista",
  },
  {
    name: "Business",
    price: "Consulte",
    description: "Para empresas em crescimento que precisam de mais poder e colaboração.",
    features: [
      "Tudo do Starter, e mais:",
      "Processamento de até 5.000 documentos/mês",
      "Até 5 Agentes de IA especializados",
      "Workflows inteligentes básicos",
      "Suporte prioritário",
    ],
    cta: "Falar com Especialista",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Customizado",
    description: "Para grandes organizações com requisitos complexos de segurança e escala.",
    features: [
      "Tudo do Business, e mais:",
      "Volume de documentos ilimitado",
      "Agentes e Workflows ilimitados",
      "Auditoria e Governança avançada",
      "Gerente de conta dedicado e SLA",
    ],
    cta: "Falar com Especialista",
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                  <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6">
            <PricingSuggestionTool />
        </div>
      </section>
    </>
  );
}
