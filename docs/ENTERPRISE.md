🧱 1️⃣ TEMPLATE BASE DO MONOREPO (ENTERPRISE)
Estrutura física inicial (pronta para git init)
insightai/
├─ apps/
│  ├─ web-public/            # Site institucional
│  │  ├─ app/
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  │
│  ├─ web-console/           # Console do cliente
│  │  ├─ app/
│  │  ├─ middleware.ts
│  │  └─ page.tsx
│  │
│  ├─ web-admin/             # Admin Console (oculto)
│  │  ├─ app/
│  │  ├─ middleware-admin.ts
│  │  └─ page.tsx
│  │
│  └─ api/                   # API Gateway
│     ├─ chat/
│     ├─ actions/
│     └─ workflows/
│
├─ packages/
│  ├─ ui/                    # Design System (PURO)
│  │  ├─ layout/
│  │  ├─ feedback/
│  │  └─ data/
│  │
│  ├─ domain/                # Regras de negócio
│  │  ├─ tenant/
│  │  ├─ user/
│  │  └─ document/
│  │
│  ├─ insightai-engine/      # Cérebro da IA
│  │  ├─ router/
│  │  ├─ agents/
│  │  ├─ prompts/
│  │  └─ policies/
│  │
│  ├─ security/              # RBAC, MFA, FIDO2
│  │  ├─ authorization/
│  │  ├─ authentication/
│  │  └─ hardware-keys/
│  │
│  ├─ workflows/             # Engine de workflows
│  │  ├─ definitions/
│  │  └─ executor/
│  │
│  ├─ integrations/          # Slack, Jira, ERP
│  │  ├─ slack/
│  │  ├─ jira/
│  │  └─ erp/
│  │
│  ├─ observability/         # Logs, métricas, ROI
│  │  ├─ logging/
│  │  ├─ metrics/
│  │  └─ roi/
│  │
│  ├─ compliance/            # SOC2 / ISO
│  │  ├─ access-logs/
│  │  ├─ incidents/
│  │  ├─ audit-reports/
│  │  └─ evidence/
│  │
│  └─ config/                # Flags, envs
│     ├─ features/
│     └─ tenants/
│
├─ infrastructure/
│  ├─ terraform/
│  ├─ gcp/
│  ├─ firebase/
│  └─ ci-cd/
│
├─ docs/
│  ├─ architecture/
│  ├─ security/
│  ├─ compliance/
│  └─ legal/
│
├─ locales/
│  ├─ pt-BR/
│  ├─ en-US/
│  └─ es-ES/
│
├─ .env.example
├─ turbo.json
├─ tsconfig.base.json
└─ README.md

Regras aplicadas

Apps não conhecem domínio

Packages não conhecem UI

Nada cruza tenant

Tudo versionável

Tudo auditável