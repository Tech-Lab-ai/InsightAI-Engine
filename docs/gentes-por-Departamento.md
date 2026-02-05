9️⃣.3 🏢 Agentes por Departamento

Sub-especialização interna por área, mantendo o mesmo tenant

Este módulo permite que uma mesma empresa tenha múltiplos agentes especializados por departamento, cada um com escopo documental, regras, linguagem e métricas próprias.

Resultado: o Jurídico não “fala” como o Financeiro, e o RH não responde como o time Técnico — mesmo dentro da mesma empresa.

Visão Geral da Arquitetura
Tenant (Empresa)
 ├─ Agente Jurídico
 │   ├─ Contratos
 │   └─ Compliance
 ├─ Agente Financeiro
 │   ├─ Custos
 │   └─ Relatórios
 ├─ Agente RH
 │   ├─ Políticas
 │   └─ Benefícios
 └─ Agente Técnico
     ├─ APIs
     └─ Infra

🎯 Objetivos

Separar responsabilidade semântica por área

Reduzir risco de interpretação errada

Aumentar precisão e confiança

Permitir métricas e auditoria por departamento

🧠 Conceito-chave

Departamento = contexto + regras + documentos + linguagem

O usuário continua o mesmo.
O agente muda conforme a área.

🗂️ Modelo de Dados (Firestore)
Collection: /department_agents
{
  "agentId": "finance_agent",
  "tenantId": "empresa_x",
  "department": "financeiro",
  "allowedCategories": [
    "financeiro",
    "relatorios",
    "orcamento"
  ],
  "languageStyle": "executivo",
  "verbosity": "structured",
  "riskTolerance": "low",
  "default": false,
  "status": "active"
}

🧩 Relação Usuário × Departamento
Collection: /user_departments
{
  "userId": "u123",
  "tenantId": "empresa_x",
  "departments": [
    "juridico",
    "financeiro"
  ]
}

Regra

Usuário só vê e usa agentes dos departamentos permitidos

Admin pode ver todos

🔀 Roteamento Automático (Engine)
Estratégia de decisão

Usuário seleciona agente (se permitido)

Se não selecionar → Engine tenta inferir

Se ambíguo → usa agente padrão da empresa

Exemplo de inferência
if (question.includes("cláusula")) agent = "juridico";
if (question.includes("custo") || question.includes("valor")) agent = "financeiro";
if (question.includes("API")) agent = "tecnico";

🧠 Prompt com Contexto Departamental

Bloco injetado automaticamente:

Departamento ativo: Financeiro
Regras:
- Linguagem executiva
- Respostas estruturadas em tópicos ou tabelas
- Não interpretar cláusulas jurídicas
- Usar apenas documentos financeiros autorizados


O usuário não altera isso.

🖥️ UI — Seletor de Departamento no Chat
Comportamento

Dropdown “Agente”

Opções filtradas por permissão

Default automático por perfil do usuário

Exemplo:

Agente ativo: Financeiro ▾
- Jurídico
- Financeiro ✓
- Técnico

📊 Métricas por Departamento

Cada agente gera métricas próprias:

Groundedness médio

Fallback rate

Latência

Uso por usuário

Documentos mais consultados

Isso permite:

Melhorar documentos de um setor específico

Ajustar regras sem impactar outros

🔐 Segurança Reforçada

Mesmo tenant, escopos isolados:

Jurídico não acessa Financeiro

RH não acessa Técnico

Auditoria separada por departamento

Prompt, busca e resposta isolados

🧠 Casos Reais Resolvidos

❌ Financeiro interpretando cláusula legal

❌ RH analisando SLA técnico

❌ Resposta “genérica” para pergunta específica

Tudo evitado por especialização estrutural.

✅ Resultado do Módulo 9.3

✔ IA especializada por área
✔ Menos ambiguidade
✔ Mais confiança interna
✔ Governança clara
✔ Base perfeita para agentes que executam ações