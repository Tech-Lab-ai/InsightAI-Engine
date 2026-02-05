import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AdminUser } from "../../types";
import { AdminUsersActions } from "./AdminUsersActions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type AdminUsersRowProps = {
    user: AdminUser;
};

const statusVariantMap: Record<AdminUser['status'], "default" | "destructive"> = {
    'Ativo': 'default',
    'Suspensa': 'destructive',
};

const roleVariantMap: Record<AdminUser['role'], "secondary" | "outline"> = {
    'Admin': 'secondary',
    'Membro': 'outline',
    'Viewer': 'outline',
};

export function AdminUsersRow({ user }: AdminUsersRowProps) {
    return (
        <TableRow>
            <TableCell>
                 <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatarUrl} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{user.name}</span>
                </div>
            </TableCell>
            <TableCell className="text-muted-foreground">{user.email}</TableCell>
            <TableCell className="text-muted-foreground">{user.companyName}</TableCell>
            <TableCell>
                 <Badge variant={roleVariantMap[user.role]}>{user.role}</Badge>
            </TableCell>
            <TableCell>
                <Badge variant={statusVariantMap[user.status]}>{user.status}</Badge>
            </TableCell>
            <TableCell className="text-muted-foreground text-sm">{user.lastAccess}</TableCell>
            <TableCell className="text-muted-foreground text-sm">{user.createdAt}</TableCell>
            <TableCell className="text-right">
                <AdminUsersActions user={user} />
            </TableCell>
        </TableRow>
    );
}
