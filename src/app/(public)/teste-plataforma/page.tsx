import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export default function TestePlataformaPage() {
  return (
    <>
      <section className="py-16 md:py-24 text-center bg-card">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl font-headline">
            Teste a Plataforma InsightAI
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
            Experimente nosso principal recurso: o chat com documentos. Faça uma pergunta sobre um documento simulado.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 flex justify-center">
          <Card className="w-full max-w-3xl">
            <CardHeader>
              <CardTitle>Chat com Documento: "Relatório Anual 2023"</CardTitle>
              <CardDescription>Faça uma pergunta sobre o relatório.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 h-[400px] overflow-y-auto p-4 border rounded-md flex flex-col">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarFallback>IA</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-lg p-3">
                    <p className="font-semibold">InsightAI</p>
                    <p>Olá! Sou o assistente do InsightAI. O que você gostaria de saber sobre o Relatório Anual 2023?</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 justify-end">
                    <div className="bg-primary text-primary-foreground rounded-lg p-3">
                        <p className="font-semibold">Você</p>
                        <p>Qual foi a receita total no último trimestre?</p>
                    </div>
                    <Avatar>
                        <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarFallback>IA</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-lg p-3">
                    <p className="font-semibold">InsightAI</p>
                    <p>A receita total no último trimestre (Q4 2023) foi de R$ 15.2 milhões, um aumento de 12% em relação ao mesmo período do ano anterior. A informação pode ser encontrada na página 5 do relatório.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <Input placeholder="Digite sua pergunta..." />
                <Button>
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Enviar</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
