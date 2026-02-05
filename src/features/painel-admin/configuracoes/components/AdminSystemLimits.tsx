'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlanLimit } from '../../types';

type AdminSystemLimitsProps = {
    planLimits: PlanLimit[];
};

export function AdminSystemLimits({ planLimits }: AdminSystemLimitsProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Limites Padrão por Plano</CardTitle>
                <CardDescription>Valores base para novas empresas criadas em cada plano.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Plano</TableHead>
                            <TableHead className="text-right">Usuários</TableHead>
                            <TableHead className="text-right">Documentos</TableHead>
                            <TableHead className="text-right">Uso de IA (Tokens/Mês)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {planLimits.map((plan) => (
                            <TableRow key={plan.planName}>
                                <TableCell className="font-medium">{plan.planName}</TableCell>
                                <TableCell className="text-right">{plan.users}</TableCell>
                                <TableCell className="text-right">{plan.documents}</TableCell>
                                <TableCell className="text-right">{plan.aiUsage}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
