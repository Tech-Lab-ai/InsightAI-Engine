import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export function DocumentPermissionsLoading() {
    return (
        <div className="space-y-4">
            <Card>
                <CardHeader>
                    <Skeleton className="h-5 w-48" />
                </CardHeader>
                <CardContent className="grid sm:grid-cols-3 gap-4">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <Skeleton className="h-5 w-64" />
                    <Skeleton className="h-4 w-96 mt-2" />
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[40%]"><Skeleton className="h-4 w-16" /></TableHead>
                                <TableHead className="text-center"><Skeleton className="h-4 w-20 mx-auto" /></TableHead>
                                <TableHead className="text-center"><Skeleton className="h-4 w-16 mx-auto" /></TableHead>
                                <TableHead className="text-center"><Skeleton className="h-4 w-24 mx-auto" /></TableHead>
                                <TableHead className="text-center"><Skeleton className="h-4 w-16 mx-auto" /></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Array.from({ length: 4 }).map((_, i) => (
                                <TableRow key={i}>
                                    <TableCell><Skeleton className="h-4 w-3/4" /></TableCell>
                                    <TableCell className="text-center"><Skeleton className="h-5 w-5 mx-auto rounded-sm" /></TableCell>
                                    <TableCell className="text-center"><Skeleton className="h-5 w-5 mx-auto rounded-sm" /></TableCell>
                                    <TableCell className="text-center"><Skeleton className="h-5 w-5 mx-auto rounded-sm" /></TableCell>
                                    <TableCell className="text-center"><Skeleton className="h-5 w-5 mx-auto rounded-sm" /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
