import Image from "next/image";
import { CheckCircle2, Lock, FileLock, Eye, Scale, BrainCircuit } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const securityFeatures = [
    {
        icon: Lock,
        title: "Controle de Acesso Robusto",
        description: "Implementamos um sistema de controle de acesso baseado em funções (RBAC) que garante que os usuários só possam ver e interagir com os dados que lhes são permitidos. As permissões podem ser configuradas em níveis granulares, desde o acesso a documentos inteiros até campos específicos."
    },
    {
        icon: FileLock,
        title: "Isolamento de Dados por Empresa",
        description: "Cada cliente opera em um ambiente totalmente isolado. Seus dados são segregados lógica e fisicamente dos dados de outros clientes, eliminando o risco de vazamentos ou acesso cruzado. A segurança da sua informação é estrutural."
    },
    {
        icon: Eye,
        title: "Trilhas de Auditoria Completas",
        description: "Todas as ações realizadas na plataforma, desde o login até a consulta de um documento, são registradas em uma trilha de auditoria imutável. Isso fornece visibilidade total sobre quem acessou o quê e quando, facilitando a conformidade e as investigações internas."
    },
    {
        icon: Scale,
        title: "Pronto para LGPD e Compliance",
        description: "O InsightAI é projetado com a privacidade em mente (Privacy by Design). Ajudamos sua empresa a atender aos requisitos da LGPD, GDPR e outras regulamentações de dados, fornecendo ferramentas para gerenciamento do ciclo de vida dos dados e atendimento aos direitos dos titulares."
    },
    {
        icon: BrainCircuit,
        title: "IA Confiável e sem Alucinação",
        description: "Nossos modelos de IA são projetados para evitar 'alucinações'. Todas as respostas geradas pela plataforma são diretamente rastreáveis a uma fonte específica em seus documentos, garantindo que você possa confiar 100% nas informações e validar sua origem."
    }
];

export default function SegurancaPage() {
    const bannerImage = PlaceHolderImages.find(img => img.id === 'security-banner');

    return (
        <>
            <section className="relative py-16 md:py-24 bg-card text-center">
                {bannerImage && (
                    <div className="absolute inset-0">
                        <Image
                            src={bannerImage.imageUrl}
                            alt={bannerImage.description}
                            fill
                            data-ai-hint={bannerImage.imageHint}
                            className="object-cover opacity-10"
                        />
                         <div className="absolute inset-0 bg-background/80" />
                    </div>
                )}
                <div className="container relative mx-auto px-6">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl font-headline">
                        Segurança e Confiança no Núcleo
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
                        A proteção dos seus dados não é um recurso adicional, é a base sobre a qual o InsightAI é construído.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {securityFeatures.map((feature) => (
                            <Card key={feature.title} className="flex flex-col">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <div className="flex items-center justify-center h-12 w-12 bg-primary/10 text-primary rounded-lg flex-shrink-0">
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle>{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
