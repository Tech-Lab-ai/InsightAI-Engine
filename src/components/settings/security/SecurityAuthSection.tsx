'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export function SecurityAuthSection() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Autenticação e Sessão</CardTitle>
                <CardDescription>
                    Configure como os usuários acessam e permanecem conectados.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                 <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <Label className="text-base">MFA Obrigatório para Admins</Label>
                        <p className="text-sm text-muted-foreground">
                            Exigir autenticação multi-fator para todos os administradores.
                        </p>
                    </div>
                    <Switch defaultChecked />
                </div>

                <div className="space-y-2">
                    <Label>Tempo de expiração da sessão</Label>
                    <Select defaultValue="8h">
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione um tempo" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1h">1 hora</SelectItem>
                            <SelectItem value="8h">8 horas</SelectItem>
                            <SelectItem value="24h">24 horas</SelectItem>
                            <SelectItem value="7d">7 dias</SelectItem>
                        </SelectContent>
                    </Select>
                     <p className="text-sm text-muted-foreground">
                        Após este período, o usuário precisará fazer login novamente.
                    </p>
                </div>

                 <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <Label className="text-base">Logout por Inatividade</Label>
                         <p className="text-sm text-muted-foreground">
                            Desconectar usuários inativos após 30 minutos.
                        </p>
                    </div>
                    <Switch />
                </div>
                <div className="flex justify-end">
                    <Button>Salvar</Button>
                </div>
            </CardContent>
        </Card>
    );
}
