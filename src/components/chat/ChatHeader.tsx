import { Button } from "@/components/ui/button";
import { PlusCircle, CircleDot } from "lucide-react";

type ChatHeaderProps = {
  onNewChat: () => void;
};

export function ChatHeader({ onNewChat }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div>
        <h1 className="text-xl font-bold">Chat</h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CircleDot className="h-3 w-3 text-green-500 fill-green-500" />
            <span>Baseado nos seus documentos</span>
        </div>
      </div>
      <Button variant="outline" onClick={onNewChat}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Nova conversa
      </Button>
    </div>
  );
}