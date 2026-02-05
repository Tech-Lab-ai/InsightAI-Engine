'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function AdminProfilePreferences() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Preferências</CardTitle>
                <CardDescription>Ajuste suas preferências pessoais.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label>Idioma</Label>
                    <Select defaultValue="pt-br">
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="pt-br">Português (Brasil)</SelectItem>
                            <SelectItem value="en-us">English</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div className="space-y-2">
                    <Label>Tema</Label>
                    <Select defaultValue="system">
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Claro</SelectItem>
                            <SelectItem value="dark">Escuro</SelectItem>
                            <SelectItem value="system">Sistema</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div className="flex justify-end pt-2">
                    <Button>Salvar</Button>
                </div>
            </CardContent>
        </Card>
    );
}
