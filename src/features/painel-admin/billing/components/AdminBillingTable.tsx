import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AdminBillingRow } from "./AdminBillingRow";
import { AdminSubscription } from "../../types";
import { AdminBillingEmpty } from "./AdminBillingEmpty";

type AdminBillingTableProps = {
    subscriptions: AdminSubscription[];
};

export function AdminBillingTable({ subscriptions }: AdminBillingTableProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Assinaturas</CardTitle>
                <CardDescription>Lista de todas as assinaturas ativas e passadas.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
                {subscriptions.length === 0 ? (
                    <AdminBillingEmpty />
                ) : (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[30%]">Empresa</TableHead>
                                <TableHead>Plano</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Valor Mensal</TableHead>
                                <TableHead>Próxima Cobrança</TableHead>
                                <TableHead>Gateway</TableHead>
                                <TableHead className="text-right">Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {subscriptions.map((sub) => (
                                <AdminBillingRow key={sub.id} subscription={sub} />
                            ))}
                        </TableBody>
                    </Table>
                )}
            </CardContent>
        </Card>
    );
}
