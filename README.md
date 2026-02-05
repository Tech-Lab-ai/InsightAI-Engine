# InsightAI Platform

**Inteligência documental corporativa com governança, segurança e auditoria de nível enterprise.**

---

## 📌 Visão Geral

O **InsightAI** é uma plataforma SaaS de **IA governada** projetada para ambientes corporativos críticos.  
Ela transforma documentos internos em **respostas confiáveis**, **auditáveis** e **explicáveis**, eliminando riscos comuns de IA genérica (alucinação, vazamento de dados, falta de controle).

Diferente de chatbots tradicionais, o InsightAI:

- Responde **exclusivamente** com base nos documentos do cliente  
- Possui **governança de IA por design**  
- Oferece **auditoria completa**, **RBAC multinível** e **XAI**  
- Escala para **empresas, bancos, govtechs e ambientes regulados**

---

## 🎯 Objetivos do Projeto

- Centralizar inteligência documental corporativa  
- Garantir **segurança, compliance e rastreabilidade**  
- Automatizar processos com **workflows auditáveis**  
- Permitir adoção de IA sem comprometer risco jurídico ou operacional  

---

## 🧠 Principais Funcionalidades

### 🔍 Chat RAG Governado
- Baseado apenas em documentos do cliente
- Fallback explícito quando não há informação
- Score de groundedness e explicabilidade (XAI)

### 🧑‍⚖️ Agentes Especializados
- Jurídico
- Financeiro
- Técnico
- Supervisor (governança)

Cada agente possui:
- Permissões próprias
- Escopo limitado
- Métricas e auditoria dedicadas

### 🔄 Workflows Inteligentes
- Multi-etapas
- Aprovação humana
- Rollback
- Auto-otimização baseada em métricas reais

### 🤖 Agentes que Executam Ações
- Geração de relatórios
- Abertura de tickets
- Integrações com sistemas externos
- Sempre com validação e auditoria

### 🧠 Governança Avançada de IA
- Agente Supervisor com kill-switch automático
- Red Team simulado
- Detecção de drift e uso abusivo

---

## 🔐 Segurança & Compliance

- RBAC por **usuário, agente e ação**
- MFA obrigatório
- FIDO2 (hardware key) para admins
- Isolamento total por tenant
- Criptografia em repouso e em trânsito
- Logs imutáveis
- SOC 2 / ISO 27001 ready
- LGPD / GDPR compliant

---

## 🏗️ Arquitetura (Visão Técnica)

### Stack principal
- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Arquitetura monorepo**
- **Infra como código**

### Princípios
- Separação total de responsabilidades
- Nada compartilhado sem contrato explícito
- Segurança fora da UI
- Observabilidade nativa
- Escalabilidade global

---

## 🗂️ Estrutura do Repositório

insightai/
├─ apps/
│ ├─ web-public # Site institucional
│ ├─ web-console # Console do cliente
│ ├─ web-admin # Admin Console (oculto)
│ └─ api # API Gateway
│
├─ packages/
│ ├─ ui # Design system
│ ├─ domain # Regras de negócio
│ ├─ insightai-engine # Engine de IA
│ ├─ security # RBAC, MFA, FIDO2
│ ├─ workflows # Workflows
│ ├─ agents # Agentes especializados
│ ├─ integrations # ERP, Jira, Slack
│ ├─ observability # Logs, métricas, ROI
│ ├─ compliance # SOC2 / ISO
│ └─ config # Features e tenants
│
├─ infrastructure/
│ ├─ terraform
│ ├─ gcp
│ └─ ci-cd
│
├─ docs/
│ ├─ architecture
│ ├─ security
│ ├─ compliance
│ └─ legal
│
├─ locales/
│ ├─ pt-BR
│ ├─ en-US
│ └─ es-ES
│
└─ README.md


---

## 🔑 Rotas Importantes

### Públicas
- `/` — Site institucional
- `/plataforma`
- `/seguranca`
- `/precos`
- `/contato`
- `/login` — Login do cliente

### Restritas
- `/login-adm` — **Admin Console (não exposto)**
- `/admin/*` — Governança da plataforma

---

## 🧾 Documentação Oficial

A documentação completa está organizada em Markdown:

- `01_Product/` — Produto e visão
- `02_Technical/` — Arquitetura e engenharia
- `03_Security_Compliance/` — Segurança e auditoria
- `04_Legal/` — Termos, DPA, SLA
- `05_Commercial/` — Pricing, vendas, ROI
- `06_Operations/` — Onboarding e suporte

Esses arquivos são a **fonte oficial** para:
- PDFs
- Auditorias
- Clientes enterprise
- Investidores

---

## 🚀 Fluxo de Onboarding (Resumo)

1. Provisionamento do tenant  
2. Configuração de segurança  
3. Upload e classificação de documentos  
4. Ativação de agentes  
5. Testes controlados  
6. Go-live  

Tempo médio: **7 a 14 dias**

---

## 📊 Modelo de Negócio

- SaaS B2B
- Contratos anuais
- Pricing híbrido:
  - Fee fixo mensal
  - Uso variável (tokens, ações, workflows)
- Upsell:
  - White-label
  - Integrações
  - Ambientes dedicados

---

## 🧪 Qualidade & Auditoria

- Auditoria por resposta da IA
- Auditoria por ação e workflow
- Relatórios automáticos
- Evidências prontas para SOC 2 / ISO

---

## 🌍 Escalabilidade Global

- Multi-região
- Residência de dados configurável
- Idiomas múltiplos
- Compliance regional

---

## ⚠️ Aviso Importante

O InsightAI é um **sistema de apoio à decisão**.  
Respostas devem ser revisadas por profissionais qualificados antes de decisões críticas.

---

## 📄 Licença

Uso restrito conforme contrato comercial.  
Todos os direitos reservados ao InsightAI.

---

## 🤝 Contato

Para demonstrações, parcerias ou informações comerciais:

**Contato oficial:**  
support@insightai.com (exemplo)

---

## ✅ Status do Projeto

✔ Arquitetura definida  
✔ Documentação enterprise pronta  
✔ Segurança e compliance incorporados  
✔ Pronto para implementação, venda e escala  

---

**InsightAI — IA confiável para decisões reais.**# InsightAI-Engine
##Vini Amaral##
**Engenharia de Software • Tech Labss • Arquitetura Cloud •**

**Projeto desenvolvido com foco em automação real, infraestrutura moderna e liberdade criativa para desenvolvedores.**
