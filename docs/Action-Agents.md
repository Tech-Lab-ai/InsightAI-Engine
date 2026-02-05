9️⃣.4 🤖 Agentes que Executam Ações (Action Agents)

Do “responder” para agir com segurança, governança e auditoria

Este módulo habilita agentes a executar ações reais (workflows) — sempre controladas por permissões, validações e confirmação — integradas ao InsightAI Engine.

Visão Geral

Princípio-chave

O agente propõe → o sistema valida → o usuário confirma → o agente executa → tudo é auditado.

🎯 Objetivos

Automatizar tarefas repetitivas

Reduzir erro humano

Manter least privilege

Garantir reversibilidade e logs

Escalar por departamento

🧠 Conceito: Ação como Contrato

Cada ação é um contrato explícito com:

Nome

Escopo

Entradas

Validações

Permissões

Efeitos colaterais

Exemplo de Ações

generate_report

open_ticket

validate_contract

update_document_status

trigger_workflow

🗂️ Modelo de Dados — Actions Registry
/actions
  /{actionId}
    - name
    - department
    - allowedAgents[]
    - requiredPermissions[]
    - requiresConfirmation
    - inputsSchema
    - executor
    - rollbackSupported

{
  "actionId": "generate_financial_report",
  "department": "financeiro",
  "allowedAgents": ["finance_agent"],
  "requiredPermissions": ["report.generate"],
  "requiresConfirmation": true,
  "rollbackSupported": false
}

🔐 Dupla Autorização (Usuário + Agente)

Antes de executar:

Usuário tem permissão?

Agente pode executar essa ação?

Departamento confere?

Tenant permite?

Validações passaram?

Falha em qualquer ponto → bloqueio.

🧩 Engine — Detecção de Intenção
if (intent === "action" && confidence > 0.8) {
  proposeAction(actionId, inputs);
}


O agente nunca executa direto.

🧾 Proposta de Ação (Preview)

O chat exibe um cartão de ação:

Ação proposta: Gerar Relatório Financeiro
Escopo: Financeiro
Entradas: Período: Jan–Mar
Impacto: Criação de documento
Confirmação: Necessária

Botões:

Confirmar

Cancelar

🧠 Prompt com Limites de Execução
Você pode APENAS propor ações listadas.
Nunca execute ações sem confirmação explícita.
Se faltar permissão, informe o motivo.

⚙️ Execução Técnica (Executor)
export async function executeAction(actionId, inputs, context) {
  validatePermissions(context);
  validateInputs(inputs);
  const result = await actionExecutors[actionId](inputs);
  logAction(result);
  return result;
}

🧪 Validações Obrigatórias

Schema de entrada (JSON Schema)

Limites (datas, valores)

Dry-run (quando aplicável)

Checagem de impacto

🧾 Auditoria (Imutável)
{
  "event": "action.executed",
  "actionId": "generate_financial_report",
  "agentId": "finance_agent",
  "userId": "u123",
  "inputs": { "period": "Q1" },
  "status": "success",
  "timestamp": "2026-02-06T16:40:00Z"
}

🖥️ UI — Estados da Ação

Proposta (aguardando confirmação)

Executando (loading)

Concluída (sucesso)

Falhou (mensagem clara)

Revertida (se suportado)

🧠 Exemplos por Departamento
Jurídico

Validar contrato

Gerar resumo de riscos

Abrir tarefa de revisão

Financeiro

Gerar relatório

Consolidar custos

Abrir ticket de ajuste

Técnico

Abrir issue

Atualizar status de incidente

Executar checklist

🔐 Segurança Avançada

Ações whitelist

Rate limit por tenant

Confirmação humana obrigatória

Logs completos

Rollback quando possível

✅ Resultado do Módulo 9.4

✔ Agentes que agem com segurança
✔ Automação auditável
✔ Zero execução silenciosa
✔ Controle total por permissão
✔ Pronto para ambientes críticos