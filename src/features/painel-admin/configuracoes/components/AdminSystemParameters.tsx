'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SystemParameter } from '../../types';

type AdminSystemParametersProps = {
    parameters: SystemParameter[];
};

export function AdminSystemParameters({ parameters }: AdminSystemParametersProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Parâmetros Globais do Sistema</CardTitle>
                <CardDescription>Valores de configuração que afetam todo o sistema. Alterações aqui são críticas.</CardDescription>
            </CardHeader>
            <CardContent>
                <dl className="divide-y divide-border">
                    {parameters.map(param => (
                        <div key={param.key} className="py-3 flex justify-between items-center text-sm">
                            <dt className="font-medium">{param.name}</dt>
                            <dd className="text-muted-foreground font-mono">{param.value}</dd>
                        </div>
                    ))}
                </dl>
            </CardContent>
        </Card>
    );
}
