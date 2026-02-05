"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    LayoutGrid,
    MessageSquare,
    Workflow,
    BarChart,
    FileText,
    Settings,
    Users,
    CreditCard,
} from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const menuItems = [
    { 
        type: 'link',
        href: "/dashboard", 
        label: "Dashboard", 
        icon: LayoutGrid 
    },
    { 
        type: 'link',
        href: "/chat", 
        label: "Chat", 
        icon: MessageSquare
    },
    {
        type: 'dropdown',
        label: "Workflows",
        icon: Workflow,
        basePath: "/workflows",
        subItems: [
            { href: "/workflows", label: "Visão Geral" },
            { href: "/workflows/running", label: "Em Execução" },
            { href: "/workflows/history", label: "Histórico" },
            { href: "/workflows/create", label: "Criar Workflow" },
        ]
    },
    {
        type: 'dropdown',
        label: "Relatórios",
        icon: BarChart,
        basePath: "/reports",
        subItems: [
            { href: "/reports", label: "Resumo" },
            { href: "/reports/usage", label: "Uso & Atividade" },
            { href: "/reports/roi", label: "Análise de ROI" },
            { href: "/reports/audit", label: "Auditoria" },
        ]
    },
    {
        type: 'dropdown',
        label: "Documentos",
        icon: FileText,
        basePath: "/documents",
        subItems: [
            { href: "/documents", label: "Todos os Documentos" },
            { href: "/documents/upload", label: "Upload de Documento" },
            { href: "/documents/categories", label: "Categorias" },
            { href: "/documents/permissions", label: "Permissões" },
        ]
    },
    { 
        type: 'link',
        href: "/users", 
        label: "Usuários", 
        icon: Users 
    },
    { 
        type: 'link',
        href: "/billing", 
        label: "Faturamento", 
        icon: CreditCard
    },
    { 
        type: 'link',
        href: "/settings", 
        label: "Configurações", 
        icon: Settings
    },
];


export function Sidebar() {
    const pathname = usePathname();

    const getBasePath = (path: string) => {
        const parts = path.split('/').filter(Boolean);
        if (parts.length > 1) {
            const potentialBasePath = `/${parts[0]}`;
            const isTopLevelBase = menuItems.some(item => item.type === 'dropdown' && item.basePath === potentialBasePath);
            if (isTopLevelBase) return potentialBasePath;
        }
        if (parts.length > 0) {
            return `/${parts[0]}`;
        }
        return '/';
    }

    const defaultAccordionValue = menuItems.find(item => {
        if (item.type !== 'dropdown') return false;
        
        return pathname.startsWith(item.basePath);
    })?.basePath;

    const isSubItemOf = (subItems: {href:string}[], basePath: string) => {
        return subItems.some(sub => pathname.startsWith(sub.href));
    }


    return (
        <aside className="hidden w-[220px] flex-col border-r bg-secondary text-secondary-foreground md:flex lg:w-[280px]">
            <div className="flex h-full flex-col gap-2 pt-4">
                <div className="flex-1 overflow-y-auto">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        <Accordion type="single" collapsible defaultValue={defaultAccordionValue} className="w-full">
                        {menuItems.map((item) => {
                            if (item.type === 'link') {
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                                            pathname === item.href && "bg-muted text-primary"
                                        )}
                                    >
                                        <item.icon className="h-4 w-4" />
                                        {item.label}
                                    </Link>
                                );
                            }

                            if (item.type === 'dropdown') {
                                return (
                                    <AccordionItem key={item.label} value={item.basePath} className="border-b-0">
                                        <AccordionTrigger 
                                            className={cn(
                                                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:no-underline",
                                                isSubItemOf(item.subItems, item.basePath) && "text-primary"
                                            )}
                                        >
                                            <div className="flex items-center gap-3">
                                                <item.icon className="h-4 w-4" />
                                                {item.label}
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="pl-8 pt-1">
                                            <nav className="grid gap-1">
                                            {item.subItems.map(subItem => (
                                                <Link
                                                    key={subItem.href}
                                                    href={subItem.href}
                                                    className={cn(
                                                        "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                                                        pathname === subItem.href && "bg-muted text-primary"
                                                    )}
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                            </nav>
                                        </AccordionContent>
                                    </AccordionItem>
                                );
                            }
                            return null;
                        })}
                        </Accordion>
                    </nav>
                </div>
            </div>
      </aside>
    )
}
