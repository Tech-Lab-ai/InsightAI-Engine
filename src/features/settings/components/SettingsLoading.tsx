import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader } from "@/components/ui/card";

export function SettingsLoading() {
    return (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i}>
                    <CardHeader className="flex flex-row items-start justify-between gap-4">
                        <div>
                             <div className="flex items-center gap-3 mb-2">
                                <Skeleton className="h-10 w-10 rounded-lg flex-shrink-0" />
                                <Skeleton className="h-5 w-32" />
                            </div>
                            <Skeleton className="h-4 w-48" />
                        </div>
                         <Skeleton className="h-4 w-4 mt-1" />
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
}
