import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ShieldAlert, Download } from "lucide-react";

export function SecurityAuditLinks() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Logs e Auditoria</CardTitle>
                <CardDescription>
                    Acesse logs detalhados e exporte relatórios para fins de compliance.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/reports/audit">
                     <Card className="hover:bg-accent transition-colors">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                             <CardTitle className="text-sm font-medium">Logs de Auditoria</CardTitle>
                             <FileText className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                         <CardContent>
                            <p className="text-xs text-muted-foreground">
                                Ver todos os eventos críticos da plataforma.
                            </p>
                        </CardContent>
                    </Card>
                </Link>
                <Link href="#">
                     <Card className="hover:bg-accent transition-colors">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                             <CardTitle className="text-sm font-medium">Alertas de Segurança</CardTitle>
                             <ShieldAlert className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                         <CardContent>
                             <p className="text-xs text-muted-foreground">
                                Revisar alertas de segurança passados.
                            </p>
                        </CardContent>
                    </Card>
                </Link>
                <Button variant="outline" className="w-full h-full p-4 items-start justify-start flex-col">
                    <div className="flex justify-between w-full">
                        <span className="text-sm font-medium">Exportar Todos os Logs</span>
                        <Download className="h-4 w-4 text-muted-foreground" />
                    </div>
                     <p className="text-xs text-muted-foreground text-left">
                        Baixar um arquivo .csv com todos os logs do período selecionado.
                    </p>
                </Button>
            </CardContent>
        </Card>
    );
}
