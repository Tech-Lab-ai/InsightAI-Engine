'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutGrid,
  MessageSquare,
  Workflow,
  BarChart,
  FileText,
  Users,
  CreditCard,
  Settings,
  LifeBuoy,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';

const menuItems = [
  { href: '/painel-admin/dashboard', label: 'Dashboard', icon: LayoutGrid },
  { href: '/painel-admin/chat', label: 'Chat', icon: MessageSquare },
  { href: '/painel-admin/workflows', label: 'Workflows', icon: Workflow },
  { href: '/painel-admin/documents', label: 'Documents', icon: FileText },
  { href: '/painel-admin/reports', label: 'Reports', icon: BarChart },
  { href: '/painel-admin/users', label: 'Users', icon: Users },
  { href: '/painel-admin/billing', label: 'Billing', icon: CreditCard },
  { href: '/painel-admin/settings', label: 'Settings', icon: Settings },
  { href: '/painel-admin/support', label: 'Support', icon: LifeBuoy },
];

export function DashboardSidebar() {
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
                pathname.startsWith(item.href) && 'bg-muted text-primary'
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
