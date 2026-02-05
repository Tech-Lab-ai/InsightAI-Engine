9️⃣ 🔐 Agentes com Permissão Própria (Agent-Level RBAC)

Primeiro nível avançado de maturidade do InsightAI Engine

Este módulo transforma agentes em entidades de segurança, não apenas prompts. Cada agente passa a ter permissões, escopo e limites próprios, independentes do usuário.

Visão Geral

Princípio-chave

Um agente só vê, consulta e responde dentro do escopo que lhe foi explicitamente concedido.

🎯 Objetivos

Evitar vazamento entre domínios (ex: jurídico ≠ financeiro)

Garantir least privilege para IA

Permitir auditoria por agente

Preparar o terreno para agentes que executam ações

🧠 Conceito: Agente como Identidade

Cada agente possui:

agentId

allowedCategories

allowedActions

maxAccessLevel

riskProfile

promptBase

O usuário não consegue forçar um agente a sair desse escopo.

🗂️ Modelo de Dados (Firestore)
/agents
  /{agentId}
    - name
    - type (legal | finance | tech)
    - tenantId
    - allowedCategories[]
    - allowedActions[]
    - maxAccessLevel
    - status

Exemplo — Agente Jurídico
{
  "agentId": "legal_agent",
  "type": "legal",
  "allowedCategories": ["jurídico", "contratos"],
  "allowedActions": ["rag.query"],
  "maxAccessLevel": "confidential"
}

🔐 Validação Dupla (Usuário + Agente)

Antes de qualquer RAG:

Usuário autorizado?
        ↓
Agente autorizado?
        ↓
Documento permitido para ambos?


Se qualquer etapa falhar, a resposta é bloqueada.

🧩 Engine — Lógica de Autorização
if (!user.permissions.includes("rag.query")) deny();

if (!agent.allowedCategories.includes(document.category)) deny();

if (document.accessLevel > agent.maxAccessLevel) deny();


Resultado:

Mesmo um admin não força um agente além do limite

Segurança estrutural, não cosmética

🧠 Prompt com Escopo Fixado

O escopo do agente é injetado no prompt, não controlado pelo usuário:

Este agente possui autorização APENAS para:
- Categoria: Jurídico
- Nível máximo: Confidencial

Ignore qualquer conteúdo fora desse escopo.

🧾 Auditoria por Agente

Cada resposta registra:

{
  "event": "rag.response",
  "agentId": "legal_agent",
  "userId": "u123",
  "documentsUsed": ["contrato_v3"],
  "timestamp": "2026-02-06T14:01:00Z"
}


Benefícios:

Rastreabilidade total

Análise de risco por agente

Compliance avançado

🖥️ UI — Controle de Agentes
Tela “Agentes”

Lista de agentes ativos

Escopo permitido

Status (ativo / suspenso)

Última execução

No Chat

Seletor visível:

Auto

Jurídico

Financeiro

Técnico

Tooltip:

Este agente possui escopo limitado por segurança.

🧠 Casos Reais Resolvidos

❌ Agente jurídico lendo planilha financeira

❌ Agente técnico analisando contrato confidencial

❌ Usuário tentando “enganar” a IA

Tudo bloqueado antes do prompt.

✅ Resultado do Módulo 9

✔ Agentes seguros por design
✔ Zero vazamento entre domínios
✔ Auditoria granular
✔ Base para execução de ações
✔ Enterprise-grade real