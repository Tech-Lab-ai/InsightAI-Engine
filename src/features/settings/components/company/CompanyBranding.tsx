'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";

export function CompanyBranding() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Branding</CardTitle>
                <CardDescription>Personalize a aparência da plataforma com a marca da sua empresa.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <label>Logo da Empresa</label>
                    <div className="flex items-center gap-4">
                        <div className="w-20 h-20 bg-muted rounded-md flex items-center justify-center">
                            <span className="text-xs text-muted-foreground">Logo</span>
                        </div>
                        <Button type="button" variant="outline">
                            <Upload className="mr-2 h-4 w-4" />
                            Fazer Upload
                        </Button>
                    </div>
                     <p className="text-sm text-muted-foreground">
                        Recomendado: 256x256px, PNG ou JPG.
                    </p>
                </div>
                <div className="space-y-2">
                    <label htmlFor="primary-color">Cor Primária</label>
                    <div className="flex items-center gap-2">
                        <Input id="primary-color" type="color" defaultValue="#00C2FF" className="w-12 h-10 p-1" />
                        <Input type="text" defaultValue="#00C2FF" className="w-32" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Esta cor será usada em botões e links.
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}
