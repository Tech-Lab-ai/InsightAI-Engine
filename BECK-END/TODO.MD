# TODO — BACKEND ONLY (GO) — INSIGHTAI

Versão: 1.0  
Última atualização: 2026-02-06  
Responsável: InsightAI Backend Core (Go)

Este arquivo define **EXCLUSIVAMENTE** o TODO do **BACKEND em Go** do InsightAI.  
Nada aqui envolve frontend, design, conteúdo ou marketing.

---

## 🧭 REGRAS FUNDAMENTAIS (GO BACKEND)

- Backend é a **autoridade final**
- Nada confia no frontend
- Toda request é validada
- Toda ação é auditada
- Toda lógica é explícita
- Falhar seguro é obrigatório

---

# 🟢 FASE 1 — BASE DO PROJETO EM GO

## Setup Inicial
- [ ] Criar módulo Go (`go mod init insightai`)
- [ ] Definir versão mínima do Go (>= 1.22)
- [ ] Estrutura inicial de pastas
- [ ] Configurar `.env` + loader
- [ ] Configurar logger estruturado (JSON)
- [ ] Configurar graceful shutdown
- [ ] Criar health check (`/health`)

---

# 🟡 FASE 2 — ESTRUTURA DE PASTAS (GO)

## Estrutura obrigatória
/cmd
└─ api/
└─ main.go

/internal
├─ config
├─ server
├─ middleware
├─ auth
├─ rbac
├─ tenant
├─ audit
├─ domain
├─ engine
├─ agents
├─ workflows
├─ actions
├─ integrations
├─ observability
└─ errors

/pkg
└─ types


### Regras
- [ ] `cmd` apenas inicia a aplicação
- [ ] Toda lógica fica em `/internal`
- [ ] Nada fora do módulo acessa `/internal`
- [ ] Nenhuma pasta genérica (`utils`, `helpers`)

---

# 🟠 FASE 3 — HTTP SERVER & MIDDLEWARE

## Server
- [ ] Criar HTTP server padrão
- [ ] Configurar timeouts
- [ ] Configurar CORS (restritivo)
- [ ] Versionamento de API (`/v1`)

## Middleware Obrigatório
- [ ] Request ID
- [ ] Logger
- [ ] Recover (panic-safe)
- [ ] Auth middleware
- [ ] Tenant resolver
- [ ] RBAC enforcement
- [ ] Rate limit por tenant

---

# 🔵 FASE 4 — AUTENTICAÇÃO (BACKEND)

## Auth
- [ ] Estrutura de usuário
- [ ] Tokens de acesso (curta duração)
- [ ] Refresh tokens
- [ ] MFA (interface pronta)
- [ ] Bloqueio por tentativas falhas

## Admin
- [ ] Flag `platform_admin`
- [ ] Sessão curta
- [ ] Preparação para FIDO2 (WebAuthn)

---

# 🟣 FASE 5 — MULTI-TENANCY

## Tenant
- [ ] Resolver tenant por request
- [ ] Validar tenant ativo
- [ ] Isolamento obrigatório em queries
- [ ] Nenhuma cache compartilhada

## Regras
- [ ] Toda função recebe `tenantID`
- [ ] Nenhuma query sem tenant explícito

---

# 🔴 FASE 6 — RBAC (AUTORIZAÇÃO)

## RBAC Core
- [ ] Modelo de permissões
- [ ] Usuário → Papéis
- [ ] Agente → Permissões
- [ ] Ação → Escopo
- [ ] Documento → Nível de acesso

## Enforcement
- [ ] Função única `Authorize(ctx)`
- [ ] Negar por padrão
- [ ] Logar toda negação

---

# 🧠 FASE 7 — INSIGHTAI ENGINE (GO)

## Engine Core
- [ ] Estrutura de pipeline
- [ ] Policy validation
- [ ] Agent router
- [ ] Action dispatcher
- [ ] Response builder

## RAG (estrutura)
- [ ] Interface de busca vetorial
- [ ] Filtros por tenant
- [ ] Score de groundedness
- [ ] Fallback explícito

---

# 🤖 FASE 8 — AGENTES (GO)

## Agentes Base
- [ ] Interface `Agent`
- [ ] Agente Jurídico
- [ ] Agente Financeiro
- [ ] Agente Técnico
- [ ] Agente Supervisor

## Regras
- [ ] Prompt versionado
- [ ] Escopo fixo
- [ ] Permissões próprias
- [ ] Nenhum agente executa fora do escopo

---

# 🔄 FASE 9 — WORKFLOWS

## Workflow Engine
- [ ] Definição de workflow
- [ ] Execução por etapas
- [ ] Pausa / retomada
- [ ] Falha controlada
- [ ] Rollback (quando aplicável)

## Auditoria
- [ ] Log por etapa
- [ ] Status persistido

---

# ⚙️ FASE 10 — AÇÕES (EXECUÇÃO)

## Actions
- [ ] Registry de ações
- [ ] Schema de input
- [ ] Validação forte
- [ ] Confirmação obrigatória
- [ ] Executor isolado

---

# 📊 FASE 11 — OBSERVABILIDADE

## Logs
- [ ] Logs estruturados
- [ ] Logs de auditoria
- [ ] Logs de erro

## Métricas
- [ ] Latência
- [ ] Erros
- [ ] Uso por tenant
- [ ] Custo estimado

---

# 🚨 FASE 12 — AGENTE SUPERVISOR (KILL-SWITCH)

- [ ] Avaliação de risco
- [ ] Suspensão de agentes
- [ ] Pausa de workflows
- [ ] Bloqueio de tenant
- [ ] Registro imutável

---

# 🔐 FASE 13 — SEGURANÇA AVANÇADA

- [ ] Proteção contra replay
- [ ] Rate limit avançado
- [ ] Secrets management
- [ ] Rotação de chaves
- [ ] Testes de abuso

---

# 🧪 FASE 14 — TESTES (GO)

## Testes Obrigatórios
- [ ] Unitários (domain)
- [ ] Unitários (rbac)
- [ ] Unitários (engine)
- [ ] Integração (API)
- [ ] Testes de carga básicos

---

# 📦 FASE 15 — BUILD & DEPLOY

- [ ] Build reproducível
- [ ] Dockerfile
- [ ] Config por ambiente
- [ ] Health probes
- [ ] Rollback simples

---

# 🏁 DEFINIÇÃO DE “PRONTO” (BACKEND GO)

Um item só é considerado pronto quando:
- Código idiomático Go
- Tipagem clara
- Erros tratados
- Logs emitidos
- Auditoria registrada
- Testes passando
- Documentação atualizada

---

## 📌 OBSERVAÇÃO FINAL

O backend Go do InsightAI deve ser:
- Determinístico
- Seguro
- Auditável
- Escalável
- Fácil de operar

Qualquer atalho aqui vira **risco legal, técnico e financeiro**.

---

**InsightAI — Backend em Go feito para durar.**