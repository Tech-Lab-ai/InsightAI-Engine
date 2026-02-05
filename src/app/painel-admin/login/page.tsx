import { Logo } from "@/components/logo";
import { AdminLoginForm } from "@/features/painel-admin/auth/components/AdminLoginForm";

export default function AdminLoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="mx-auto grid w-[380px] gap-6 p-8 border rounded-lg shadow-sm bg-card">
          <div className="grid gap-2 text-center">
             <div className="flex justify-center mb-4">
                <Logo />
             </div>
            <h1 className="text-2xl font-bold font-headline">Painel Administrativo</h1>
            <p className="text-balance text-muted-foreground">
              Acesso exclusivo para operadores da plataforma.
            </p>
          </div>
          <AdminLoginForm />
        </div>
    </div>
  );
}
