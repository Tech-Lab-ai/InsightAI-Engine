'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PolicyDocument } from '../../types';

type AdminPoliciesListProps = {
    policies: PolicyDocument[];
};

export function AdminPoliciesList({ policies }: AdminPoliciesListProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Políticas & Governança</CardTitle>
                <CardDescription>Documentos internos que regem a operação e segurança.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                {policies.map(policy => (
                     <div key={policy.id} className="flex items-center justify-between rounded-lg border p-3">
                        <div>
                            <p className="text-sm font-medium">{policy.title}</p>
                            <p className="text-xs text-muted-foreground">
                                Versão {policy.version} | Atualizado em: {policy.lastUpdated}
                            </p>
                        </div>
                         <span className="text-xs font-mono text-muted-foreground">{policy.owner}</span>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
