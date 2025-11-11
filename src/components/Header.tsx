import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { Menu } from "lucide-react";

interface HeaderProps {
  currentPath?: string;
}

const links = [
  { href: "/dashboard/create", label: "Create eBook" },
  { href: "#pricing", label: "Pricing" },
  { href: "/getting-started/how-it-works/", label: "How it works" },
  { href: "/blog", label: "Blog" },
];

export default function Header({ currentPath = "/" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const isActive = (href: string) =>
    href === currentPath || (href !== "/" && currentPath.startsWith(href));

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3 text-xl font-bold tracking-tight transition hover:opacity-90"
          aria-label="Bookify — Home"
        >
          <img
            src="/logo-bookify.svg"
            alt="Bookify"
            className="h-7 w-auto"
          />
          <span>Bookify</span>
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {links.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild>
                  <a
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors hover:text-[hsl(var(--secondary))] ${
                      isActive(link.href)
                        ? "text-[hsl(var(--secondary))]"
                        : "text-muted-foreground"
                    }`}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <ModeToggle />

          <Button
            variant="ghost"
            size="sm"
            className="hidden md:inline-flex"
            asChild
          >
            <a href="https://dash.bookify.it/login">Log in / Sign up</a>
          </Button>

          

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <div className="container mx-auto space-y-1 px-4 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-muted ${
                  isActive(link.href)
                    ? "bg-[hsl(var(--secondary)/0.15)] text-[hsl(var(--secondary))]"
                    : "text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <div className="mt-4 space-y-2 border-t pt-4">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="/login">Log in</a>
              </Button>
              <Button className="w-full" asChild>
                <a href="/dashboard" className="inline-flex items-center justify-center gap-2">
                  Start here
                  <span className="rounded-full border px-2 py-0.5 text-xs font-semibold text-[hsl(var(--secondary))]">
                    1 free credit
                  </span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
