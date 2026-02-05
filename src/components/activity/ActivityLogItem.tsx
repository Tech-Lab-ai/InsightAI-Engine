import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bot, Workflow, FileText, User } from "lucide-react";
import { Activity } from './activity-mock-data';

type ActivityLogItemProps = {
    activity: Activity;
};

const iconMap = {
    'Chat': Bot,
    'Workflow': Workflow,
    'Documento': FileText,
    'Usuário': User
};

export function ActivityLogItem({ activity }: ActivityLogItemProps) {
    const Icon = iconMap[activity.type] || Bot;
    return (
        <div className="flex items-start gap-4">
            <Avatar className="h-9 w-9">
                <AvatarFallback>{activity.user.substring(0, 1)}</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
                <p className="text-sm">
                    <span className="font-medium">{activity.user}</span> {activity.description}
                </p>
                <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                        <Icon className="mr-1 h-3 w-3" />
                        {activity.type}
                    </Badge>
                    <time className="text-xs text-muted-foreground">{activity.timestamp}</time>
                </div>
            </div>
        </div>
    );
}
