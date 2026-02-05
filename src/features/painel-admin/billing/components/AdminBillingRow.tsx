import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AdminSubscription } from "../../types";
import { AdminBillingActions } from "./AdminBillingActions";
import Image from "next/image";

type AdminBillingRowProps = {
    subscription: AdminSubscription;
};

const statusVariantMap: Record<AdminSubscription['status'], "default" | "secondary" | "destructive" | "outline"> = {
    'Ativa': 'default',
    'Trial': 'secondary',
    'Atrasada': 'destructive',
    'Cancelada': 'outline',
};

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};

export function AdminBillingRow({ subscription }: AdminBillingRowProps) {
    return (
        <TableRow>
            <TableCell>
                <div className="font-medium">{subscription.companyName}</div>
                <div className="text-xs text-muted-foreground font-mono">{subscription.companyId}</div>
            </TableCell>
            <TableCell>
                <Badge variant="outline">{subscription.plan}</Badge>
            </TableCell>
            <TableCell>
                <Badge variant={statusVariantMap[subscription.status]}>{subscription.status}</Badge>
            </TableCell>
            <TableCell className="font-medium">{formatCurrency(subscription.monthlyValue)}</TableCell>
            <TableCell>{subscription.nextBilling}</TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <Image src="/asaas_logo.svg" alt="Asaas" width={16} height={16} />
                    <span>{subscription.gateway}</span>
                </div>
            </TableCell>
            <TableCell className="text-right">
                <AdminBillingActions subscriptionId={subscription.id} />
            </TableCell>
        </TableRow>
    );
}
