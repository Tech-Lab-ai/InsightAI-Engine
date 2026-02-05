import { PageHeader, PageHeaderTitle } from "@/components/page-header";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export default function ChatPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <PageHeader>
        <PageHeaderTitle>Chat IA</PageHeaderTitle>
      </PageHeader>
      <div className="flex-1 overflow-hidden">
        <Card className="w-full h-full flex flex-col">
            <CardHeader>
              <CardTitle>Sessão de Chat Ativa</CardTitle>
              <CardDescription>Converse com seus documentos utilizando o agente selecionado.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto p-4 border-t">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarFallback>IA</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                    <p className="font-semibold text-foreground">Agente Jurídico</p>
                    <p className="text-muted-foreground">Olá! Sou o agente jurídico do InsightAI. Em que posso ajudar com seus documentos legais hoje?</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 justify-end">
                    <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-[80%]">
                        <p className="font-semibold">Você</p>
                        <p>Quais são as cláusulas de rescisão no contrato 'Contrato-2024-Acme.pdf'?</p>
                    </div>
                    <Avatar>
                        <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarFallback>IA</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                    <p className="font-semibold text-foreground">Agente Jurídico</p>
                    <p>Analisando o documento 'Contrato-2024-Acme.pdf'... As cláusulas de rescisão estão na seção 8, itens 8.1 a 8.4. A cláusula 8.2 especifica uma multa de 20% sobre o valor remanescente do contrato em caso de rescisão imotivada.</p>
                    <div className="mt-2 text-xs text-muted-foreground/80 border-t border-border pt-2">
                        Fonte: Contrato-2024-Acme.pdf (p. 12)
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <div className="border-t p-4">
              <div className="flex items-center gap-2">
                <Input placeholder="Pergunte algo sobre seus documentos..." />
                <Button>
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Enviar</span>
                </Button>
              </div>
            </div>
          </Card>
      </div>
    </div>
  );
}
