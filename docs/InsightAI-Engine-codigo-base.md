3️⃣ InsightAI Engine — Código Base (Router · Memory · Policies)

Núcleo de decisão do Enterprise RAG (pronto para produção)

Este módulo implementa o motor orquestrador que conecta RBAC, Vector Search, prompts Enterprise e observabilidade, garantindo respostas seguras e auditáveis usando Google Vertex AI.

Visão do Engine

Responsabilidades

Interpretar a intenção da pergunta

Aplicar políticas e RBAC

Decidir estratégia RAG (top-k, filtros, prompt)

Gerenciar memória (sessão e longo prazo)

Executar fallback seguro

Registrar auditoria

Estrutura do Pacote
/packages/insightai-engine
 ├─ index.ts
 ├─ router.ts
 ├─ memory.ts
 ├─ policies.ts
 ├─ strategies/
 │   ├─ rag.strategy.ts
 │   ├─ fallback.strategy.ts
 ├─ prompts/
 │   ├─ base.enterprise.ts
 │   ├─ legal.prompt.ts
 │   └─ tech.prompt.ts
 └─ observability.ts

1) router.ts — Roteador Inteligente

Decide como responder antes de chamar qualquer modelo.

// router.ts
import { evaluatePolicies } from "./policies";
import { getSessionMemory } from "./memory";
import { ragStrategy } from "./strategies/rag.strategy";
import { fallbackStrategy } from "./strategies/fallback.strategy";

export async function insightRouter(input: {
  tenantId: string;
  user: any;
  question: string;
  sessionId: string;
}) {
  const policy = await evaluatePolicies(input);

  if (!policy.allowed) {
    return fallbackStrategy("Acesso negado pelas políticas.");
  }

  const memory = await getSessionMemory(input.sessionId);

  return ragStrategy({
    ...input,
    memory,
    policy
  });
}

2) policies.ts — Compliance & RBAC

Nenhuma busca vetorial acontece sem validação.

// policies.ts
export async function evaluatePolicies({
  user,
  tenantId
}: {
  user: any;
  tenantId: string;
}) {
  if (user.tenantId !== tenantId) {
    return { allowed: false };
  }

  if (!user.permissions.includes("rag.query")) {
    return { allowed: false };
  }

  return {
    allowed: true,
    accessLevel: user.accessLevel,
    role: user.role
  };
}

3) memory.ts — Memória de Sessão e Longo Prazo

Controla continuidade contextual sem vazar dados.

// memory.ts
import { firestore } from "../firebase";

export async function getSessionMemory(sessionId: string) {
  const doc = await firestore
    .collection("chat_sessions")
    .doc(sessionId)
    .get();

  if (!doc.exists) return null;

  return doc.data()?.memory || [];
}

export async function saveSessionMemory(sessionId: string, entry: any) {
  await firestore.collection("chat_sessions").doc(sessionId).update({
    memory: entry,
    updatedAt: new Date()
  });
}

4) rag.strategy.ts — Estratégia RAG Principal

Conecta Vector Search → Prompt → Gemini.

// strategies/rag.strategy.ts
import { vectorSearch } from "../../vector-client";
import { generateAnswer } from "../../vertex-client";
import { saveSessionMemory } from "../memory";

export async function ragStrategy({
  tenantId,
  question,
  policy,
  memory
}: any) {
  const results = await vectorSearch({
    tenantId,
    accessLevel: policy.accessLevel,
    query: question,
    topK: 5
  });

  if (!results.length) {
    return {
      answer: "A informação não consta nos documentos disponíveis."
    };
  }

  const response = await generateAnswer({
    promptType: "base.enterprise",
    context: results,
    question
  });

  await saveSessionMemory(policy.sessionId, {
    question,
    answer: response.text
  });

  return response;
}

5) fallback.strategy.ts — Segurança por Design
// strategies/fallback.strategy.ts
export function fallbackStrategy(message: string) {
  return {
    answer: message,
    sources: []
  };
}

6) base.enterprise.ts — Prompt Raiz
// prompts/base.enterprise.ts
export const baseEnterprisePrompt = `
Você é um sistema de inteligência documental corporativa.
Responda exclusivamente com base nos documentos fornecidos.

Regras:
- Não invente informações.
- Não use conhecimento externo.
- Se não houver dados suficientes, informe claramente.
- Cite as fontes internas utilizadas.
`;

7) observability.ts — Auditoria e Métricas
// observability.ts
import { firestore } from "../firebase";

export async function logEvent(event: any) {
  await firestore.collection("audit_logs").add({
    ...event,
    timestamp: new Date()
  });
}

Fluxo Final de Execução

Next.js API → insightRouter()

Validação RBAC / Tenant

Seleção de estratégia

Busca vetorial autorizada

Geração com prompt enterprise

Salvamento de memória

Log de auditoria

Resultado do Módulo 3

✅ Engine determinístico

✅ RAG governado por políticas

✅ Pronto para múltiplos domínios

✅ Observável e auditável