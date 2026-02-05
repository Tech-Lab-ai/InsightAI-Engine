import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot } from "lucide-react";

export function ChatLoading() {
  return (
    <div className="flex items-start gap-4">
       <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-primary/10 text-primary">
                <Bot className="h-5 w-5"/>
            </AvatarFallback>
        </Avatar>
      <div className="max-w-[75%] rounded-lg p-3 text-sm bg-muted">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse delay-0" />
          <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse delay-150" />
          <span className="h-2 w-2 bg-muted-foreground rounded-full animate-pulse delay-300" />
        </div>
      </div>
    </div>
  );
}