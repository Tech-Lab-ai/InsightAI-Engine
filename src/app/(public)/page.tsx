import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2, BrainCircuit, ShieldCheck, Zap, ArrowRight, Gauge, Users, Bot } from "lucide-react";

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
const stepImages = [
  PlaceHolderImages.find(img => img.id === 'step-1'),
  PlaceHolderImages.find(img => img.id === 'step-2'),
  PlaceHolderImages.find(img => img.id === 'step-3'),
  PlaceHolderImages.find(img => img.id === 'step-4'),
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <BenefitsSection />
      <SecuritySection />
      <FinalCTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6 text-center">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl font-headline">
            Transforme documentos em inteligência confiável, com segurança empresarial.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
            O InsightAI extrai informações precisas e acionáveis dos seus dados não estruturados, impulsionando decisões mais rápidas e seguras.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/login">Acessar Plataforma</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contato">Solicitar Demonstração</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl font-headline">
            O desafio dos dados não estruturados
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Empresas perdem tempo e dinheiro com informações presas em contratos, relatórios e e-mails. A extração manual é lenta, cara e propensa a erros.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="text-primary" />
                Ineficiência
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Processos manuais que consomem horas de trabalho e atrasam projetos críticos.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="text-primary" />
                Riscos de Segurança
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Dados sensíveis expostos a falhas humanas e falta de controle de acesso adequado.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BrainCircuit className="text-primary" />
                Perda de Inteligência
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Insights valiosos permanecem ocultos, impedindo a tomada de decisões estratégicas.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const howItWorksSteps = [
    {
      title: "1. Conecte suas fontes",
      description: "Faça upload de documentos ou integre com sistemas existentes de forma segura.",
      image: stepImages[0]
    },
    {
      title: "2. IA em Ação",
      description: "Nossa IA processa, classifica e extrai as informações mais relevantes para o seu negócio.",
      image: stepImages[1]
    },
    {
      title: "3. Obtenha Respostas",
      description: "Converse com seus documentos, execute análises e receba respostas precisas em segundos.",
      image: stepImages[2]
    },
    {
      title: "4. Gere Valor",
      description: "Use os insights para otimizar operações, mitigar riscos e acelerar o crescimento.",
      image: stepImages[3]
    },
];

function HowItWorksSection() {
    return (
        <section className="py-16 md:py-24 bg-card">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl font-headline">
                        Como funciona
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Em quatro passos simples, transformamos seus documentos em ativos estratégicos.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {howItWorksSteps.map((step, index) => (
                        <Card key={index} className="flex flex-col">
                            {step.image && (
                                <div className="aspect-video overflow-hidden rounded-t-lg">
                                    <Image
                                        src={step.image.imageUrl}
                                        alt={step.image.description}
                                        width={600}
                                        height={400}
                                        data-ai-hint={step.image.imageHint}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            )}
                            <CardHeader>
                                <CardTitle>{step.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground">{step.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

const benefits = [
  { icon: Gauge, title: "Acelere a Produtividade", description: "Reduza o tempo de análise de documentos de dias para minutos." },
  { icon: Users, title: "Capacite sua Equipe", description: "Forneça acesso rápido e fácil a informações cruciais para todos os departamentos." },
  { icon: ShieldCheck, title: "Reduza Riscos", description: "Garanta conformidade e segurança com controle total sobre seus dados." },
  { icon: Bot, title: "Decisões Inteligentes", description: "Baseie suas estratégias em dados precisos e insights gerados por IA." },
];

function BenefitsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl font-headline">
            Benefícios para sua empresa
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            O InsightAI não é apenas uma ferramenta, é um catalisador para a transformação digital do seu negócio.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center h-16 w-16 mx-auto bg-primary/10 text-primary rounded-full">
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-bold">{benefit.title}</h3>
              <p className="mt-2 text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SecuritySection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl font-headline">
            Segurança & Confiança em Nível Enterprise
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Sua tranquilidade é nossa prioridade. Construímos o InsightAI com os mais altos padrões de segurança e governança de dados.
          </p>
          <ul className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-primary h-5 w-5" />
              <span>Controle de Acesso Granular</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-primary h-5 w-5" />
              <span>Isolamento de Dados por Cliente</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-primary h-5 w-5" />
              <span>Trilhas de Auditoria Completas</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-primary h-5 w-5" />
              <span>Conformidade com LGPD/GDPR</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-primary h-5 w-5" />
              <span>Criptografia de ponta-a-ponta</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="text-primary h-5 w-5" />
              <span>IA Responsável e sem alucinações</span>
            </li>
          </ul>
          <div className="mt-10">
            <Button variant="link" asChild>
              <Link href="/seguranca">
                Saiba mais sobre nossa segurança <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl font-headline">
          Pronto para desbloquear o valor dos seus documentos?
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
          Agende uma demonstração personalizada e veja como o InsightAI pode revolucionar a forma como sua empresa utiliza informações.
        </p>
        <div className="mt-8 flex justify-center">
          <Button size="lg" asChild>
            <Link href="/contato">Falar com um especialista</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
