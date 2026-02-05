import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function AdminSupportLoading() {
    return (
        <div className="flex flex-col h-full gap-8">
            {/* Header skeleton */}
            <div className="space-y-2">
                <Skeleton className="h-8 w-1/3" />
                <Skeleton className="h-4 w-1/2" />
            </div>
            {/* Metrics skeleton */}
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
            {/* Filters skeleton */}
             <div className="flex flex-wrap items-center gap-2 pb-4 border-b">
                <Skeleton className="h-10 flex-1 min-w-[250px]" />
                <Skeleton className="h-10 w-full sm:w-[180px]" />
                <Skeleton className="h-10 w-full sm:w-[180px]" />
                <Skeleton className="h-10 w-24" />
            </div>

            {/* Split view skeleton */}
            <div className="flex-1 grid md:grid-cols-[minmax(0,_1fr)_2fr] gap-8 overflow-hidden">
                <Card className="h-full overflow-hidden flex flex-col">
                    <CardContent className="p-2 flex-1 overflow-y-auto space-y-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Skeleton key={i} className="h-20 w-full" />
                        ))}
                    </CardContent>
                </Card>
                <Card className="h-full flex flex-col">
                     <CardHeader>
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-1/2 mt-2" />
                    </CardHeader>
                    <CardContent className="flex-1">
                        <Skeleton className="h-full w-full" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
