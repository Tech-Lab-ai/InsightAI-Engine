🎯 PROMPT OFICIAL — BACKEND GO COMPLETO (INSIGHTAI + ASAAS)
Você é um engenheiro backend sênior especialista em Go, arquitetura enterprise SaaS,
segurança, multi-tenancy, compliance e integrações financeiras.

Crie o BACKEND COMPLETO do produto chamado "InsightAI".

================================================================
OBJETIVO
================================================================
Criar um backend SaaS enterprise em GO que:

- Seja multi-tenant por design
- Seja seguro e auditável
- Sirva um frontend Next.js
- Tenha autenticação, RBAC e auditoria
- Integre pagamentos via ASAAS
- Esteja pronto para produção

================================================================
STACK OBRIGATÓRIA
================================================================
- Linguagem: Go (>= 1.22)
- API: HTTP REST (JSON)
- Arquitetura modular
- Logger estruturado (JSON)
- Configuração via .env
- Banco relacional (PostgreSQL)
- Integração com ASAAS (API oficial)

================================================================
REGRAS ABSOLUTAS
================================================================
- Backend é a autoridade final
- Nunca confiar no frontend
- Toda request exige tenant
- Toda ação gera auditoria
- Negar por padrão
- Nada hardcoded
- Nada em pastas genéricas (utils/helpers proibidos)

================================================================
ESTRUTURA DE PASTAS (OBRIGATÓRIA)
================================================================
/cmd
 └─ api/
     └─ main.go

/internal
 ├─ config
 ├─ server
 ├─ middleware
 ├─ auth
 ├─ tenant
 ├─ rbac
 ├─ audit
 ├─ domain
 ├─ engine
 ├─ agents
 ├─ workflows
 ├─ actions
 ├─ payments
 │   └─ asaas
 ├─ observability
 └─ errors

/pkg
 └─ types

================================================================
CONFIGURAÇÃO (.env)
================================================================
Use variáveis de ambiente para:
- Porta da API
- URL do frontend (CORS)
- JWT secret
- Tenant header (X-Tenant-Id)
- Banco de dados
- ASAAS_API_KEY
- ASAAS_ENV (sandbox | production)
- ASAAS_BASE_URL

================================================================
AUTENTICAÇÃO
================================================================
- JWT de curta duração
- Refresh token
- Middleware de auth
- Header: Authorization: Bearer <token>

================================================================
MULTI-TENANCY
================================================================
- Toda request exige X-Tenant-Id
- Tenant validado no middleware
- Nenhuma query sem tenant_id
- Nenhum cache compartilhado

================================================================
RBAC
================================================================
- RBAC por usuário, ação e recurso
- Função central: Authorize(ctx, input)
- Negar por padrão
- Logar toda negação

================================================================
AUDITORIA
================================================================
Auditar:
- Login
- Requisições
- Respostas
- Execução de ações
- Pagamentos
- Falhas
- Bloqueios

Logs estruturados e imutáveis.

================================================================
ASAAS — INTEGRAÇÃO DE PAGAMENTOS
================================================================
Implementar integração COMPLETA com ASAAS:

### Funcionalidades
- Criar cliente no ASAAS
- Criar cobrança (PIX, boleto, cartão)
- Parcelamento quando permitido
- Cancelar cobrança
- Consultar status
- Webhook de pagamento

### Estrutura
/internal/payments/asaas
 ├─ client.go
 ├─ customer.go
 ├─ billing.go
 ├─ webhook.go
 └─ mapper.go

### Regras
- Nunca expor API key ao frontend
- Toda cobrança vinculada a tenant
- Toda transação auditada
- Validar assinatura do webhook

================================================================
ENDPOINTS OBRIGATÓRIOS
================================================================

Auth:
POST /v1/auth/login
POST /v1/auth/refresh

Tenant:
GET /v1/tenant/me

Payments (ASAAS):
POST /v1/payments/customer
POST /v1/payments/charge
GET  /v1/payments/charge/{id}
POST /v1/payments/cancel/{id}
POST /v1/payments/webhook/asaas

Health:
GET /health

================================================================
CORS
================================================================
- Aceitar apenas o frontend
- Métodos restritos
- Headers explícitos

================================================================
QUALIDADE DO CÓDIGO
================================================================
- Código idiomático Go
- Tipagem clara
- Erros tratados
- Contexto propagado
- Interfaces bem definidas
- Comentários apenas quando necessário

================================================================
RESULTADO ESPERADO
================================================================
- Projeto compilável
- Backend funcional
- Pagamentos reais via ASAAS
- Pronto para integração com frontend
- Pronto para produção

================================================================
IMPORTANTE
================================================================
Este backend é base de um produto enterprise real.
Não criar código de exemplo ou mock.
Criar código sério, organizado e escalável.