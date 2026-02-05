InsightAI Engine – Núcleo Inteligente
Funções-Chave

Roteamento dinâmico de prompts

Memória de sessão e longo prazo

Regras de compliance

Fallback automático

Observabilidade de respostas

Exemplo de Estratégia
Se pergunta = jurídica
→ buscar apenas documentos categoria=jurídico
→ usar prompt legal
→ limitar criatividade

Segurança e Governança (Enterprise)

🔐 Multi-tenant isolado

🔐 ACL por documento e chunk

🔐 Firebase Auth + Custom Claims

🔐 Logs de:

Perguntas

Documentos usados

Versão do modelo

🔐 Auditoria e LGPD-ready

Estrutura do Projeto (Clean & Escalável)
/apps
 ├─ web (Next.js)
 │   ├─ app/
 │   ├─ components/
 │   ├─ chat/
 │   └─ admin/
 ├─ api
 │   ├─ rag/
 │   ├─ ingest/
 │   └─ auth/
 /packages
 ├─ insightai-engine
 │   ├─ router.ts
 │   ├─ memory.ts
 │   ├─ policies.ts
 │   └─ prompts/
 ├─ vector-client
 └─ vertex-client

Casos de Uso Estratégicos

📑 Leitura de contratos em segundos

📊 Business Intelligence documental

🏛️ Compliance e auditoria automatizada

🤖 Assistente corporativo privado

🧠 Base de conhecimento viva