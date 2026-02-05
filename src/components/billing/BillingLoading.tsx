import { Skeleton } from "@/components/ui/skeleton";
import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function BillingLoading() {
  return (
    <div className="space-y-8">
      <PageHeader>
        <PageHeaderTitle>Plano & Faturamento</PageHeaderTitle>
        <PageHeaderDescription>
          Gerencie sua assinatura, métodos de pagamento e histórico de faturas.
        </PageHeaderDescription>
      </PageHeader>
      
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-4 w-2/3 mt-2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-2.5 w-full" />
          <Skeleton className="h-4 w-1/4 mt-2" />
        </CardContent>
      </Card>
      
      <div className="text-center">
        <Skeleton className="h-7 w-1/2 mx-auto mb-8" />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full mt-2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-10 w-1/2 mb-6" />
              <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, j) => (
                    <div key={j} className="flex items-start gap-2">
                        <Skeleton className="h-5 w-5 rounded-full" />
                        <Skeleton className="h-4 flex-1" />
                    </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Skeleton className="h-10 w-full" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
