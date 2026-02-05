import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserNav } from "./user-nav";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function ConsoleHeader() {
    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(Boolean);

    // Capitalize first letter
    const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

    return (
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <SidebarTrigger className="md:hidden" />
            
            <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/dashboard">Início</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    {pathSegments.map((segment, index) => (
                        <React.Fragment key={segment}>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                {index === pathSegments.length - 1 ? (
                                    <BreadcrumbPage>{capitalize(segment)}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink asChild>
                                        <Link href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
                                            {capitalize(segment)}
                                        </Link>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>

            <div className="ml-auto flex items-center gap-2">
                <UserNav />
            </div>
        </header>
    );
}
