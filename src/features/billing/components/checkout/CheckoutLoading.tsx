import { Skeleton } from "@/components/ui/skeleton";
import { CheckoutHeader } from "./CheckoutHeader";
import { Card, CardContent } from "@/components/ui/card";

export function CheckoutLoading() {
    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-pulse">
            <CheckoutHeader />
            <Card>
                <CardContent className="p-6">
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <div className="flex justify-between items-center">
                                <Skeleton className="h-4 w-32" />
                                <Skeleton className="h-6 w-24" />
                            </div>
                             <div className="flex justify-between items-center">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-6 w-20" />
                            </div>
                            <Skeleton className="h-px w-full" />
                            <div className="flex justify-between items-center">
                                <Skeleton className="h-6 w-16" />
                                <Skeleton className="h-6 w-24" />
                            </div>
                        </CardContent>
                    </Card>
                    <div className="mt-8 grid sm:grid-cols-2 gap-4">
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-10 w-full" />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
