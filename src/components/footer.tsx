import Link from "next/link";
import { Logo } from "@/components/logo";
import { Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const navLinks = [
    { href: "/plataforma", label: "Plataforma" },
    { href: "/seguranca", label: "Segurança" },
    { href: "/precos", label: "Preços" },
    { href: "/integrations", label: "Integrações" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <Link href="/" className="mb-6 md:mb-0">
              <Logo />
            </Link>
          </div>
          <div className="flex justify-center md:order-3">
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                aria-label="Twitter"
              >
                <Twitter />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </Link>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-8 md:mt-0 md:order-1 md:grid-cols-4">
            {/* Can be expanded with more links */}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between sm:flex-row">
           <nav className="flex flex-wrap justify-center gap-4 md:order-1 -mx-5 -my-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground px-5 py-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="mt-8 text-sm text-muted-foreground sm:mt-0">
            &copy; {new Date().getFullYear()} InsightAI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
