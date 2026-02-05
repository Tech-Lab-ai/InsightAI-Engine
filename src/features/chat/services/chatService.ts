import { ChatMessageProps } from '../components/ChatMessage';

const initialMessages: ChatMessageProps[] = [
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
];

export function getInitialMessages(): ChatMessageProps[] {
    return initialMessages;
}

export function getMockResponse(): ChatMessageProps {
    return {
        role: 'assistant',
        content: 'Esta é uma resposta simulada. A lógica real de IA será implementada no futuro, conectada a um backend.',
    };
}
