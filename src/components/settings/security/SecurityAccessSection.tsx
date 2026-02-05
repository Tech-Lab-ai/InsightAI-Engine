'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export function SecurityAccessSection() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Controle de Acesso</CardTitle>
                <CardDescription>
                    Defina políticas de acesso e restrições para a organização.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label>Política de Senha</Label>
                    <Input value="Mínimo 12 caracteres, com letras, números e símbolos." readOnly disabled />
                    <p className="text-sm text-muted-foreground">
                        Esta política é definida pelo sistema e não pode ser alterada.
                    </p>
                </div>

                <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <Label className="text-base">Restringir Convites</Label>
                        <p className="text-sm text-muted-foreground">
                            Permitir convites apenas para domínios de email aprovados.
                        </p>
                    </div>
                    <Switch />
                </div>

                <div className="space-y-2">
                    <Label>Restrição de Acesso por IP</Label>
                    <Input placeholder="Ex: 200.100.50.0/24 (deixe em branco para permitir todos)" />
                     <p className="text-sm text-muted-foreground">
                        Permita o acesso à plataforma apenas a partir de endereços IP específicos.
                    </p>
                </div>
                 <div className="flex justify-end">
                    <Button>Salvar</Button>
                </div>
            </CardContent>
        </Card>
    );
}
