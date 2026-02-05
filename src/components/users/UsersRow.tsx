'use client';
import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Edit, Trash2, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "./mock-data";

type UsersRowProps = {
    user: User;
};

const statusVariant: { [key: string]: "default" | "secondary" | "destructive" | "outline" } = {
    'Ativo': 'default',
    'Pendente': 'outline',
    'Suspenso': 'destructive',
};

const roleVariant: { [key: string]: "default" | "secondary" | "outline" } = {
    'Admin': 'secondary',
    'Editor': 'outline',
    'Visualizador': 'outline',
};

export function UsersRow({ user }: UsersRowProps) {
    return (
        <TableRow>
            <TableCell>
                <div className="flex items-center gap-3">
                    <Avatar>
                        <AvatarImage src={user.avatarUrl} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                </div>
            </TableCell>
            <TableCell>
                <Badge variant={statusVariant[user.status] || 'secondary'} className="capitalize">
                    {user.status}
                </Badge>
            </TableCell>
            <TableCell>
                <Badge variant={roleVariant[user.role] || 'outline'} className="capitalize">
                    {user.role}
                </Badge>
            </TableCell>
            <TableCell>{user.lastAccess}</TableCell>
            <TableCell className="text-right">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Abrir menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Editar Papel
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            Reenviar Convite
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Remover Usuário
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        </TableRow>
    );
}
