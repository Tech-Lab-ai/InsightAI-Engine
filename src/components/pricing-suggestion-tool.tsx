'use client';

import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect } from 'react';

import { suggestPricingTierAction } from '@/app/(public)/precos/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Badge } from './ui/badge';
import { Bot } from 'lucide-react';

const formSchema = z.object({
  documentCount: z.coerce.number().min(1, 'Pelo menos 1 documento'),
  teamSize: z.coerce.number().min(1, 'Pelo menos 1 membro na equipe'),
  features: z.array(z.string()).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const availableFeatures = [
    { id: 'chat-based document processing', label: 'Chat com Documentos' },
    { id: 'specialized agents', label: 'Agentes Especializados' },
    { id: 'intelligent workflows', label: 'Workflows Inteligentes' },
    { id: 'audit and governance', label: 'Auditoria e Governança' },
];

const initialState = {
  data: null,
  error: null,
};

export default function PricingSuggestionTool() {
  const [state, formAction] = useFormState(suggestPricingTierAction, initialState);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      documentCount: 500,
      teamSize: 5,
      features: [],
    },
  });

  useEffect(() => {
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Erro na Sugestão',
        description: state.error,
      });
    }
  }, [state.error, toast]);

  const tierColor = (tier?: string) => {
    switch(tier) {
        case 'Starter': return 'bg-blue-100 text-blue-800';
        case 'Business': return 'bg-purple-100 text-purple-800';
        case 'Enterprise': return 'bg-gray-800 text-white';
        default: return 'bg-gray-100 text-gray-800';
    }
  }

  return (
    <>
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center gap-2 mb-2">
            <Bot className="w-8 h-8 text-primary" />
            <CardTitle className="text-3xl font-headline">Não sabe qual plano escolher?</CardTitle>
          </div>
          <CardDescription className="text-lg">
            Deixe nossa IA recomendar o plano perfeito para suas necessidades.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form action={formAction} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="documentCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Documentos por Mês</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Ex: 1000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="teamSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tamanho da Equipe</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Ex: 10" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="features"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base">Recursos Essenciais</FormLabel>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {availableFeatures.map((item) => (
                        <FormField
                            key={item.id}
                            control={form.control}
                            name="features"
                            render={({ field }) => {
                            return (
                                <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                <FormControl>
                                    <Checkbox
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                            return checked
                                            ? field.onChange([...(field.value || []), item.id])
                                            : field.onChange(
                                                field.value?.filter(
                                                    (value) => value !== item.id
                                                )
                                                )
                                        }}
                                    />
                                </FormControl>
                                <FormLabel className="font-normal">
                                    {item.label}
                                </FormLabel>
                                </FormItem>
                            )
                            }}
                        />
                        ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" size="lg">Sugerir Plano</Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Dialog open={!!state.data}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-headline">Plano Recomendado</DialogTitle>
            <DialogDescription>
              Com base nas suas informações, esta é nossa sugestão.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="text-center">
                <Badge className={`text-2xl font-bold px-6 py-2 rounded-full ${tierColor(state.data?.suggestedTier)}`}>
                    {state.data?.suggestedTier}
                </Badge>
                <p className="mt-4 text-muted-foreground">{state.data?.reasoning}</p>
            </div>
          </div>
          <DialogFooter>
            <Button asChild onClick={() => (state.data = null)}>
                <a href="#precos">Ver Detalhes do Plano</a>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
