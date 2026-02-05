import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

type AdminMetricsCardProps = {
    title: string;
    value: string;
    icon: React.ElementType;
    description: string;
};

export function AdminMetricsCard({ title, value, icon: Icon, description }: AdminMetricsCardProps) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    {title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <p className="text-xs text-muted-foreground flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                    <span className="text-green-500 mr-1">{description.split(' ')[0]}</span>
                    {description.substring(description.indexOf(' ') + 1)}
                </p>
            </CardContent>
        </Card>
    );
}
