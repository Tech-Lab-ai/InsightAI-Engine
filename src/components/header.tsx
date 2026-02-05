'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/logo";

export function Header() {
  const pathname = usePathname();
  const navLinks = [
    { href: "/plataforma", label: "Plataforma" },
    { href: "/teste-plataforma", label: "Teste" },
    { href: "/seguranca", label: "Segurança" },
    { href: "/precos", label: "Preços" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === link.href ? "text-foreground" : "text-foreground/60"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname === link.href ? "text-foreground" : "text-foreground/60"
                      )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col pl-6 space-y-2">
              <Button asChild variant="outline">
                <Link href="/contato">Solicitar Demonstração</Link>
              </Button>
              <Button asChild>
                <Link href="/login">Acessar Plataforma</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
        
        <Link href="/" className="flex items-center md:hidden">
          <Logo />
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="hidden md:flex md:space-x-2">
            <Button asChild variant="outline">
              <Link href="/contato">Solicitar Demonstração</Link>
            </Button>
            <Button asChild>
              <Link href="/login">Acessar Plataforma</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
