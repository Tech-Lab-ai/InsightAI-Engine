import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket } from "lucide-react";

export function CurrentPlanCard() {
    return (
        <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="md:flex-row md:items-center md:justify-between">
                <div>
                    <CardTitle className="flex items-center gap-2">
                        Seu Plano Atual: <Badge variant="outline" className="text-base border-primary text-primary">Trial</Badge>
                    </CardTitle>
                    <CardDescription className="mt-2">
                        Você está no período de teste de 15 dias com acesso a todos os recursos.
                    </CardDescription>
                </div>
                <div className="mt-4 md:mt-0">
                    <Button>
                        <Rocket className="mr-2 h-4 w-4" />
                        Fazer Upgrade Agora
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="w-full bg-border rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">7 de 15 dias restantes.</p>
            </CardContent>
        </Card>
    );
}
