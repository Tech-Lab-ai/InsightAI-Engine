🛡️ PAINEL DE ADMINISTRAÇÃO — ADMIN CONSOLE (OCULTO)
🔐 REGRA FUNDAMENTAL DE ACESSO

❌ NÃO aparece no site público

❌ NÃO aparece no menu do usuário

❌ NÃO possui link interno visível

✅ Acesso exclusivo:
https://dominio.com/login-adm

Segurança adicional:

URL não indexada (noindex)

Middleware exclusivo

Permissão platform.admin

2FA obrigatório

Log de tentativas de acesso

🧭 OBJETIVO DO PAINEL ADMIN

O Admin Console serve para:

Gerenciar tenants (empresas)

Controlar agentes e IA

Supervisionar custos, ROI e uso

Administrar white-label

Garantir compliance e segurança

Atuar como governança central da plataforma

🧱 ESTRUTURA DE ROTAS (ADMIN)
/login-adm
/admin
 ├─ dashboard
 ├─ tenants
 ├─ usuarios
 ├─ agentes
 ├─ workflows
 ├─ custos
 ├─ roi
 ├─ integracoes
 ├─ auditoria
 ├─ seguranca
 ├─ configuracoes

🧑‍💼 PERFIL DE ACESSO
Papel: platform_admin

Permissões exclusivas:

Criar / suspender tenants

Ver uso global

Configurar limites

Ativar recursos

Pausar agentes

Intervir em workflows

Ver auditoria global

🏠 ADMIN DASHBOARD (/admin/dashboard)
Cards principais

Tenants ativos

Usuários totais

Ações executadas (24h)

Custo total (dia / mês)

ROI agregado

Alertas críticos

🏢 TENANTS (/admin/tenants)
Funções

Criar empresa

Suspender / reativar

Definir plano

Limites (tokens, ações)

Região (dados)

White-label

Visual

Tabela

Status (ativo / suspenso)

Uso atual

SLA

👤 USUÁRIOS GLOBAIS (/admin/usuarios)

Buscar por email

Ver tenant

Papel

Último acesso

Bloquear acesso

⚠️ Somente leitura operacional
(Admin não gerencia usuários internos do cliente)

🧠 AGENTES (/admin/agentes)

Ver todos os agentes

Status (ativo / suspenso)

Taxa de erro

Qualidade média

Suspender agente problemático

Forçar rollback

🔄 WORKFLOWS (/admin/workflows)

Lista global de workflows

Execuções em tempo real

Etapas com falha

Pausar workflow

Reexecutar etapa

Ver histórico completo

💰 CUSTOS (/admin/custos)

Custo por tenant

Custo por agente

Custo por ação

Alertas de estouro

Limites automáticos

📊 ROI (/admin/roi)

ROI agregado global

ROI por cliente

Top workflows mais rentáveis

Ações com melhor retorno

🔗 INTEGRAÇÕES (/admin/integracoes)

Status das integrações

Tokens válidos / expirados

Falhas recentes

Revogação imediata

📜 AUDITORIA GLOBAL (/admin/auditoria)

Todas as ações críticas

Filtros por:

Tenant

Agente

Usuário

Exportação para compliance

🔐 SEGURANÇA (/admin/seguranca)

Tentativas de acesso ao /login-adm

IPs suspeitos

Bloqueio manual

Chaves e tokens

Políticas globais

⚙️ CONFIGURAÇÕES (/admin/configuracoes)

Planos e pricing

Limites padrão

Features flags

Regiões ativas

Manutenção

🔒 MIDDLEWARE DE PROTEÇÃO (CRÍTICO)
if (!user || !user.permissions.includes("platform.admin")) {
  redirect("/404");
}


⚠️ Nunca redirecionar para login comum
Isso evita descoberta da rota admin.

🧾 TEXTO DE AJUDA (ADMIN)

Este painel é restrito à administração da plataforma.
Todas as ações são auditadas e irreversíveis sem autorização superior.

✅ RESULTADO FINAL

✔ Painel invisível ao usuário final
✔ Acesso exclusivo por rota secreta
✔ Governança total da plataforma
✔ Controle financeiro e técnico
✔ Pronto para SaaS enterprise