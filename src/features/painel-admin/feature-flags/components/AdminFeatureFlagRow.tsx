import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FeatureFlag } from "../../types";
import { AdminFeatureFlagActions } from "./AdminFeatureFlagActions";

type AdminFeatureFlagRowProps = {
    featureFlag: FeatureFlag;
};

const statusVariantMap: Record<FeatureFlag['status'], "default" | "secondary" | "destructive" | "outline"> = {
    'Ativa': 'default',
    'Em teste': 'secondary',
    'Desativada': 'destructive',
};
const typeVariantMap: Record<FeatureFlag['type'], "secondary" | "outline"> = {
    'Feature': 'secondary',
    'Experimento': 'outline',
    'Kill Switch': 'secondary',
};

export function AdminFeatureFlagRow({ featureFlag }: AdminFeatureFlagRowProps) {
    return (
        <TableRow>
            <TableCell>
                <div className="font-medium">{featureFlag.name}</div>
                <div className="text-xs text-muted-foreground">{featureFlag.description}</div>
            </TableCell>
             <TableCell>
                <Badge variant="outline" className="font-mono">{featureFlag.key}</Badge>
            </TableCell>
            <TableCell>
                 <Badge variant={typeVariantMap[featureFlag.type]}>{featureFlag.type}</Badge>
            </TableCell>
            <TableCell>
                <Badge variant={statusVariantMap[featureFlag.status]}>{featureFlag.status}</Badge>
            </TableCell>
             <TableCell>
                 <Badge variant="outline">{featureFlag.scope}</Badge>
            </TableCell>
            <TableCell className="text-muted-foreground text-sm">{featureFlag.lastModified}</TableCell>
            <TableCell className="text-right">
                <AdminFeatureFlagActions featureFlag={featureFlag} />
            </TableCell>
        </TableRow>
    );
}
