# Front-End Rules & Standards — InsightAI

Versão: 1.0  
Última atualização: 2026-02-06  
Responsável: InsightAI Frontend Architecture  

---

## 🎯 OBJETIVO DESTE DOCUMENTO

Este documento define **regras obrigatórias** para o desenvolvimento do front-end do InsightAI.

O objetivo é garantir:
- Organização
- Escalabilidade
- Manutenibilidade
- Consistência visual e semântica
- Conformidade enterprise (auditoria, segurança, i18n)

Estas regras **não são sugestões**.  
São **padrões de construção**.

---

## 🧠 PRINCÍPIOS FUNDAMENTAIS

1. **Frontend NÃO decide regras de negócio**
2. **Frontend NÃO aplica segurança**
3. **Frontend é determinístico e previsível**
4. **Frontend apenas representa estados**
5. **Tudo deve ser semanticamente nomeado**
6. **Código precisa escalar para times grandes**

---

## 🧱 STACK PADRÃO (OBRIGATÓRIA)

- Next.js (App Router)
- TypeScript (strict)
- Tailwind CSS
- Componentes funcionais
- Server Components por padrão
- Client Components apenas quando necessário

---

## 📂 ORGANIZAÇÃO DE PASTAS (FRONTEND)

/app
├─ layout.tsx
├─ page.tsx
├─ login/
│ └─ page.tsx
├─ plataforma/
│ └─ page.tsx
└─ seguranca/
└─ page.tsx

/components
├─ layout/
│ ├─ Header.tsx
│ ├─ Footer.tsx
│ └─ PageShell.tsx
├─ ui/
│ ├─ Button.tsx
│ ├─ Input.tsx
│ ├─ Badge.tsx
│ └─ Modal.tsx
└─ feedback/
├─ Alert.tsx
└─ EmptyState.tsx

/hooks
├─ useViewport.ts
└─ useDisclosure.ts

/styles
└─ globals.css


### ❌ Proibido
- Componentes genéricos sem semântica (`Box.tsx`, `Helper.tsx`)
- Misturar UI com regra de negócio
- Pastas `utils` genéricas

---

## 🧩 REGRAS DE COMPONENTES

### 1️⃣ Componentes PUROS (UI)

Componentes em `/components/ui` devem:
- Receber tudo via `props`
- Não acessar API
- Não acessar contexto global
- Não conter lógica de permissão
- Não conhecer rotas

Exemplo correto:
```tsx
<Button variant="primary" disabled />
2️⃣ Componentes de LAYOUT
Componentes de layout:

Apenas organizam estrutura visual

Não fazem fetch

Não fazem validação

Exemplo:

<PageShell>
  <Header />
  <Main />
  <Footer />
</PageShell>
3️⃣ Componentes de PÁGINA
Arquivos page.tsx:

Orquestram dados

Chamam hooks

Montam layout

Nunca contêm regra crítica

🧠 SERVER vs CLIENT COMPONENTS
Regra
Server Component é padrão

"use client" só quando necessário

Permitido usar Client Component para:
Interação (onClick, forms)

Estados locais

Modais

Inputs

Proibido
Client Component por conveniência

Lógica pesada no client

🔐 SEGURANÇA NO FRONTEND
Regra absoluta
Frontend nunca protege nada.

❌ ERRADO:

if (user.isAdmin) showAdminButton();
✅ CORRETO:

Backend decide

Frontend apenas recebe estado

O frontend:

Pode ocultar UI por UX

Nunca por segurança

🌍 INTERNACIONALIZAÇÃO (i18n)
Regras
Nenhum texto hardcoded

Tudo passa por i18n

Idioma definido por tenant

/locales
 ├─ pt-BR/common.json
 ├─ en-US/common.json
 └─ es-ES/common.json
🎨 ESTILIZAÇÃO (TAILWIND)
Regras
Usar tokens (cores, spacing)

Nada inline style

Nada CSS solto fora do padrão

Exemplo:

className="bg-primary text-white px-4 py-2 rounded-md"
🧪 ESTADOS DE UI OBRIGATÓRIOS
Todo fluxo deve prever:

Loading

Empty

Error

Success

Disabled

Nunca assumir sucesso implícito.

🧾 FORMULÁRIOS
Inputs controlados

Mensagens claras

Validação visual

Sem lógica de negócio

🧭 NOMENCLATURA (SEMÂNTICA)
❌ Ruim
Component.tsx

DataBox.tsx

Utils.ts

✅ Correto
LoginForm.tsx

PricingCard.tsx

SecurityBadge.tsx

📊 OBSERVABILIDADE DE UI
Frontend deve:

Emitir eventos de navegação

Emitir eventos de erro de UI

Nunca logar dados sensíveis

♿ ACESSIBILIDADE (OBRIGATÓRIA)
HTML semântico

aria-label quando necessário

Contraste adequado

Navegação por teclado

🚀 PERFORMANCE
Lazy loading quando necessário

Imagens otimizadas

Evitar re-render desnecessário

Bundle consciente

🧪 TESTABILIDADE
Componentes devem ser:

Pequenos

Previsíveis

Determinísticos

Testáveis isoladamente

🛑 O QUE O FRONTEND NÃO FAZ
Não valida permissões reais

Não executa ações críticas

Não decide fluxo de negócio

Não armazena segredos

Não conhece regras internas

✅ CHECKLIST DE QUALIDADE (ANTES DE MERGE)
 Código tipado

 Componentes pequenos

 Sem texto hardcoded

 Estados tratados

 Sem lógica de segurança

 Semântica clara

 Responsivo

🏁 CONCLUSÃO
O frontend do InsightAI é:

Limpo

Previsível

Auditável

Escalável

Enterprise-grade

Qualquer violação destas regras gera dívida técnica imediata.

InsightAI Frontend Standards — Não negociável.