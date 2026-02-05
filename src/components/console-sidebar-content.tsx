import Link from "next/link";
import {
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  Users,
  Settings,
  ShieldCheck,
  MessageSquare,
  FileText,
  LayoutGrid,
  Layers,
  HelpCircle,
} from "lucide-react";
import { Logo } from "./logo";
import { usePathname } from "next/navigation";
import { UserNav } from "./user-nav";

const menuItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutGrid },
  { href: "/chat", label: "Chat IA", icon: MessageSquare },
  { href: "/documents", label: "Documentos", icon: FileText },
  { href: "/sessions", label: "Sessões", icon: Layers },
  { href: "/audit", label: "Auditoria", icon: ShieldCheck },
  { href: "/users", label: "Usuários", icon: Users },
];

const bottomMenuItems = [
    { href: "/settings", label: "Configurações", icon: Settings },
    { href: "#", label: "Ajuda", icon: HelpCircle },
];

export function ConsoleSidebarContent() {
  const pathname = usePathname();
  
  return (
    <>
      <SidebarHeader>
        <Link href="/dashboard" className="flex items-center gap-2">
          <Logo />
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} legacyBehavior passHref>
                <SidebarMenuButton
                  asChild
                  isActive={pathname.startsWith(item.href)}
                  tooltip={item.label}
                >
                  <a>
                    <item.icon />
                    <span>{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="hidden md:flex">
         <SidebarMenu>
            {bottomMenuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                    <SidebarMenuButton
                    asChild
                    isActive={pathname.startsWith(item.href)}
                    tooltip={item.label}
                    >
                    <a>
                        <item.icon />
                        <span>{item.label}</span>
                    </a>
                    </SidebarMenuButton>
                </Link>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
        <SidebarSeparator />
        <div className="p-2">
            <UserNav />
        </div>
      </SidebarFooter>
    </>
  );
}
