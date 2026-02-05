import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type SettingsCardProps = {
    href: string;
    icon: React.ElementType;
    title: string;
    description: string;
};

export function SettingsCard({ href, icon: Icon, title, description }: SettingsCardProps) {
    return (
        <Link href={href}>
            <Card className="hover:bg-accent hover:border-accent-foreground/20 transition-colors h-full">
                <CardHeader className="flex flex-row items-start justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                             <div className="flex items-center justify-center h-10 w-10 bg-primary/10 text-primary rounded-lg flex-shrink-0">
                                <Icon className="h-5 w-5" />
                            </div>
                            <CardTitle className="text-lg leading-tight">{title}</CardTitle>
                        </div>
                        <CardDescription>{description}</CardDescription>
                    </div>
                     <ArrowRight className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                </CardHeader>
            </Card>
        </Link>
    );
}
