# TODO — FRONTEND ONLY — INSIGHTAI

Versão: 1.0  
Última atualização: 2026-02-06  
Responsável: InsightAI Frontend Core  

Este arquivo lista **EXCLUSIVAMENTE** as tarefas do **FRONTEND** do InsightAI.  
Nenhum item aqui envolve backend, engine, segurança real ou lógica de negócio.

---

## 🧭 REGRAS GERAIS

- Frontend **não decide regras**
- Frontend **não implementa segurança**
- Frontend **não acessa dados sensíveis**
- Frontend **representa estados recebidos**
- Tudo deve seguir `Front-End Rules & Standards.md`

---

# 🟢 FASE 1 — BASE DO FRONTEND

## Setup
- [ ] Criar app Next.js (App Router)
- [ ] Ativar TypeScript strict
- [ ] Configurar Tailwind CSS
- [ ] Configurar ESLint + Prettier
- [ ] Configurar estrutura de pastas padrão

---

# 🟡 FASE 2 — DESIGN SYSTEM

## Tokens
- [ ] Definir paleta de cores
- [ ] Definir tipografia
- [ ] Definir espaçamentos
- [ ] Definir estados (hover, disabled, error)

## Componentes Base
- [ ] Button
- [ ] Input
- [ ] Checkbox
- [ ] Select
- [ ] Badge
- [ ] Tooltip
- [ ] Modal
- [ ] Alert

---

# 🟠 FASE 3 — LAYOUT & NAVEGAÇÃO

## Layouts
- [ ] PageShell
- [ ] Header público
- [ ] Footer público
- [ ] Layout responsivo

## Navegação
- [ ] Menu principal
- [ ] Footer links
- [ ] Breadcrumb (se aplicável)

---

# 🔵 FASE 4 — SITE INSTITUCIONAL

## Páginas Públicas
- [ ] Home
- [ ] Plataforma
- [ ] Segurança
- [ ] Preços
- [ ] Contato

## Conteúdo
- [ ] Hero section
- [ ] Seção de benefícios
- [ ] Seção de segurança
- [ ] CTA final

---

# 🟣 FASE 5 — LOGIN DO CLIENTE

## Página `/login`
- [ ] Layout de login
- [ ] Formulário de email
- [ ] Formulário de senha
- [ ] Estados de loading
- [ ] Estados de erro
- [ ] Link “Esqueci minha senha”

## UX
- [ ] Validação visual
- [ ] Mensagens claras
- [ ] Acessibilidade

---

# 🔴 FASE 6 — INTERNACIONALIZAÇÃO

- [ ] Setup de i18n
- [ ] Remover textos hardcoded
- [ ] Criar arquivos `pt-BR`
- [ ] Criar arquivos `en-US`
- [ ] Criar arquivos `es-ES`

---

# 🟤 FASE 7 — ACESSIBILIDADE & QUALIDADE

## Acessibilidade
- [ ] HTML semântico
- [ ] Labels corretos
- [ ] Navegação por teclado
- [ ] Contraste adequado

## Estados de UI
- [ ] Loading
- [ ] Empty
- [ ] Error
- [ ] Success
- [ ] Disabled

---

# ⚫ FASE 8 — PERFORMANCE & POLIMENTO

- [ ] Otimizar imagens
- [ ] Lazy loading
- [ ] Evitar re-render desnecessário
- [ ] Testar mobile
- [ ] Testar desktop

---

# 🧪 FASE 9 — TESTES & REVISÃO

## Testes
- [ ] Testar componentes isolados
- [ ] Testar páginas críticas
- [ ] Testar navegação

## Revisão Final
- [ ] Sem lógica de backend
- [ ] Sem regras de segurança
- [ ] Sem textos hardcoded
- [ ] Código limpo
- [ ] Semântica clara

---

# 🏁 DEFINIÇÃO DE “PRONTO” (FRONTEND)

Um item só é considerado pronto quando:
- Código organizado
- Componentes reutilizáveis
- Acessível
- Responsivo
- Alinhado ao design system
- Revisado

---

## 📌 OBSERVAÇÃO FINAL

O frontend do InsightAI é:
- Leve
- Profissional
- Escalável
- Enterprise-grade

Qualquer atalho aqui vira **dívida visual e técnica** depois.

---

**InsightAI — Frontend bem feito não chama atenção, funciona.**