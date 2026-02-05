7️⃣ AVALIAÇÃO AUTOMÁTICA DE DOCUMENTOS

Document Quality Scoring Engine

Objetivo

Garantir que somente documentos de qualidade alimentem o RAG, evitando:

respostas fracas

contexto insuficiente

risco jurídico ou operacional

Visão Geral do Fluxo

Pipeline

Upload → Análise → Score → Classificação → Decisão RAG

🔍 O QUE É AVALIADO NO DOCUMENTO
1️⃣ Estrutura

Possui títulos?

Texto contínuo ou fragmentado?

OCR confiável?

2️⃣ Clareza

Linguagem objetiva?

Frases completas?

Baixa ambiguidade?

3️⃣ Relevância Semântica

Conteúdo denso ou superficial?

Palavras-chave coerentes com categoria?

4️⃣ Atualidade

Versão recente?

Documento expirado?

5️⃣ Risco

Termos sensíveis?

Ambiguidade jurídica?

Falta de definição formal?

📊 SCORE FINAL DO DOCUMENTO
Escala
0.0 ─────────────────── 1.0

Classificação
Score	Status	Uso no RAG
≥ 0.80	Excelente	Prioritário
0.60–0.79	Bom	Normal
0.40–0.59	Fraco	Baixa prioridade
< 0.40	Crítico	❌ Bloqueado
🧠 LÓGICA DE DECISÃO (ENGINE)
if (doc.score < 0.4) {
  excludeFromVectorIndex();
}

if (doc.score < 0.6) {
  reduceWeightInSearch();
}


Resultado:

Documentos ruins não contaminam respostas

RAG fica mais confiável automaticamente

🧾 METADADOS SALVOS
{
  "documentId": "contrato_2023_v1",
  "qualityScore": 0.82,
  "clarity": 0.78,
  "structure": 0.91,
  "risk": 0.12,
  "status": "approved"
}

🖥️ UI — QUALIDADE DO DOCUMENTO
O usuário vê:

Score geral

Avisos automáticos

Sugestões de melhoria

Histórico por versão

🧠 BENEFÍCIO DIRETO NO CHAT

Antes:

“Resposta vaga ou incompleta”

Depois:

“Resposta objetiva, com base em documentos confiáveis”

✅ RESULTADO DO MÓDULO 7

✔ RAG mais preciso
✔ Menos fallback
✔ Menos risco
✔ Qualidade controlada automaticamente
✔ Base pronta para agentes especializados