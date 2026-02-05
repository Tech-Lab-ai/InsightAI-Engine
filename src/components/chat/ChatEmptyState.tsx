import { MessageSquare } from "lucide-react";

export function ChatEmptyState() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">
        <MessageSquare className="h-10 w-10" />
      </div>
      <h2 className="text-2xl font-bold">InsightAI Chat</h2>
      <p className="text-muted-foreground mt-2">
        Comece fazendo uma pergunta sobre seus documentos.
      </p>
    </div>
  );
}