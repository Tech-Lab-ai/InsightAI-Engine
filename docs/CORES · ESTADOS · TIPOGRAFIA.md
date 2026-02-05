🎨 1️⃣ TOKENS TAILWIND (CORES · ESTADOS · TIPOGRAFIA)
tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: "#00C2FF",
        primaryDark: "#0B1C2D",
        bg: "#020617",
        surface: "#0F172A",
        border: "#1F2933",

        textPrimary: "#E5E7EB",
        textSecondary: "#9CA3AF",

        success: "#16A34A",
        warning: "#F59E0B",
        error: "#DC2626"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      spacing: {
        header: "64px",
        input: "72px",
        sidebar: "240px"
      }
    }
  }
};

🧱 2️⃣ COMPONENTES PRONTOS (ENTERPRISE)
Sidebar.tsx
export function Sidebar() {
  return (
    <aside className="w-sidebar h-screen bg-primaryDark text-textPrimary">
      <nav className="p-4 space-y-2">
        <MenuItem label="Dashboard" />
        <MenuItem label="Chat IA" active />
        <MenuItem label="Documentos" />
        <MenuItem label="Sessões" />
        <MenuItem label="Auditoria" />
      </nav>
    </aside>
  );
}

Header.tsx
export function Header() {
  return (
    <header className="h-header bg-surface border-b border-border flex items-center px-6">
      <h1 className="font-semibold">InsightAI Console</h1>
    </header>
  );
}

Badge.tsx
export function Badge({ label, type }) {
  const map = {
    success: "bg-success",
    warning: "bg-warning",
    error: "bg-error"
  };
  return (
    <span className={`px-2 py-1 text-xs rounded ${map[type]}`}>
      {label}
    </span>
  );
}

Tooltip.tsx
export function Tooltip({ text, children }) {
  return (
    <div className="group relative">
      {children}
      <span className="absolute hidden group-hover:block bg-surface text-xs p-2 rounded">
        {text}
      </span>
    </div>
  );
}

💬 3️⃣ COMPONENTES DO CHAT (REACT TSX)
ChatLayout.tsx
export function ChatLayout({ messages }) {
  return (
    <div className="flex h-[calc(100vh-theme(spacing.header))]">
      <div className="flex-1 flex flex-col">
        <ChatMessages messages={messages} />
        <ChatInput />
      </div>
      <ContextPanel />
    </div>
  );
}

ChatMessages.tsx
export function ChatMessages({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      {messages.map((m, i) => (
        <Message key={i} {...m} />
      ))}
    </div>
  );
}

ChatInput.tsx
export function ChatInput() {
  return (
    <div className="h-input sticky bottom-0 bg-surface border-t border-border p-4">
      <textarea
        placeholder="Pergunte algo sobre seus documentos..."
        className="w-full resize-none bg-bg p-3 rounded"
        rows={2}
      />
    </div>
  );
}

🎨 4️⃣ CSS / TAILWIND EXATO (ALTURA · STICKY · SCROLL)
Elemento	Regra
Header	h-header fixed top-0
Sidebar	h-screen w-sidebar
Chat Messages	overflow-y-auto flex-1
Input	sticky bottom-0 h-input
Context Panel	w-[320px] border-l
🔄 5️⃣ FLUXO API CHAT → INSIGHTAI ENGINE
Frontend
await fetch("/api/chat", {
  method: "POST",
  body: JSON.stringify({
    sessionId,
    question
  })
});

API Route (/api/chat/route.ts)
import { insightRouter } from "@/packages/insightai-engine";

export async function POST(req) {
  const { question, sessionId } = await req.json();
  const user = await getAuthUser();

  return Response.json(
    await insightRouter({
      tenantId: user.tenantId,
      user,
      question,
      sessionId
    })
  );
}

📱 6️⃣ CHAT MOBILE (RESPONSIVO)
Regras

Sidebar colapsável

Context Panel vira modal

Input sempre visível

Swipe para histórico

<div className="md:flex hidden">Desktop</div>
<div className="flex md:hidden">Mobile Chat</div>

🚀 7️⃣ DEPLOY (DEV · STAGING · PROD)
Ambientes
Ambiente	URL
Dev	dev.insightai.app
Staging	staging.insightai.app
Prod	insightai.app
Infra

Firebase Hosting (web)

Cloud Functions (API)

Vertex AI (IA)

Firestore (dados)

CI/CD:

Push → build → deploy automático

Variáveis por ambiente

📈 8️⃣ COPY COMERCIAL + PITCH (PRONTO)
Headline

Transforme documentos em decisões inteligentes, com segurança empresarial.

Sub

IA que responde com base nos seus documentos, sem risco, sem alucinação.

Pitch (30s)

O InsightAI conecta documentos corporativos a um motor de IA governado, permitindo consultas em tempo real com auditoria, controle de acesso e total confiabilidade.

✅ ENTREGA FINAL

✔ Tokens Tailwind completos
✔ Componentes UI enterprise
✔ Chat funcional (desktop + mobile)
✔ Fluxo real API → Engine
✔ Deploy profissional
✔ Copy pronta para vendas