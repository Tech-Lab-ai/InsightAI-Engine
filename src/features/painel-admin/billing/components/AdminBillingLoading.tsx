import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";

export function AdminBillingLoading() {
    return (
        <div className="space-y-8">
             <PageHeader>
                <PageHeaderTitle>Billing & Receita</PageHeaderTitle>
                <PageHeaderDescription>Visão financeira do SaaS.</PageHeaderDescription>
            </PageHeader>

            {/* Metrics skeleton */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Card key={i}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <Skeleton className="h-4 w-2/3" />
                            <Skeleton className="h-4 w-4" />
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-7 w-1/3 mb-2" />
                            <Skeleton className="h-3 w-1/2" />
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Charts skeleton */}
            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <Skeleton className="h-5 w-1/3" />
                        <Skeleton className="h-4 w-1/2" />
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-[300px] w-full" />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <Skeleton className="h-5 w-1/3" />
                        <Skeleton className="h-4 w-1/2" />
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-[300px] w-full" />
                    </CardContent>
                </Card>
            </div>

            {/* Table skeleton */}
            <Card>
                 <CardHeader>
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-4 w-80 mt-2" />
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                             <TableRow>
                                {Array.from({ length: 7 }).map((_, i) => (
                                    <TableHead key={i}><Skeleton className="h-4 w-24" /></TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <TableRow key={i}>
                                    <TableCell><Skeleton className="h-4 w-3/4" /></TableCell>
                                    <TableCell><Skeleton className="h-6 w-20 rounded-full" /></TableCell>
                                    <TableCell><Skeleton className="h-6 w-20 rounded-full" /></TableCell>
                                    <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                                    <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                                    <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                                    <TableCell className="text-right"><Skeleton className="h-8 w-8 ml-auto" /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
