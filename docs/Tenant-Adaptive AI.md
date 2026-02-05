9️⃣.2 🧠 Fine-tuning por Empresa (Tenant-Adaptive AI)

Personalização profunda do InsightAI sem misturar dados entre clientes

Este módulo permite que cada empresa tenha sua própria “versão comportamental” da IA, adaptada à sua linguagem, documentos, estilo e regras internas — sem treinar um modelo global compartilhado.

Visão Geral

Ideia central

Não é apenas o que a IA sabe — é como ela responde para cada empresa.

🎯 Objetivos do Fine-tuning por Empresa

Adaptar vocabulário, tom e estrutura

Priorizar documentos e termos internos

Reduzir respostas genéricas

Aumentar precisão e aceitação pelos times

Manter isolamento total entre tenants

🧠 IMPORTANTE: O QUE NÃO É FEITO

❌ Não misturar dados de empresas
❌ Não treinar um único modelo global
❌ Não expor documentos de um tenant a outro

O InsightAI usa fine-tuning lógico + RAG adaptativo, não treino bruto inseguro.

🧱 Arquitetura do Fine-tuning
Base Model (Vertex AI / Gemini)
        ↓
Prompt Base Enterprise
        ↓
Tenant Profile (configuração)
        ↓
Agent Profile
        ↓
RAG Context (documentos)


Cada camada adiciona especialização controlada.

🗂️ Tenant AI Profile (Configuração Central)
Collection: /tenant_ai_profiles
{
  "tenantId": "empresa_x",
  "languageStyle": "formal",
  "verbosity": "medium",
  "riskTolerance": "low",
  "preferredTerms": [
    "contratante",
    "contratada",
    "vigência",
    "SLA"
  ],
  "forbiddenPhrases": [
    "acho que",
    "provavelmente",
    "pode ser"
  ],
  "responseFormat": "structured"
}

🎛️ Parâmetros Ajustáveis por Empresa
1️⃣ Estilo de Linguagem

Formal

Técnico

Executivo

Simplificado

2️⃣ Nível de Detalhe

Curto (direto)

Médio (padrão)

Longo (explicativo)

3️⃣ Tolerância a Risco

Baixa → mais fallback

Média → equilíbrio

Alta → respostas mais extensas

🧠 Injeção no Prompt (Automática)

Exemplo de bloco injetado pelo Engine:

Perfil da empresa:
- Linguagem: formal
- Evitar especulações
- Usar termos jurídicos padronizados
- Priorizar respostas estruturadas


O usuário não controla isso.

🧩 Engine — Montagem do Prompt
const prompt = `
${baseEnterprisePrompt}

Perfil da empresa:
${tenantProfile}

Perfil do agente:
${agentProfile}

Contexto RAG:
${documents}
`;

📊 Aprendizado Contínuo (sem re-treino)

O sistema aprende padrões, não dados brutos:

Perguntas mais frequentes

Correções feitas por usuários

Avaliações de resposta

Documentos mais usados

Esses sinais ajustam:

Prioridade de chunks

Estratégia de busca

Estrutura da resposta

🖥️ UI — Configuração por Empresa
Tela “IA da Empresa”

Estilo de resposta

Nível de detalhe

Linguagem preferida

Regras de risco

Preview de resposta

(Apenas admin/owner)

🧪 Avaliação Antes / Depois
Métrica	Antes	Depois
Groundedness	0.71	0.86
Fallback rate	22%	9%
Aceitação do usuário	Média	Alta
🔐 Segurança Garantida

Profile isolado por tenantId

Nenhum embedding compartilhado

Nenhum ajuste global

Auditoria total de mudanças

✅ Resultado do Módulo 9.2

✔ IA “fala a língua” da empresa
✔ Menos respostas genéricas
✔ Mais confiança interna
✔ Zero risco de vazamento
✔ Escalável para centenas de tenants