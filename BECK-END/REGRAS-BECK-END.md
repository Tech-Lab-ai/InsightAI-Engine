# Back-End Rules & Standards — InsightAI

Versão: 1.0  
Última atualização: 2026-02-06  
Responsável: InsightAI Backend Architecture  

---

## 🎯 OBJETIVO DESTE DOCUMENTO

Este documento define as **REGRAS OBRIGATÓRIAS** para construção do **back-end do InsightAI**.

O back-end é o **coração de segurança, governança e negócio** da plataforma.  
Qualquer decisão crítica **acontece aqui**, nunca no front-end.

Estas regras existem para garantir:
- Segurança enterprise
- Auditabilidade total
- Escalabilidade global
- Conformidade legal (SOC 2 / ISO)
- Manutenção por times grandes

---

## 🧠 PRINCÍPIOS FUNDAMENTAIS

1. **Backend é a autoridade final**
2. **Toda ação é validada, auditada e versionada**
3. **Nada confia no front-end**
4. **Nenhuma chamada pula camadas**
5. **Tudo é explícito, sem comportamento implícito**
6. **Falhar seguro é obrigatório**

---

## 🧱 STACK PADRÃO (OBRIGATÓRIA)

- Node.js (LTS)
- TypeScript (strict)
- API baseada em rotas explícitas
- Arquitetura modular / monorepo
- Infra como código
- Observabilidade nativa

---

## 📂 ORGANIZAÇÃO DE PASTAS (BACKEND)

/api
├─ chat/
│ ├─ route.ts
│ └─ handler.ts
├─ actions/
│ ├─ route.ts
│ └─ handler.ts
├─ workflows/
│ ├─ route.ts
│ └─ handler.ts
└─ health/
└─ route.ts

/packages
├─ domain/
│ ├─ tenant/
│ ├─ user/
│ ├─ document/
│ └─ permissions/
│
├─ insightai-engine/
│ ├─ router/
│ ├─ agents/
│ ├─ policies/
│ ├─ prompts/
│ └─ supervisor/
│
├─ security/
│ ├─ authentication/
│ ├─ authorization/
│ ├─ rbac/
│ └─ audit/
│
├─ workflows/
│ ├─ definitions/
│ ├─ executor/
│ └─ optimizer/
│
├─ integrations/
│ ├─ slack/
│ ├─ jira/
│ └─ erp/
│
└─ observability/
├─ logging/
├─ metrics/
└─ alerts/


### ❌ Proibido
- Pastas genéricas (`utils`, `helpers`)
- Lógica de negócio em rotas
- Código compartilhado sem contrato explícito

---

## 🔁 PIPELINE OBRIGATÓRIO DE EXECUÇÃO

Nenhuma request pode pular este fluxo:

Request
→ Authentication
→ Authorization (RBAC)
→ Policy Validation
→ Engine Decision
→ Execution
→ Audit Log
→ Response


Se qualquer etapa falhar → **bloqueio imediato**.

---

## 🔐 AUTENTICAÇÃO

### Regras
- Token-based (curta duração)
- Refresh controlado
- MFA para perfis sensíveis
- FIDO2 para admins

### Backend decide:
- Quem é o usuário
- De qual tenant
- Com qual papel

---

## 🛡️ AUTORIZAÇÃO (RBAC)

### RBAC multinível
- Usuário
- Agente
- Ação
- Documento

❌ ERRADO:
```ts
if (user.role === "admin")
✅ CORRETO:

authorize({
  user,
  agent,
  action,
  resource
});
🧠 INSIGHTAI ENGINE — REGRAS
Engine NÃO:
Recebe input direto do front

Executa ações sem validação

Usa contexto fora do tenant

Engine SEMPRE:
Aplica policies

Usa agentes autorizados

Registra auditoria

Retorna estado explícito

🧑‍⚖️ AGENTES (BACKEND)
Cada agente é uma entidade isolada

Permissões próprias

Prompt versionado

Métricas próprias

/agents/legal
/agents/finance
/agents/tech
/agents/supervisor
Agentes:

Não compartilham memória

Não compartilham permissões

Não executam fora do escopo

🔄 WORKFLOWS
Regras obrigatórias
Workflow sempre tem início e fim

Cada etapa é auditada

Pode pausar

Pode falhar

Pode ser revertido

Nenhuma automação “silenciosa”.

🤖 AÇÕES (EXECUÇÃO)
Ação é um contrato explícito
Nome

Inputs

Validações

Permissões

Executor

Rollback (quando aplicável)

Backend nunca executa ação sem confirmação, salvo políticas explícitas.

🧠 AGENTE SUPERVISOR (KILL-SWITCH)
O backend deve permitir que o Supervisor:

Suspenda agentes

Pause workflows

Bloqueie tenants

Revogue tokens

Sem intervenção humana prévia.

🧾 AUDITORIA (IMUTÁVEL)
Tudo é auditado
Login

Consulta

Resposta da IA

Ação executada

Erro

Bloqueio

{
  "event": "action.executed",
  "tenantId": "...",
  "userId": "...",
  "agentId": "...",
  "timestamp": "ISO8601"
}
Logs nunca são apagados.

📊 OBSERVABILIDADE
Backend deve emitir:

Latência

Erros

Uso

Custos

Qualidade (groundedness)

Sem dados sensíveis.

🌍 MULTI-TENANCY
Regras absolutas:

Tenant sempre explícito

Nenhuma query sem tenantId

Nenhum cache compartilhado

Nenhuma memória global

🧪 ERROS & EXCEÇÕES
Regras
Erros claros

Sem stacktrace ao cliente

Mensagens neutras

Códigos consistentes

Backend nunca expõe detalhes internos.

📜 VERSIONAMENTO
APIs versionadas

Prompts versionados

Workflows versionados

Contratos imutáveis

Nada muda silenciosamente.

🚀 PERFORMANCE & ESCALA
Stateless

Idempotência

Rate limit por tenant

Fila para jobs pesados

Execução assíncrona quando necessário

🛑 O BACKEND NÃO FAZ
Não confia em input do front

Não executa lógica implícita

Não ignora auditoria

Não compartilha contexto

Não faz “atalhos”

✅ CHECKLIST DE QUALIDADE (ANTES DE DEPLOY)
 Tipagem strict

 RBAC aplicado

 Auditoria registrada

 Tenant isolado

 Logs emitidos

 Erros tratados

 Policies testadas

🏁 CONCLUSÃO
O back-end do InsightAI é:

Autoritário

Seguro

Auditável

Escalável

Enterprise-grade

Qualquer violação destas regras compromete:

Segurança

Compliance

Escala

Valor do produto

InsightAI Backend Standards — Não negociável.