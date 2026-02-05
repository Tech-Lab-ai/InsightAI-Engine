2️⃣ Esquema Firestore + RBAC + Multi-Tenant

Base de segurança, isolamento e governança do InsightAI Engine

Este módulo define como usuários, empresas e documentos coexistem com isolamento total, garantindo controle de acesso, versionamento e auditoria para o pipeline RAG empresarial.

🎯 Objetivos do Módulo

Isolamento multi-tenant real

Controle de acesso por papel + escopo

Compatibilidade com RAG por metadados

Auditoria e compliance (LGPD / Enterprise)

🧱 Modelo Multi-Tenant (Fundação)

Regra de ouro
👉 Nenhum dado é acessado sem tenant_id.

🗂️ Estrutura de Collections (Firestore)
/tenants
  /{tenantId}
    - name
    - plan
    - status
    - createdAt

/users
  /{userId}
    - tenantId
    - role
    - permissions[]
    - email
    - status

/documents
  /{documentId}
    - tenantId
    - title
    - category
    - version
    - accessLevel
    - storagePath
    - createdBy
    - createdAt
    - updatedAt

/document_chunks
  /{chunkId}
    - tenantId
    - documentId
    - vectorId
    - accessLevel
    - metadata

/chat_sessions
  /{sessionId}
    - tenantId
    - userId
    - startedAt
    - contextStrategy

/audit_logs
  /{logId}
    - tenantId
    - userId
    - action
    - resource
    - timestamp

🧑‍💼 RBAC – Papéis e Permissões
Papéis Padrão
Role	Acesso
owner	Tudo
admin	Usuários + documentos
editor	Upload / edição
viewer	Consulta
ai_agent	Leitura controlada (RAG)
Permissions (granular)
document.read
document.write
document.delete
user.manage
rag.query
rag.ingest
audit.view


O InsightAI Engine valida permissões antes de:

Buscar vetores

Injetar contexto no prompt

Gerar resposta

🔐 Firebase Auth + Custom Claims

Exemplo de claims no login:

{
  "tenant_id": "empresa_x",
  "role": "admin",
  "permissions": [
    "document.read",
    "rag.query"
  ]
}


Essas claims:

São lidas no Next.js API

Replicadas como filtros no Vector Search

Aplicadas no prompt RAG

📄 Controle de Acesso por Documento

Campo accessLevel:

public
internal
restricted
confidential


Validação:

user.accessLevel >= document.accessLevel


O RAG nunca recebe chunks não autorizados.

🔎 Filtros Vetoriais (RAG-safe)

Antes da busca:

{
  "tenantId": "empresa_x",
  "accessLevel": { "$lte": "user_level" },
  "category": "jurídico"
}


Isso garante:

Isolamento total

Performance

Compliance

🧾 Auditoria (Obrigatória)

Cada ação relevante gera log:

Ação	Exemplo
Upload	document.upload
Consulta RAG	rag.query
Exclusão	document.delete
Login	auth.login

Exemplo:

{
  "action": "rag.query",
  "userId": "u123",
  "documentIds": ["docA", "docB"],
  "model": "gemini-vertex",
  "timestamp": "2026-02-05T12:01:00Z"
}

🔁 Versionamento de Documentos

Regra:

Documento novo não sobrescreve

Nova versão = novo documentId

Campo previousVersionId

Benefício:

RAG sempre usa versão ativa

Histórico preservado

🧠 Integração com InsightAI Engine

O Engine:

Valida claims

Aplica RBAC

Filtra vetores

Injeta contexto autorizado

Loga tudo

Nenhuma etapa é opcional.

✅ Resultado do Módulo 2

✔ Multi-tenant real
✔ RAG seguro por design
✔ Escalável para centenas de empresas
✔ Pronto para auditoria corporativa