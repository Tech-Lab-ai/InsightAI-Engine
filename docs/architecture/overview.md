📜 2️⃣ DOCS DE ARQUITETURA PARA AUDITOR (SOC 2 / ISO)
Documento: docs/architecture/overview.md
1. Visão Geral

O InsightAI é uma plataforma SaaS multi-tenant de inteligência documental com isolamento total entre clientes, governança de IA e auditoria contínua.

2. Separação de Ambientes

Dev / Staging / Prod isolados

Infraestrutura como código

Nenhum acesso cruzado

3. Segurança

Autenticação forte (MFA + FIDO2 para admin)

RBAC por usuário, agente e ação

Kill-switch automático de IA

Logs imutáveis

4. Dados

Cada tenant possui isolamento lógico

Dados criptografados em repouso e trânsito

Retenção configurável

Nenhum treino cruzado

5. IA & Governança

RAG governado

Agentes com permissão própria

Supervisor com bloqueio automático

Explicabilidade (XAI)

6. Auditoria

Logs centralizados

Relatórios automáticos

Evidências exportáveis

Histórico imutável

7. Continuidade

Multi-região

Failover

Backups automatizados

Testes periódicos

8. Conformidade

LGPD / GDPR

SOC 2 (Security, Availability, Confidentiality)

ISO 27001 (ISMS)

Declaração Final

A arquitetura foi projetada para atender requisitos regulatórios globais e auditorias independentes sem necessidade de retrabalho estrutural.

