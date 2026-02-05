# InsightAI — Backend (Go)

**Backend enterprise em Go para a plataforma InsightAI**  
Seguro, auditável, multi-tenant e preparado para escala global.

---

## 📌 Visão Geral

Este repositório contém o **BACKEND em Go** do InsightAI.  
Ele é a **autoridade central** de:

- Segurança
- Autorização (RBAC)
- Governança de IA
- Execução de agentes
- Workflows auditáveis
- Auditoria imutável
- Multi-tenancy

👉 **Nada crítico acontece no frontend.**  
👉 **Nada confia no frontend.**

---

## 🎯 Responsabilidades do Backend

O backend é responsável por:

- Autenticar usuários e admins
- Resolver tenant em toda requisição
- Aplicar RBAC multinível
- Executar o InsightAI Engine
- Orquestrar agentes e workflows
- Executar ações com validação
- Registrar auditoria imutável
- Emitir métricas e logs
- Aplicar kill-switch automático

---

## 🧠 Princípios Arquiteturais

1. **Backend é a autoridade final**
2. **Negar por padrão**
3. **Tudo é explícito**
4. **Nada pula camadas**
5. **Falhar seguro é obrigatório**
6. **Tudo é auditável**
7. **Multi-tenant por design**

---

## 🧱 Stack Tecnológica

- **Go** (>= 1.22)
- HTTP API (REST/JSON)
- Arquitetura modular
- Logger estruturado (JSON)
- Observabilidade nativa
- Infra como código (fora deste repo)

---

## 📂 Estrutura do Projeto

.
├─ cmd/
│ └─ api/
│ └─ main.go # Bootstrap da aplicação
│
├─ internal/
│ ├─ config/ # Configuração e env
│ ├─ server/ # HTTP server
│ ├─ middleware/ # Middlewares globais
│ ├─ auth/ # Autenticação
│ ├─ rbac/ # Autorização
│ ├─ tenant/ # Multi-tenancy
│ ├─ audit/ # Auditoria imutável
│ ├─ domain/ # Regras de negócio
│ ├─ engine/ # InsightAI Engine
│ ├─ agents/ # Agentes de IA
│ ├─ workflows/ # Workflows
│ ├─ actions/ # Ações executáveis
│ ├─ integrations/ # Integrações externas
│ ├─ observability/ # Logs, métricas, alertas
│ └─ errors/ # Erros padronizados
│
├─ pkg/
│ └─ types/ # Tipos públicos (contratos)
│
├─ go.mod
├─ go.sum
└─ README.md


### Regras de Estrutura
- `cmd/` **apenas inicia** a aplicação
- Toda lógica vive em `/internal`
- Nada fora do módulo acessa `/internal`
- Nenhuma pasta genérica (`utils`, `helpers`)

---

## 🔁 Pipeline Obrigatório de Execução

Nenhuma requisição pode pular este fluxo:

Request
→ Authentication
→ Tenant Resolution
→ RBAC Authorization
→ Policy Validation
→ Engine Decision
→ Action / Workflow Execution
→ Audit Log
→ Response


Falha em qualquer etapa → **bloqueio imediato**.

---

## 🔐 Autenticação

- Token de acesso (curta duração)
- Refresh token controlado
- MFA para perfis sensíveis
- Admin preparado para FIDO2 (WebAuthn)

O backend sempre resolve:
- Quem é o usuário
- Qual o tenant
- Quais permissões possui

---

## 🛡️ Autorização (RBAC)

RBAC é aplicado por:
- Usuário
- Agente
- Ação
- Recurso (documento, workflow, integração)

❌ Proibido:
```go
if user.Role == "admin" { ... }
✅ Obrigatório:

Authorize(ctx, AuthorizationInput{
  UserID:   userID,
  TenantID: tenantID,
  Action:   action,
  Resource: resource,
})
🧠 InsightAI Engine (Backend)
O Engine:

Nunca recebe input direto do frontend

Nunca executa sem policy

Nunca acessa outro tenant

Sempre registra auditoria

Pipeline lógico:

Input → Policy → Agent → Workflow → Action → Audit → Output
🤖 Agentes
Agentes são entidades isoladas:

Jurídico

Financeiro

Técnico

Supervisor (governança)

Cada agente possui:

Escopo fixo

Permissões próprias

Prompt versionado

Métricas e auditoria dedicadas

🔄 Workflows
Workflows são:

Multi-etapas

Auditáveis

Pausáveis

Reversíveis (quando aplicável)

Nenhuma automação silenciosa é permitida.

⚙️ Ações
Ações são contratos explícitos:

Nome

Schema de input

Validação forte

Permissões

Executor isolado

Rollback (se aplicável)

Nenhuma ação executa sem:

Autorização

Registro de auditoria

🧾 Auditoria
Tudo é auditado:

Login

Consulta

Resposta da IA

Execução de ação

Falhas

Bloqueios

Kill-switch

Logs:

Estruturados

Imutáveis

Exportáveis (SOC 2 / ISO)

📊 Observabilidade
O backend emite:

Logs estruturados

Métricas de latência

Métricas de erro

Uso por tenant

Estimativa de custo

Sem dados sensíveis.

🌍 Multi-Tenancy
Regras absolutas:

tenantID sempre explícito

Nenhuma query sem tenant

Nenhuma cache compartilhada

Nenhuma memória global

Violação disso é falha crítica.

🚨 Agente Supervisor (Kill-Switch)
O Supervisor pode:

Suspender agentes

Pausar workflows

Bloquear tenants

Revogar tokens

Encerrar execuções

Sem intervenção humana prévia.

🧪 Testes
Testes obrigatórios:

Unitários (domain, rbac)

Unitários (engine)

Integração (API)

Testes de abuso básicos

Sem testes → sem deploy.

🚀 Build & Execução
Build
go build ./cmd/api
Run (local)
go run ./cmd/api
Health Check
GET /health
🛑 O Backend NÃO Faz
Não confia no frontend

Não executa lógica implícita

Não ignora auditoria

Não compartilha contexto

Não faz “atalhos”

🏁 Definição de “Pronto”
Um backend só é considerado pronto quando:

Código idiomático Go

Erros tratados

Logs emitidos

Auditoria registrada

RBAC aplicado

Testes passando

Documentação atualizada

📄 Licença
Software proprietário.
Uso restrito conforme contrato comercial.

InsightAI Backend — Go, seguro e feito para durar.

