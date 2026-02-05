'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutGrid,
  Building,
  Users,
  CreditCard,
  BarChart,
  Activity,
  ShieldCheck,
  Zap,
  Flag,
  LifeBuoy,
  Settings,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';

const menuItems = [
  { href: '/painel-admin/dashboard', label: 'Dashboard', icon: LayoutGrid },
  { href: '/painel-admin/empresas', label: 'Empresas', icon: Building },
  { href: '/painel-admin/usuarios', label: 'Usuários Globais', icon: Users },
  { href: '/painel-admin/billing', label: 'Billing & Receita', icon: CreditCard },
  { href: '/painel-admin/uso', label: 'Uso & Métricas', icon: BarChart },
  { href: '/painel-admin/telemetria', label: 'Telemetria & Eventos', icon: Activity },
  { href: '/painel-admin/seguranca', label: 'Segurança & Compliance', icon: ShieldCheck },
  { href: '/painel-admin/integracoes', label: 'Integrações Globais', icon: Zap },
  { href: '/painel-admin/feature-flags', label: 'Feature Flags', icon: Flag },
  { href: '/painel-admin/suporte', label: 'Suporte & Tickets', icon: LifeBuoy },
  { href: '/painel-admin/configuracoes', label: 'Configurações do Sistema', icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-[220px] flex-col border-r bg-secondary text-secondary-foreground md:flex lg:w-[280px]">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/painel-admin/dashboard">
          <Logo />
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4 py-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                pathname === item.href && 'bg-muted text-primary'
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
