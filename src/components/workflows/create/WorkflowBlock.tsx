import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

type WorkflowBlockProps = {
    icon: React.ElementType;
    title: string;
    description: string;
    isTrigger?: boolean;
};

export function WorkflowBlock({ icon: Icon, title, description, isTrigger = false }: WorkflowBlockProps) {
    return (
        <Card className="relative hover:shadow-md transition-shadow bg-background/50">
            <div className="absolute top-2 right-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                </Button>
            </div>
            <CardHeader className="flex flex-row items-start gap-4">
                <div className={cn(
                    "flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary flex-shrink-0",
                    isTrigger && "ring-2 ring-primary"
                )}>
                    <Icon className="h-6 w-6" />
                </div>
                <div>
                    <CardTitle className="text-lg">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </div>
            </CardHeader>
        </Card>
    );
}
