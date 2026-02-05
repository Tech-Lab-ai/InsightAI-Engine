'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GlobalIntegration } from '../../types';
import { AdminIntegrationActions } from "./AdminIntegrationActions";

type AdminIntegrationCardProps = {
    integration: GlobalIntegration;
};

const statusMap: Record<GlobalIntegration['status'], { text: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
    'Ativa': { text: 'Ativa', variant: 'default' },
    'Simulada': { text: 'Simulada', variant: 'secondary' },
    'Desativada': { text: 'Desativada', variant: 'destructive' },
    'Roadmap': { text: 'Roadmap', variant: 'outline' },
};

export function AdminIntegrationCard({ integration }: AdminIntegrationCardProps) {
    const statusInfo = statusMap[integration.status];

    return (
        <Card className="flex flex-col">
            <CardHeader>
                 <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center h-12 w-12 bg-muted rounded-lg flex-shrink-0">
                            <integration.icon className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div>
                            <CardTitle>{integration.name}</CardTitle>
                            <CardDescription>{integration.category}</CardDescription>
                        </div>
                    </div>
                     <AdminIntegrationActions integrationId={integration.id} />
                </div>
            </CardHeader>
            <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">{integration.description}</p>
                 <div className="mt-4">
                    <h4 className="text-xs font-semibold mb-2">Disponível nos planos:</h4>
                    <div className="flex flex-wrap gap-1">
                        {integration.availablePlans.map(plan => (
                            <Badge key={plan} variant="outline">{plan}</Badge>
                        ))}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center text-xs">
                <Badge variant={statusInfo.variant}>{statusInfo.text}</Badge>
                <span className="text-muted-foreground">Atualizado em: {integration.lastUpdated}</span>
            </CardFooter>
        </Card>
    );
}
