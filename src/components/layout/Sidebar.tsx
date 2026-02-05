"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    LayoutGrid,
    MessageSquare,
    Workflow,
    BarChart,
    FileText,
    Settings,
    CreditCard
} from "lucide-react"
import { cn } from "@/lib/utils"

const menuItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutGrid },
    { href: "/chat", label: "Chat", icon: MessageSquare },
    { href: "/workflows", label: "Workflows", icon: Workflow },
    { href: "/reports", label: "Relatórios", icon: BarChart },
    { href: "/documents", label: "Documentos", icon: FileText },
    { href: "/settings", label: "Configurações", icon: Settings },
    { href: "/billing", label: "Billing", icon: CreditCard },
];


export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                         <TooltipProvider>
                            {menuItems.map((item) => (
                                 <Tooltip key={item.href}>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                                                pathname === item.href && "bg-muted text-primary"
                                            )}
                                        >
                                            <item.icon className="h-4 w-4" />
                                            {item.label}
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">
                                        <p>{item.label}</p>
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </TooltipProvider>
                    </nav>
                </div>
            </div>
      </aside>
    )
}
