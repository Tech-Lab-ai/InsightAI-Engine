import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { AdminUsersRow } from "./AdminUsersRow";
import { AdminUser } from "../../types";

type AdminUsersTableProps = {
    users: AdminUser[];
};

export function AdminUsersTable({ users }: AdminUsersTableProps) {
    return (
        <Card>
            <CardContent className="p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[20%]">Nome</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Empresa</TableHead>
                            <TableHead>Papel</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Último Acesso</TableHead>
                            <TableHead>Data de Criação</TableHead>
                            <TableHead className="text-right">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user) => (
                            <AdminUsersRow key={user.id} user={user} />
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
