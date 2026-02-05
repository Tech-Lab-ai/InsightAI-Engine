import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";

export type ChatMessageProps = {
    role: "user" | "assistant";
    content: string;
};

export function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === "user";
  return (
    <div
      className={cn(
        "flex items-start gap-4",
        isUser && "justify-end"
      )}
    >
      {!isUser && (
        <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-primary/10 text-primary">
                <Bot className="h-5 w-5"/>
            </AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          "max-w-[75%] rounded-lg p-3 text-sm",
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-muted"
        )}
      >
        <p className="font-semibold">{isUser ? "Você" : "InsightAI"}</p>
        <p className="whitespace-pre-wrap">{content}</p>
      </div>
       {isUser && (
        <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-secondary text-secondary-foreground">
                <User className="h-5 w-5" />
            </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
