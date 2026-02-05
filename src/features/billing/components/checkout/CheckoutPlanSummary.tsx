import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Plan } from "../../types/plan";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Image from "next/image";

type CheckoutPlanSummaryProps = {
    plan: Plan;
};

export function CheckoutPlanSummary({ plan }: CheckoutPlanSummaryProps) {
    return (
        <div>
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Resumo do Pedido</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-muted-foreground">Plano Selecionado</span>
                        <span className="font-bold text-lg">{plan.name}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Valor Mensal</span>
                        <span className="font-bold text-lg">R$ {plan.price},00</span>
                    </div>
                    <Separator className="my-4" />
                    <div className="flex justify-between items-center text-xl font-bold">
                        <span>Total</span>
                        <span>R$ {plan.price},00</span>
                    </div>
                </CardContent>
            </Card>
            <Alert>
                <Image src="/asaas_logo.svg" alt="Asaas Logo" width={24} height={24} />
                <AlertTitle>Pagamento Seguro</AlertTitle>
                <AlertDescription>
                    O pagamento será processado de forma segura através do Asaas, nosso parceiro oficial de pagamentos.
                </AlertDescription>
            </Alert>
        </div>
    );
}
