import { Logo } from "@/components/logo";
import { LoginForm } from "@/features/painel-admin/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="mx-auto grid w-[380px] gap-6 p-8 border rounded-lg shadow-sm">
          <div className="grid gap-2 text-center">
             <div className="flex justify-center mb-4">
                <Logo />
             </div>
            <h1 className="text-3xl font-bold font-headline">Acesse sua conta</h1>
            <p className="text-balance text-muted-foreground">
              Entre para gerenciar sua empresa na plataforma InsightAI.
            </p>
          </div>
          <LoginForm />
        </div>
    </div>
  );
}
