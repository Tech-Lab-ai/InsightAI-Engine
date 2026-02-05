'use client';

import * as React from 'react';
import { ChatHeader } from '@/components/chat/ChatHeader';
import { ChatMessageList } from '@/components/chat/ChatMessageList';
import { ChatInput } from '@/components/chat/ChatInput';
import { ChatMessageProps } from '@/components/chat/ChatMessage';

export default function ChatPage() {
  const [messages, setMessages] = React.useState<ChatMessageProps[]>([
    {
      role: 'assistant',
      content: 'Olá! Sou o assistente do InsightAI. Em que posso ajudar hoje?',
    },
    {
        role: 'user',
        content: 'Qual foi o principal risco apontado no último relatório de compliance?'
    },
    {
        role: 'assistant',
        content: 'O principal risco apontado foi a "Não conformidade com a nova regulamentação de proteção de dados", com um impacto potencial alto. A recomendação foi a revisão imediata das políticas de coleta de dados. A informação está na página 8 do documento "Relatório de Compliance Q4 2023".'
    }
  ]);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSendMessage = (content: string) => {
    if (!content) return;
    const userMessage: ChatMessageProps = { role: 'user', content };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Mock AI response
    setTimeout(() => {
      const aiResponse: ChatMessageProps = {
        role: 'assistant',
        content:
          'Esta é uma resposta simulada. A lógica real de IA será implementada no futuro.',
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleNewChat = () => {
    setMessages([
        {
          role: 'assistant',
          content: 'Olá! Sou o assistente do InsightAI. Em que posso ajudar hoje?',
        },
    ]);
  }

  return (
    <div className="flex flex-col h-full">
      <ChatHeader onNewChat={handleNewChat} />
      <ChatMessageList messages={messages} isLoading={isLoading} />
      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}
