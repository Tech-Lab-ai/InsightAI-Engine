import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function AdminSystemLoading() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div className="space-y-2">
                    <Skeleton className="h-8 w-72" />
                    <Skeleton className="h-4 w-96" />
                </div>
                 <Skeleton className="h-6 w-48" />
            </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    {/* System Mode Skeleton */}
                    <Card>
                        <CardHeader>
                            <Skeleton className="h-6 w-1/3" />
                            <Skeleton className="h-4 w-2/3 mt-2" />
                        </CardHeader>
                        <CardContent className="space-y-4">
                           <Skeleton className="h-10 w-full" />
                           <Skeleton className="h-10 w-1/2" />
                        </CardContent>
                    </Card>
                    {/* Parameters Skeleton */}
                    <Card>
                        <CardHeader>
                            <Skeleton className="h-6 w-1/3" />
                            <Skeleton className="h-4 w-2/3 mt-2" />
                        </CardHeader>
                        <CardContent className="space-y-4">
                           {Array.from({ length: 4 }).map((_, i) => (
                               <div key={i} className="flex justify-between">
                                   <Skeleton className="h-4 w-1/4" />
                                   <Skeleton className="h-4 w-1/3" />
                               </div>
                           ))}
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-8">
                     {/* Flags Summary Skeleton */}
                    <Card>
                         <CardHeader>
                            <Skeleton className="h-6 w-1/2" />
                            <Skeleton className="h-4 w-3/4 mt-2" />
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-5 w-full" />
                            <Skeleton className="h-10 w-full mt-4" />
                        </CardContent>
                    </Card>
                     {/* Notices Skeleton */}
                    <Card>
                         <CardHeader>
                            <Skeleton className="h-6 w-1/2" />
                             <Skeleton className="h-4 w-3/4 mt-2" />
                        </CardHeader>
                        <CardContent className="space-y-4">
                             <Skeleton className="h-20 w-full" />
                             <Skeleton className="h-12 w-full" />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
