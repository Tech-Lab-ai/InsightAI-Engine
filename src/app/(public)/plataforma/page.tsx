import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Bot, MessageSquare, Workflow, ShieldCheck } from "lucide-react";

const features = [
  {
    id: 'feature-chat',
    icon: MessageSquare,
    title: "Chat Baseado em Documentos",
    description: "Converse com seus dados. Faça perguntas em linguagem natural e obtenha respostas instantâneas e precisas, com referências diretas à fonte da informação. Elimine a busca manual e ganhe tempo.",
  },
  {
    id: 'feature-agents',
    icon: Bot,
    title: "Agentes Especializados",
    description: "Configure agentes de IA treinados para tarefas específicas, como análise de contratos, due diligence ou triagem de compliance. Nossos agentes trabalham 24/7 para automatizar seus processos mais complexos.",
  },
  {
    id: 'feature-workflows',
    icon: Workflow,
    title: "Workflows Inteligentes",
    description: "Crie fluxos de trabalho automatizados que integram a extração de dados, análise e ações subsequentes. O InsightAI se conecta aos seus sistemas para levar a automação a um novo nível.",
  },
  {
    id: 'feature-audit',
    icon: ShieldCheck,
    title: "Auditoria e Governança",
    description: "Mantenha o controle total. Com trilhas de auditoria completas, gerenciamento de permissões e dashboards de governança, você garante a conformidade e a segurança das suas informações mais críticas.",
  },
];

export default function PlataformaPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl font-headline">
              A Plataforma InsightAI
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
              Uma solução completa para transformar seus documentos não estruturados em insights acionáveis, com a segurança e governança que sua empresa exige.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 space-y-20">
          {features.map((feature, index) => {
            const image = PlaceHolderImages.find(img => img.id === feature.id);
            const isReversed = index % 2 !== 0;

            return (
              <div key={feature.id} className={`grid md:grid-cols-2 gap-12 items-center`}>
                <div className={`order-2 ${isReversed ? 'md:order-1' : 'md:order-2'}`}>
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={800}
                      height={600}
                      data-ai-hint={image.imageHint}
                      className="rounded-lg shadow-lg"
                    />
                  )}
                </div>
                <div className={`order-1 ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center h-12 w-12 bg-primary/10 text-primary rounded-lg">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground font-headline">{feature.title}</h2>
                  </div>
                  <p className="mt-4 text-lg text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
