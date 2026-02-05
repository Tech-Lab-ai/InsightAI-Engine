'use client';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FeatureFlag } from "../../types";

type DetailsProps = {
    featureFlag: FeatureFlag | null;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

export function AdminFeatureFlagDetails({ featureFlag, isOpen, setIsOpen }: DetailsProps) {
    if (!featureFlag) return null;
    
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-3xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl">{featureFlag.name}</DialogTitle>
                    <DialogDescription>
                        {featureFlag.description}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                    <div className="grid grid-cols-4 gap-4">
                        <div>
                            <h4 className="font-semibold text-sm">Chave Técnica</h4>
                            <p className="text-sm font-mono text-muted-foreground">{featureFlag.key}</p>
                        </div>
                         <div>
                            <h4 className="font-semibold text-sm">Status</h4>
                            <Badge>{featureFlag.status}</Badge>
                        </div>
                         <div>
                            <h4 className="font-semibold text-sm">Tipo</h4>
                            <Badge variant="secondary">{featureFlag.type}</Badge>
                        </div>
                         <div>
                            <h4 className="font-semibold text-sm">Escopo</h4>
                             <Badge variant="outline">{featureFlag.scope}</Badge>
                        </div>
                    </div>
                    <Separator />
                    <div>
                        <h4 className="font-semibold mb-2">Critérios de Rollout</h4>
                        <div className="text-sm text-muted-foreground space-y-1">
                            <p><span className="font-medium text-foreground">Percentual:</span> {featureFlag.rollout.percentage}% dos usuários</p>
                            <p><span className="font-medium text-foreground">Empresas:</span> {featureFlag.rollout.companies.length > 0 ? featureFlag.rollout.companies.join(', ') : 'Global'}</p>
                            <p><span className="font-medium text-foreground">Planos:</span> {featureFlag.rollout.plans.length > 0 ? featureFlag.rollout.plans.join(', ') : 'Todos'}</p>
                        </div>
                    </div>
                    <Separator />
                     <div>
                        <h4 className="font-semibold mb-2">Histórico de Alterações</h4>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Data</TableHead>
                                    <TableHead>Autor</TableHead>
                                    <TableHead>Ação</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {featureFlag.history.map((entry, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="text-sm text-muted-foreground">{entry.date}</TableCell>
                                        <TableCell className="font-medium">{entry.author}</TableCell>
                                        <TableCell className="text-sm">{entry.action}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={() => setIsOpen(false)}>Fechar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
