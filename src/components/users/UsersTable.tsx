'use client';
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UsersRow } from "./UsersRow";
import { User } from "./mock-data";

type UsersTableProps = {
    users: User[];
};

export function UsersTable({ users }: UsersTableProps) {
    return (
        <div className="border rounded-lg">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[30%]">Nome</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Papel</TableHead>
                        <TableHead>Último Acesso</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user) => (
                        <UsersRow key={user.id} user={user} />
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
