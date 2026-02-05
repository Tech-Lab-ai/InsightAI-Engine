import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

export function AdminIntegrationsLoading() {
    return (
        <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <Card key={i}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <Skeleton className="h-4 w-2/3" />
                            <Skeleton className="h-4 w-4" />
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-7 w-1/3" />
                        </CardContent>
                    </Card>
                ))}
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                    <Card key={i}>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-4">
                                    <Skeleton className="h-12 w-12 rounded-lg" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-5 w-32" />
                                        <Skeleton className="h-4 w-24" />
                                    </div>
                                </div>
                                <Skeleton className="h-8 w-8" />
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                             <Skeleton className="h-4 w-full" />
                             <Skeleton className="h-4 w-3/4" />
                             <Skeleton className="h-6 w-full" />
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Skeleton className="h-6 w-20 rounded-full" />
                            <Skeleton className="h-4 w-28" />
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
