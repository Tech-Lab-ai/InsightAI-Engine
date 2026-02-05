'use client';

import * as React from 'react';
import { ChatMessage, ChatMessageProps } from './ChatMessage';
import { ChatEmptyState } from './ChatEmptyState';
import { ChatLoading } from './ChatLoading';

type ChatMessageListProps = {
  messages: ChatMessageProps[];
  isLoading: boolean;
};

export function ChatMessageList({ messages, isLoading }: ChatMessageListProps) {
    const scrollRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

  if (messages.length === 0 && !isLoading) {
    return <ChatEmptyState />;
  }

  return (
    <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-6">
      <div className="space-y-6">
        {messages.map((message, index) => (
          <ChatMessage key={index} {...message} />
        ))}
        {isLoading && <ChatLoading />}
      </div>
    </div>
  );
}
