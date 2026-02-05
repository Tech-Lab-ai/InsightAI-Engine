'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, Power, PowerOff } from 'lucide-react';
import { AdminFeatureFlagConfirmAction } from '../../feature-flags/components/AdminFeatureFlagConfirmAction';
import { SystemMode } from '../../types';

type AdminSystemModeProps = {
    currentMode: SystemMode;
};

const modeMap: Record<SystemMode, { text: string; variant: "default" | "destructive" | "outline", className: string }> = {
    'NORMAL': { text: "Operação Normal", variant: "default", className: "bg-green-500/10 text-green-700 border-green-500/50" },
    'MAINTENANCE': { text: "Em Manutenção", variant: "outline", className: "bg-amber-500/10 text-amber-700 border-amber-500/50" },
    'EMERGENCY': { text: "Emergência", variant: "destructive", className: "" },
};

export function AdminSystemMode({ currentMode }: AdminSystemModeProps) {
    const mode = modeMap[currentMode];
    return (
        <Card>
            <CardHeader>
                <CardTitle>Modo do Sistema</CardTitle>
                <CardDescription>Controle o estado operacional de toda a plataforma.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                    <span className="text-sm font-medium">Status Atual:</span>
                    <Badge variant={mode.variant} className={mode.className}>{mode.text}</Badge>
                </div>
                {currentMode === 'MAINTENANCE' && (
                    <Alert>
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>Sistema em Manutenção</AlertTitle>
                        <AlertDescription>
                            Enquanto estiver em modo de manutenção, novos logins podem ser bloqueados e jobs em background podem ser pausados.
                        </AlertDescription>
                    </Alert>
                )}
                 <div className="flex gap-2">
                    <AdminFeatureFlagConfirmAction
                        title="Ativar Modo Manutenção"
                        description="Tem certeza que deseja colocar o sistema em modo de manutenção? Isso pode impactar a experiência de todos os usuários."
                        variant="destructive"
                    >
                         <Button variant="destructive" disabled={currentMode === 'MAINTENANCE'}>
                            <PowerOff className="mr-2 h-4 w-4" />
                            Ativar Modo Manutenção
                        </Button>
                    </AdminFeatureFlagConfirmAction>
                    <AdminFeatureFlagConfirmAction
                        title="Retomar Operação Normal"
                        description="Tem certeza que deseja retornar o sistema à operação normal?"
                    >
                        <Button variant="outline" disabled={currentMode === 'NORMAL'}>
                            <Power className="mr-2 h-4 w-4" />
                            Retomar Operação Normal
                        </Button>
                     </AdminFeatureFlagConfirmAction>
                </div>
            </CardContent>
        </Card>
    );
}
