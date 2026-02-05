import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function BillingSummary() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Resumo do Faturamento</CardTitle>
                <CardDescription>Informações sobre sua assinatura atual e próxima fatura.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flow-root">
                    <dl className="-my-4 divide-y divide-border text-sm">
                        <div className="flex items-center justify-between py-4">
                            <dt className="text-muted-foreground">Plano Atual</dt>
                            <dd className="font-medium">Trial</dd>
                        </div>
                         <div className="flex items-center justify-between py-4">
                            <dt className="text-muted-foreground">Valor Mensal</dt>
                            <dd className="font-medium">R$ 0,00</dd>
                        </div>
                        <div className="flex items-center justify-between py-4">
                            <dt className="text-muted-foreground">Próxima Cobrança</dt>
                            <dd className="font-medium">15 de Agosto, 2024</dd>
                        </div>
                         <div className="flex items-center justify-between py-4">
                            <dt className="text-muted-foreground">Método de Pagamento</dt>
                            <dd className="font-medium">Nenhum</dd>
                        </div>
                    </dl>
                </div>
                 <div className="mt-6 flex justify-end">
                    <Button variant="outline">Gerenciar Assinatura</Button>
                </div>
            </CardContent>
        </Card>
    );
}
