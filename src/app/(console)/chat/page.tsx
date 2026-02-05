'use client';

import * as React from 'react';
import { ChatHeader } from '@/features/chat/components/ChatHeader';
import { ChatMessageList } from '@/features/chat/components/ChatMessageList';
import { ChatInput } from '@/features/chat/components/ChatInput';
import { ChatMessageProps } from '@/features/chat/components/ChatMessage';
import { getInitialMessages, getMockResponse } from '@/features/chat/services/chatService';
import { useToast } from '@/hooks/use-toast';

export default function ChatPage() {
  const [messages, setMessages] = React.useState<ChatMessageProps[]>(getInitialMessages());
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const handleSendMessage = (content: string) => {
    if (!content) return;
    const userMessage: ChatMessageProps = { role: 'user', content };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    setTimeout(() => {
      const aiResponse: ChatMessageProps = getMockResponse();
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };
  
  const handleNewChat = () => {
    setMessages(getInitialMessages());
    toast({
      title: "Nova Conversa",
      description: "O histórico da conversa foi limpo.",
    });
  };

  return (
    <div className="absolute inset-0 flex flex-col bg-background">
      <ChatHeader onNewChat={handleNewChat} />
      <ChatMessageList messages={messages} isLoading={isLoading} />
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}
