import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { AdminCompaniesRow } from "./AdminCompaniesRow";
import { AdminCompany } from "../../types";

type AdminCompaniesTableProps = {
    companies: AdminCompany[];
};

export function AdminCompaniesTable({ companies }: AdminCompaniesTableProps) {
    return (
        <Card>
            <CardContent className="p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[30%]">Empresa</TableHead>
                            <TableHead>Plano</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Usuários</TableHead>
                            <TableHead>Uso</TableHead>
                            <TableHead>Data de Criação</TableHead>
                            <TableHead className="text-right">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {companies.map((company) => (
                            <AdminCompaniesRow key={company.id} company={company} />
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
