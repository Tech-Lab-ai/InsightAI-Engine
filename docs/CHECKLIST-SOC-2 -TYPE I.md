🧪 1️⃣ CHECKLIST SOC 2 TYPE I / TYPE II (EXECUTÁVEL)
Visão rápida

Type I → desenho dos controles (momento no tempo)

Type II → eficácia dos controles (período contínuo, ex: 6–12 meses)

🔐 SECURITY (obrigatório)
Acesso & Identidade

 RBAC implementado por usuário, agente e ação

 MFA ativo para todos os usuários privilegiados

 FIDO2 obrigatório para admins

 Sessões com expiração automática

 Logs de login imutáveis

Evidência

Logs de acesso

Política de controle de acesso

Capturas do Admin Console

🧠 IA & CONTROLES DE PROCESSAMENTO

 RAG governado (sem conhecimento externo)

 Agentes com permissão própria

 Kill-switch automático ativo

 Prompt versionado

 Auditoria por resposta da IA

Evidência

Logs do InsightAI Engine

Relatórios de bloqueio do Supervisor

🔄 CHANGE MANAGEMENT

 Código versionado

 Pull request obrigatório

 Aprovação dupla para produção

 Log de mudanças automático

 Rollback documentado

🚨 INCIDENT RESPONSE

 Plano de resposta formal

 Classificação de incidentes

 Alertas automáticos

 Simulação de incidente realizada

 Post-mortem registrado

📦 DATA MANAGEMENT

 Isolamento por tenant

 Criptografia em repouso e trânsito

 Política de retenção

 Exclusão sob solicitação

 Backups testados

⏱️ AVAILABILITY

 SLA definido

 Monitoramento 24/7

 Failover testado

 Multi-região configurado

📜 PRIVACY

 Política de privacidade publicada

 DPA assinado

 LGPD/GDPR atendidos

 Registro de processamento

📌 DIFERENÇA TYPE I vs TYPE II
Item	Type I	Type II
Controles definidos	✅	✅
Evidência pontual	✅	❌
Evidência contínua	❌	✅
Logs históricos	❌	✅
Duração	Auditoria única	6–12 meses