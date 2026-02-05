'use client';
import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, File } from "lucide-react";

type SupportFormProps = {
    isTicketActive: boolean;
    onOpenTicket: (subject: string, message: string) => void;
    initialTopic?: string;
};

export function SupportForm({ isTicketActive, onOpenTicket, initialTopic = 'technical' }: SupportFormProps) {
    const [subject, setSubject] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [topic, setTopic] = React.useState(initialTopic);

    React.useEffect(() => {
        setTopic(initialTopic);
        if(initialTopic === 'commercial') {
            setSubject('Contato sobre Plano Enterprise');
        } else {
            setSubject('');
        }
    }, [initialTopic]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onOpenTicket(subject, message);
        setSubject('');
        setMessage('');
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Abrir Novo Ticket</CardTitle>
                <CardDescription>
                    Descreva seu problema ou dúvida e nosso time responderá em breve.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="topic">Tipo de Contato</label>
                            <Select value={topic} onValueChange={setTopic} disabled={isTicketActive}>
                                <SelectTrigger id="topic">
                                    <SelectValue placeholder="Selecione o tipo de contato" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="technical">Suporte Técnico</SelectItem>
                                    <SelectItem value="financial">Financeiro</SelectItem>
                                    <SelectItem value="commercial">Comercial / Vendas</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject">Assunto</label>
                            <Input 
                                id="subject"
                                placeholder="Resumo do seu problema" 
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                disabled={isTicketActive}
                            />
                        </div>
                    </div>
                     <div className="space-y-2">
                        <label htmlFor="message">Mensagem</label>
                        <Textarea 
                            id="message" 
                            placeholder="Descreva detalhadamente sua solicitação..." 
                            rows={6}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            disabled={isTicketActive}
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="attachment">Anexo (opcional)</label>
                        <div className="flex items-center gap-2">
                             <Input id="attachment" type="file" className="hidden" disabled={isTicketActive} />
                             <Button type="button" variant="outline" onClick={() => document.getElementById('attachment')?.click()} disabled={isTicketActive}>
                                <File className="mr-2 h-4 w-4" />
                                 Escolher Arquivo
                            </Button>
                            <p className="text-sm text-muted-foreground">Nenhum arquivo selecionado.</p>
                        </div>
                    </div>

                    <Alert>
                        <Info className="h-4 w-4" />
                        <AlertTitle>Tempo de Resposta</AlertTitle>
                        <AlertDescription>
                            Nosso tempo de resposta padrão é de até 24 horas úteis. Para planos Enterprise, o SLA é de 4 horas.
                        </AlertDescription>
                    </Alert>

                     <div className="flex justify-end">
                        <Button type="submit" disabled={isTicketActive || !subject || !message}>
                            Abrir Ticket
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
