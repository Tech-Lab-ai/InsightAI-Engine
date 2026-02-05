import { PageHeader, PageHeaderDescription, PageHeaderTitle } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

type AdminFeatureFlagsHeaderProps = {
    totalFlags: number;
}

export function AdminFeatureFlagsHeader({ totalFlags }: AdminFeatureFlagsHeaderProps) {
    return (
        <PageHeader>
            <div className="flex-1">
                <PageHeaderTitle>Feature Flags ({totalFlags})</PageHeaderTitle>
                <PageHeaderDescription>
                    Controle o rollout de funcionalidades e o comportamento da plataforma em tempo real.
                </PageHeaderDescription>
            </div>
             <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Criar Nova Flag
            </Button>
        </PageHeader>
    );
}
