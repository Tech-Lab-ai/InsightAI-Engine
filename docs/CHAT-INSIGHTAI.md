💬 CHAT INSIGHTAI — PROJETO FUNCIONAL E VISUAL
1️⃣ FUNÇÃO DO CHAT (O que ele faz)

O Chat é o núcleo operacional da plataforma.

Funções principais

Permitir perguntas em linguagem natural

Consultar apenas documentos autorizados

Retornar respostas com fontes

Manter contexto por sessão

Registrar auditoria automática

O chat NÃO faz

Não inventa respostas

Não usa conhecimento externo

Não responde fora do escopo documental

2️⃣ POSIÇÃO DO CHAT NA TELA
Layout Desktop (padrão enterprise)
┌─────────────────────────────────────────────┐
│ Header Global                               │
├───────────────┬─────────────────────────────┤
│ Sidebar       │ Chat Panel                  │
│ (menu)        │                             │
│               │                             │
│               │                             │
│               │                             │
│               │                             │
│               │                             │
├───────────────┴───────────┬─────────────────┤
│ Input Bar                 │ Context Panel   │
└───────────────────────────┴─────────────────┘

3️⃣ DIMENSÕES E ALTURAS (UI PRECISA)
Chat Panel (mensagens)

Altura:
100vh - header (64px) - input (72px)

Scroll vertical: interno

Padding: 24px

Largura: flex (ocupa área principal)

Input Bar (fixa embaixo)

Altura: 72px

Posição: sticky bottom: 0

Sempre visível

Sidebar

Largura: 240px (desktop)

Altura: 100vh

4️⃣ ESTRUTURA DO CHAT (Componentes)
ChatPage
 ├─ ChatHeader
 ├─ ChatMessages (scroll)
 │   ├─ UserMessage
 │   ├─ AssistantMessage
 │   └─ SystemMessage
 ├─ ChatInput (fixo)
 └─ ContextPanel (opcional)

5️⃣ COMPORTAMENTO DAS MENSAGENS
Mensagem do Usuário

Alinhamento: direita

Fundo: cinza escuro

Texto: branco

Sem fontes

Mensagem da IA

Alinhamento: esquerda

Fundo: levemente destacado

Texto: claro

Sempre mostra fontes (quando existirem)

Mensagem do Sistema

Centralizada

Cor neutra

Usada para avisos:

“Contexto reiniciado”

“Sem documentos suficientes”

6️⃣ INPUT DO CHAT (COMPORTAMENTO)
Campo de texto

Multilinha (até 6 linhas)

Enter → envia

Shift + Enter → nova linha

Botões

Enviar (ícone avião)

Limpar contexto (se permitido)

Loading (spinner)

Placeholder

Pergunte algo sobre seus documentos…

7️⃣ ESTADOS DO CHAT (OBRIGATÓRIOS)
Loading

Indicador “Pensando…”

Input desabilitado

Cursor de espera

Erro

Mensagem clara:

Não foi possível processar sua pergunta.

Sem stack trace

Sem contexto

Nenhum documento relevante encontrado para esta pergunta.

8️⃣ PAINEL DE CONTEXTO (LATERAL DIREITO)
Função

Mostrar transparência da resposta

Conteúdo

Documentos usados

Versão

Categoria

Trechos destacados

Largura

320px

Colapsável

9️⃣ REGRAS DE UX (CRÍTICAS)

Scroll sempre no fim

Nova mensagem anima suavemente

Fonte legível (linha 1.5)

Não quebrar contexto visual

Respostas longas → colapsáveis

🔐 CONTROLE POR PERFIL (RBAC)
Função	Viewer	Editor	Admin
Perguntar	✅	✅	✅
Ver fontes	✅	✅	✅
Limpar memória	❌	❌	✅
Ver contexto	✅	✅	✅
10️⃣ TEXTO DE AJUDA NO CHAT

Este chat responde apenas com base nos documentos autorizados da sua empresa.
Se algo não estiver nos documentos, a IA informará.

✅ RESULTADO FINAL

✔ Chat enterprise, claro e confiável
✔ Layout preciso (altura, posição, scroll)
✔ Transparência total (fontes)
✔ Integrado ao InsightAI E