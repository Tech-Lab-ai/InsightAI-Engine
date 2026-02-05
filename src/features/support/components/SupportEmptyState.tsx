import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export function SupportEmptyState() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    Nenhum ticket ativo
                </CardTitle>
                <CardDescription>
                    Você não possui nenhum ticket de suporte em andamento.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">
                    Se precisar de ajuda, preencha o formulário abaixo para abrir um novo ticket.
                </p>
            </CardContent>
        </Card>
    );
}
