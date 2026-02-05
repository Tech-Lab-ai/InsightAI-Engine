import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, Building } from "lucide-react";

export default function ContatoPage() {
    return (
        <>
            <section className="py-16 md:py-24 text-center bg-card">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl font-headline">
                        Fale Conosco
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
                        Tem alguma dúvida ou quer ver o InsightAI em ação? Nossa equipe está pronta para ajudar.
                    </p>
                </div>
            </section>
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-12 gap-16">
                        <div className="md:col-span-7">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Envie uma mensagem</CardTitle>
                                    <CardDescription>Preencha o formulário e entraremos em contato em breve.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="name">Nome</label>
                                                <Input id="name" placeholder="Seu nome" />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email">Email</label>
                                                <Input id="email" type="email" placeholder="seu.email@empresa.com" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="subject">Assunto</label>
                                            <Input id="subject" placeholder="Assunto da sua mensagem" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="message">Mensagem</label>
                                            <Textarea id="message" placeholder="Como podemos ajudar?" rows={5} />
                                        </div>
                                        <Button type="submit" className="w-full">Enviar Mensagem</Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="md:col-span-5">
                            <h2 className="text-2xl font-bold mb-4 font-headline">Informações de Contato</h2>
                            <p className="text-muted-foreground mb-8">
                                Prefere outro método? Aqui estão nossas informações de contato.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex items-center justify-center h-12 w-12 bg-primary/10 text-primary rounded-lg flex-shrink-0">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <p className="text-muted-foreground">Vendas: <a href="mailto:vendas@insightai.com" className="text-primary hover:underline">vendas@insightai.com</a></p>
                                        <p className="text-muted-foreground">Suporte: <a href="mailto:suporte@insightai.com" className="text-primary hover:underline">suporte@insightai.com</a></p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex items-center justify-center h-12 w-12 bg-primary/10 text-primary rounded-lg flex-shrink-0">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Telefone</h3>
                                        <p className="text-muted-foreground">+55 (11) 4000-0000</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex items-center justify-center h-12 w-12 bg-primary/10 text-primary rounded-lg flex-shrink-0">
                                        <Building className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Escritório</h3>
                                        <p className="text-muted-foreground">Av. Principal, 123, Sala 456<br />São Paulo, SP - Brasil</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
