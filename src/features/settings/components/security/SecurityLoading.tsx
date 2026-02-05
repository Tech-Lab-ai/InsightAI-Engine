import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldAlert } from "lucide-react";

export function SecurityLoading() {
    return (
        <div className="space-y-8">
             <PageHeader>
                <div className="flex-1">
                    <PageHeaderTitle>Segurança</PageHeaderTitle>
                    <PageHeaderDescription>
                        Gerencie as políticas de segurança, autenticação e acesso da sua organização.
                    </PageHeaderDescription>
                </div>
            </PageHeader>
            <Alert variant="destructive">
                <ShieldAlert className="h-4 w-4" />
                <AlertTitle>Configurações de Segurança</AlertTitle>
                <AlertDescription>
                    As configurações de segurança são gerenciadas centralmente pelo backend. Esta tela é uma representação visual das políticas ativas.
                </AlertDescription>
            </Alert>
            <Card>
                <CardHeader>
                    <Skeleton className="h-6 w-1/3" />
                    <Skeleton className="h-4 w-2/3 mt-2" />
                </CardHeader>
                <CardContent className="space-y-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-2">
                           <Skeleton className="h-4 w-4" />
                           <Skeleton className="h-4 w-full" />
                        </div>
                    ))}
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 <Card>
                    <CardHeader>
                        <Skeleton className="h-5 w-1/2" />
                        <Skeleton className="h-4 w-3/4 mt-2" />
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <Skeleton className="h-12 w-full" />
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-12 w-full" />
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <Skeleton className="h-5 w-1/2" />
                        <Skeleton className="h-4 w-3/4 mt-2" />
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-12 w-full" />
                        <Skeleton className="h-10 w-full" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
