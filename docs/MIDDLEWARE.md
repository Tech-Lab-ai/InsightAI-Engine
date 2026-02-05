🧩 2️⃣ MIDDLEWARE RBAC POR ROTA (Next.js)
Conceito

Nenhuma rota é acessada sem:

Usuário autenticado

Tenant válido

Permissão correta

Estrutura de Permissões por Rota
// rbac.config.ts
export const routePermissions = {
  "/dashboard": ["rag.query"],
  "/dashboard/chat": ["rag.query"],
  "/dashboard/documents": ["document.read"],
  "/dashboard/documents/upload": ["document.write"],
  "/dashboard/audit": ["audit.view"],
  "/dashboard/users": ["user.manage"]
};

Middleware Global
// middleware.ts
import { NextResponse } from "next/server";
import { routePermissions } from "./rbac.config";

export function middleware(req) {
  const user = getUserFromToken(req);
  const path = req.nextUrl.pathname;

  if (!user) {
    return NextResponse.redirect("/login");
  }

  const required = routePermissions[path];
  if (!required) return NextResponse.next();

  const hasPermission = required.every(p =>
    user.permissions.includes(p)
  );

  if (!hasPermission) {
    return NextResponse.redirect("/dashboard");
  }

  return NextResponse.next();
}

Resultado

Segurança centralizada

Zero lógica espalhada na UI

Escalável para enterprise