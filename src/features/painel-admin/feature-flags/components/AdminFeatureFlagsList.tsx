import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { AdminFeatureFlagRow } from "./AdminFeatureFlagRow";
import { FeatureFlag } from "../../types";
import { AdminFeatureFlagsEmpty } from "./AdminFeatureFlagsEmpty";

type AdminFeatureFlagsListProps = {
    flags: FeatureFlag[];
};

export function AdminFeatureFlagsList({ flags }: AdminFeatureFlagsListProps) {
    return (
        <Card>
            <CardContent className="p-0">
                {flags.length === 0 ? (
                    <AdminFeatureFlagsEmpty />
                ) : (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[30%]">Funcionalidade</TableHead>
                                <TableHead>Chave Técnica</TableHead>
                                <TableHead>Tipo</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Escopo</TableHead>
                                <TableHead>Última Modificação</TableHead>
                                <TableHead className="text-right">Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {flags.map((flag) => (
                                <AdminFeatureFlagRow key={flag.id} featureFlag={flag} />
                            ))}
                        </TableBody>
                    </Table>
                )}
            </CardContent>
        </Card>
    );
}
