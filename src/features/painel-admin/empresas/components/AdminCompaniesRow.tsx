import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AdminCompany } from "../../types";
import { AdminCompaniesActions } from "./AdminCompaniesActions";

type AdminCompaniesRowProps = {
    company: AdminCompany;
};

const statusVariantMap: Record<AdminCompany['status'], "default" | "secondary" | "destructive" | "outline"> = {
    'Ativa': 'default',
    'Trial': 'secondary',
    'Suspensa': 'destructive',
};

export function AdminCompaniesRow({ company }: AdminCompaniesRowProps) {
    return (
        <TableRow>
            <TableCell>
                <div className="font-medium">{company.name}</div>
                <div className="text-xs text-muted-foreground font-mono">{company.id}</div>
            </TableCell>
            <TableCell>
                <Badge variant="outline">{company.plan}</Badge>
            </TableCell>
            <TableCell>
                <Badge variant={statusVariantMap[company.status]}>{company.status}</Badge>
            </TableCell>
            <TableCell>
                {company.activeUsers} / {company.totalUsers}
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <Progress value={company.usage} className="w-24" />
                    <span className="text-xs text-muted-foreground">{company.usage}%</span>
                </div>
            </TableCell>
            <TableCell>{company.createdAt}</TableCell>
            <TableCell className="text-right">
                <AdminCompaniesActions companyId={company.id} />
            </TableCell>
        </TableRow>
    );
}
