🧱 REGRA DE CONSTRUÇÃO — INSIGHTAI (ENTERPRISE-GRADE)
Princípios Obrigatórios (não negociáveis)

Semântica explícita em tudo

Separação total de responsabilidades

Nada compartilhado sem contrato

Tudo auditável

Tudo escalável

Nada “rápido” que vire dívida técnica

🧠 PRINCÍPIO DE SEMÂNTICA

Cada coisa tem um nome, um propósito e um dono claro.

❌ Errado

/utils/helpers.ts


✅ Correto

/security/authorization/validateAccess.ts

🗂️ ESTRUTURA GLOBAL DO MONOREPO
/apps
 ├─ web-public          # Site institucional
 ├─ web-console         # Console do cliente
 ├─ web-admin           # Admin Console (oculto)
 ├─ api                 # API Gateway (Next / Edge)

/packages
 ├─ ui                  # Design system (componentes puros)
 ├─ domain              # Regras de negócio (sem UI)
 ├─ insightai-engine    # Cérebro da IA
 ├─ security            # RBAC, MFA, FIDO2, policies
 ├─ compliance          # SOC2, ISO, auditoria, relatórios
 ├─ workflows           # Engine de workflows
 ├─ agents              # Agentes (jurídico, financeiro…)
 ├─ integrations        # ERP, Slack, Jira
 ├─ observability       # Logs, métricas, ROI
 ├─ config              # Feature flags, env, tenants

/infrastructure
 ├─ terraform
 ├─ firebase
 ├─ gcp
 ├─ ci-cd

/docs
 ├─ architecture
 ├─ security
 ├─ legal
 ├─ compliance


👉 Apps não conhecem lógica de negócio.
👉 Packages não conhecem UI.

🧩 REGRA DE COMPONENTES (UI)
Componentes PUROS (em /packages/ui)

Sem API

Sem auth

Sem estado global

Apenas props

/ui
 ├─ layout
 │   ├─ Header.tsx
 │   ├─ Sidebar.tsx
 │   └─ PageShell.tsx
 ├─ feedback
 │   ├─ Badge.tsx
 │   ├─ Alert.tsx
 │   └─ Tooltip.tsx
 ├─ data
 │   ├─ Table.tsx
 │   └─ EmptyState.tsx

Componentes DE PÁGINA (nos apps)

Orquestram

Chamam hooks

Nunca contêm regra crítica

🧱 REGRA DE LAYOUT
Layouts são estruturais, não visuais
PageShell
 ├─ Header
 ├─ Sidebar
 └─ MainContent


❌ Layout com lógica de negócio
✅ Layout apenas posiciona

🔐 REGRA DE SEGURANÇA NO CÓDIGO
Segurança NÃO fica na UI

❌

if (user.isAdmin) showButton();


✅

middleware → policy → engine → resposta


A UI apenas reage, nunca decide.

🧠 REGRA DO INSIGHTAI ENGINE
input
 → policy
 → agent
 → workflow
 → action
 → audit
 → response


Nada pula etapas.
Nada chama o modelo direto.

🗂️ REGRA DE AGENTES
/agents
 ├─ legal
 │   ├─ permissions.ts
 │   ├─ prompt.ts
 │   └─ actions.ts
 ├─ finance
 └─ tech


Cada agente é autônomo

Não compartilha permissões

Não compartilha contexto

🔄 REGRA DE WORKFLOWS
/workflows
 ├─ contract-review.workflow.ts
 ├─ monthly-report.workflow.ts


Cada workflow:

tem início

tem fim

tem rollback

tem auditoria

📜 REGRA DE COMPLIANCE (SOC / ISO)

Tudo que é exigido por auditor:

está em /packages/compliance

gera evidência automática

não depende de humano

/compliance
 ├─ access-logs
 ├─ incident-reports
 ├─ change-management
 └─ audit-export

🧑‍⚖️ REGRA JURÍDICA (SaaS)

Termos não ficam hardcoded

Tudo versionado

Aceite rastreável

/legal
 ├─ terms.v1.md
 ├─ privacy.v1.md
 └─ dpa.v1.md

🌍 REGRA DE INTERNACIONALIZAÇÃO

Texto nunca fica no componente

Tudo passa por i18n

/locales
 ├─ pt-BR
 ├─ en-US
 └─ es-ES

📦 REGRA DE DEPLOY

Dev / Staging / Prod isolados

Infra como código

Rollback em 1 comando

🧠 REGRA DE ESCALABILIDADE

Se algo:

cresce → vira package

vira crítico → vira domínio

vira risco → vira compliance

🏁 RESULTADO DESSA REGRA

Com essa base você consegue:

✔ Certificação SOC 2 / ISO sem retrabalho
✔ Auditoria jurídica tranquila
✔ Lançar em múltiplos países
✔ White-label sem gambiarra
✔ Escalar time sem caos
✔ Vender para enterprise sem medo