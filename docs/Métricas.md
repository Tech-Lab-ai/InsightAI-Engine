6️⃣ Métricas, Observabilidade e Qualidade do RAG

Monitoramento enterprise-grade do InsightAI (pronto para produção)

Visão Geral

Objetivo

Medir qualidade das respostas

Detectar alucinação / baixo contexto

Controlar custos e latência

Garantir compliance e SLA

📊 O QUE MEDIR (KPIs ESSENCIAIS)
1️⃣ Qualidade da Resposta (RAG)

Context Coverage (%): quanto da resposta está ancorada em chunks

Answer Groundedness: score de aderência ao contexto

Top-K Hit Rate: % de vezes que o chunk correto apareceu no top-K

Fallback Rate: quantas respostas retornaram “não consta nos documentos”

2️⃣ Experiência do Usuário

Latency (p50 / p95 / p99)

Time to First Token

Sessões ativas

Perguntas por sessão

3️⃣ Custos e Uso

Tokens por resposta

Custo por sessão

Custo por tenant

Custo por documento indexado

4️⃣ Segurança e Compliance

Tentativas negadas por RBAC

Consultas fora de escopo

Acessos por nível (confidential, restricted)

🧠 MÉTRICAS DE RAG (COMO CALCULAR)
Context Coverage
tokens_usados_do_contexto / tokens_totais_da_resposta

Groundedness (heurístico)

Checagem de similaridade entre resposta ↔ chunks usados

Score de 0 a 1

Quality Flag
if (groundedness < 0.6 || contextCoverage < 0.5) {
  flag = "LOW_CONFIDENCE";
}

🧱 ARQUITETURA DE OBSERVABILIDADE

Fluxo

API / Chat → InsightAI Engine

Engine emite events estruturados

Firestore (logs) + BigQuery (analytics)

Dashboard de métricas (Next.js)

🧾 ESQUEMA DE EVENTOS (PADRÃO)
{
  "event": "rag.response",
  "tenantId": "empresa_x",
  "userId": "u123",
  "sessionId": "s456",
  "model": "gemini-vertex",
  "latencyMs": 1240,
  "tokens": 842,
  "contextCoverage": 0.71,
  "groundedness": 0.82,
  "fallback": false,
  "timestamp": "2026-02-06T12:10:00Z"
}

🧩 IMPLEMENTAÇÃO (ENGINE)
observability.ts
export async function logRagMetrics(data) {
  await firestore.collection("rag_metrics").add({
    ...data,
    createdAt: new Date()
  });
}

Uso no RAG Strategy
await logRagMetrics({
  tenantId,
  userId,
  sessionId,
  latencyMs,
  tokens,
  contextCoverage,
  groundedness,
  fallback
});

📈 DASHBOARD DE MÉTRICAS (UI)
Seções
Qualidade

Média de groundedness (7d / 30d)

Respostas com baixa confiança

Top documentos mais usados

Performance

Latência p95

Tokens por resposta

Sessões simultâneas

Segurança

Queries bloqueadas

Acessos por nível de confidencialidade

🚨 ALERTAS AUTOMÁTICOS
Regras Sugeridas

Groundedness < 0.5 (5x em 10 min)

Latência p95 > SLA

Custo diário > limite do tenant

Fallback rate > 30%

Ação

Notificação (Slack / Email)

Log crítico

Redução automática de top-K (opcional)

🧪 AVALIAÇÃO CONTÍNUA (RAG EVAL)
Dataset interno

Perguntas reais

Respostas esperadas

Documentos corretos

Métricas

Precision@K

Recall@K

Answer Match (semântico)

Executar:

Diariamente (staging)

Semanalmente (prod)

🔐 COMPLIANCE & AUDITORIA

Métricas não armazenam conteúdo sensível

IDs anonimizados quando necessário

Retenção configurável por tenant

Exportável para auditoria externa

✅ RESULTADO DO MÓDULO

✔ Observabilidade completa de IA
✔ Qualidade mensurável do RAG
✔ Controle de custo e SLA
✔ Base para melhoria contínua
✔ Enterprise-ready