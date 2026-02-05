4️⃣ Dashboard Next.js — Chat + Documentos + Sessões

Interface Enterprise do InsightAI Engine

Este módulo entrega o painel operacional completo para usuários corporativos interagirem com o pipeline RAG de forma segura, organizada e auditável.

Visão Geral da UI

Objetivo do Dashboard

Centralizar chat inteligente

Gerenciar documentos e versões

Visualizar sessões, memória e auditoria

Respeitar RBAC + multi-tenant

Estrutura de Rotas (Next.js App Router)
/app
 ├─ layout.tsx
 ├─ page.tsx (landing / redirect)
 ├─ login/
 ├─ dashboard/
 │   ├─ page.tsx
 │   ├─ chat/
 │   │   └─ page.tsx
 │   ├─ documents/
 │   │   ├─ page.tsx
 │   │   └─ upload/
 │   ├─ sessions/
 │   │   └─ page.tsx
 │   ├─ audit/
 │   │   └─ page.tsx
 │   └─ settings/

1️⃣ Dashboard Home (/dashboard)

Componentes

Cards de status:

Documentos ativos

Sessões abertas

Consultas RAG (últimos 7 dias)

Acesso rápido:

Novo chat

Upload de documento

// dashboard/page.tsx
export default function Dashboard() {
  return (
    <section>
      <h1>InsightAI Console</h1>
      <DashboardStats />
      <QuickActions />
    </section>
  );
}

2️⃣ Chat RAG (/dashboard/chat)

Funcionalidades

Chat contextual por sessão

Indicação visual de fontes usadas

Histórico persistente (Firestore)

Controle de contexto (on/off memória)

Fluxo

Usuário pergunta

API → InsightAI Engine

Resposta + fontes

Persistência da sessão

<MessageBubble
  role="assistant"
  text={answer}
  sources={sources}
/>

3️⃣ Gestão de Documentos (/dashboard/documents)

Funcionalidades

Upload (PDF, DOCX, TXT, CSV)

Categoria, versão, nível de acesso

Status:

Processando

Indexado

Erro

Histórico de versões

Upload Seguro

Firebase Storage

Trigger para pipeline de ingestão

<DocumentRow
  title="Contrato 2026"
  version="v3"
  accessLevel="confidential"
/>

4️⃣ Sessões & Memória (/dashboard/sessions)

O que o usuário vê

Lista de sessões

Última pergunta

Estratégia usada (RAG / fallback)

Reset de memória (se permitido)

Uso estratégico

Auditoria funcional

Continuidade de atendimento

Debug corporativo

5️⃣ Auditoria (/dashboard/audit)

Logs exibidos

Usuário

Ação

Recurso

Timestamp

Modelo usado

Exemplo

[12:01] rag.query — user: admin — docs: 3 — gemini


Somente admin e owner.

6️⃣ Controle de Acesso na UI (RBAC)

Renderização condicional:

if (!user.permissions.includes("document.write")) {
  hideUploadButton();
}


Rotas protegidas por middleware:

export function middleware(req) {
  validateAuth(req);
  validateTenant(req);
}

7️⃣ Design System (Enterprise)

Layout limpo

Foco em leitura

Estados claros (loading, erro, sucesso)

Componentes reutilizáveis:

ChatPanel

DocumentTable

AuditTable

AccessBadge

Integração com InsightAI Engine
Ação UI	Engine
Perguntar no chat	insightRouter()
Upload documento	ingest.pipeline()
Reset memória	memory.clear()
Auditoria	logEvent()
Resultado do Módulo 4

✅ Interface enterprise completa
✅ Operação segura e governada
✅ Pronta para usuários finais
✅ Escalável para times e empresas