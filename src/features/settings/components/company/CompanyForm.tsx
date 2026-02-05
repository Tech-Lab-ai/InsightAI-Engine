'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CompanyBranding } from "./CompanyBranding";

const companyFormSchema = z.object({
  name: z.string().min(2, { message: "O nome da empresa deve ter pelo menos 2 caracteres." }),
  id: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  address: z.string().optional(),
  timezone: z.string(),
  language: z.string(),
});

type CompanyFormValues = z.infer<typeof companyFormSchema>;

const defaultValues: Partial<CompanyFormValues> = {
  name: "InsightAI Corp",
  id: "42.123.456/0001-78",
  email: "contato@insightaicorp.com",
  phone: "+55 (11) 5555-1234",
  address: "Av. Principal, 123, São Paulo, SP",
  timezone: "America/Sao_Paulo",
  language: "pt-br",
};

export function CompanyForm() {
  const { toast } = useToast();

  const form = useForm<CompanyFormValues>({
    resolver: zodResolver(companyFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: CompanyFormValues) {
    toast({
      title: "Configurações da Empresa Salvas",
      description: "As informações da sua organização foram salvas com sucesso (visualmente).",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Informações da Empresa</CardTitle>
            <CardDescription>Detalhes básicos da sua organização.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da Empresa</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome da sua empresa" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CNPJ / ID</FormLabel>
                  <FormControl>
                    <Input {...field} readOnly disabled />
                  </FormControl>
                  <FormDescription>Este identificador não pode ser alterado.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
             <div className="grid md:grid-cols-2 gap-4">
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email Corporativo</FormLabel>
                    <FormControl>
                        <Input type="email" placeholder="contato@suaempresa.com" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Telefone</FormLabel>
                    <FormControl>
                        <Input placeholder="+55 (XX) XXXX-XXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Endereço</FormLabel>
                  <FormControl>
                    <Input placeholder="Endereço completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Preferências Organizacionais</CardTitle>
                <CardDescription>Ajuste o idioma padrão e fuso horário para toda a organização.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                    control={form.control}
                    name="language"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Idioma Padrão</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione um idioma" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                            <SelectItem value="pt-br">Português (Brasil)</SelectItem>
                            <SelectItem value="en-us">English (United States)</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                     <FormField
                    control={form.control}
                    name="timezone"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Fuso Horário</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione um fuso horário" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="America/Sao_Paulo">(GMT-03:00) São Paulo</SelectItem>
                                <SelectItem value="America/New_York">(GMT-04:00) Nova Iorque</SelectItem>
                                <SelectItem value="Europe/London">(GMT+01:00) Londres</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
            </CardContent>
        </Card>
        
        <CompanyBranding />

        <div className="flex justify-end gap-2">
            <Button type="button" variant="outline">Cancelar</Button>
            <Button type="submit">Salvar Alterações</Button>
        </div>
      </form>
    </Form>
  );
}
