Pipeline RAG – Fluxo Completo
1. Ingestão de Documentos

Entrada

Upload via dashboard (PDF, DOCX, TXT, CSV)

APIs externas (Drive, ERP, CRM)

Processos

OCR (se necessário)

Normalização e limpeza

Chunking inteligente (por semântica, não por tamanho fixo)

2. Vetorização

Modelo de embeddings no Vertex AI

Metadados enriquecidos:

{
  "document_id": "contrato_2026",
  "tenant_id": "empresa_x",
  "categoria": "jurídico",
  "versao": "v3",
  "nivel_acesso": "admin"
}


Armazenamento no Vertex Vector Search

3. Consulta em Tempo Real

Fluxo

Usuário pergunta no chat (Next.js)

InsightAI Engine:

Interpreta intenção

Define estratégia (top-k, filtros, re-ranking)

Busca vetorial semântica

Recuperação de trechos relevantes

4. Geração de Resposta (RAG)

Contexto + pergunta → Gemini (Vertex AI)

Prompt controlado (enterprise-safe):

Sem alucinação

Com citação de fontes

Resposta estruturada (texto, tabelas, JSON)