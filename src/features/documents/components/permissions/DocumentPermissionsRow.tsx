'use client';
import { TableRow, TableCell } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { type PermissionRole } from "../../types/permission";

type RowProps = {
    role: PermissionRole;
};

export function DocumentPermissionsRow({ role }: RowProps) {
    return (
        <TableRow>
            <TableCell className="font-medium">
                <div>{role.name}</div>
                <div className="text-xs text-muted-foreground">{role.description}</div>
            </TableCell>
            <TableCell className="text-center">
                <Checkbox defaultChecked={role.permissions.view} />
            </TableCell>
            <TableCell className="text-center">
                <Checkbox defaultChecked={role.permissions.edit} />
            </TableCell>
            <TableCell className="text-center">
                <Checkbox defaultChecked={role.permissions.share} />
            </TableCell>
            <TableCell className="text-center">
                <Checkbox defaultChecked={role.permissions.delete} />
            </TableCell>
        </TableRow>
    );
}
