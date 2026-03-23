import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface HeaderProps {
  currentPath?: string;
}

const links = [
  { href: "/blog", label: "Blog" },
];

export default function Header({ currentPath = "/" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const isActive = (href: string) =>
    href === currentPath || (href !== "/" && currentPath.startsWith(href));

  const handleWaitlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Check if we're on the landing page
    const isOnLandingPage = window.location.pathname === "/";
    
    if (isOnLandingPage) {
      // Scroll to form on current page
      const form = document.querySelector('form[data-waitlist-form]') || 
                   document.querySelector('input[type="email"]')?.closest('form');
      if (form) {
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      // Redirect to landing page with hash
      window.location.href = "/#waitlist";
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-midnight)]">
      <nav className="container mx-auto flex items-center justify-between px-[var(--space-4)] py-[var(--space-3)]">
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold font-display tracking-[var(--tracking-tight)] text-white hover:opacity-90 transition-opacity"
          aria-label="NomaPhone — Home"
        >
          NomaPhone
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-6">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink asChild>
                    <a
                      href={link.href}
                      className={`pb-1 text-sm font-medium font-body transition-colors ${
                        active
                          ? "text-[var(--color-text-primary)] border-b-2 border-[var(--color-signal)]"
                          : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side actions */}
        <div className="flex items-center gap-[var(--space-2)]">
          <Button
            variant="primary"
            size="sm"
            className="hidden md:inline-flex"
            onClick={handleWaitlistClick}
          >
            Join Waitlist
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[var(--color-text-primary)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)] md:hidden">
          <div className="container mx-auto space-y-1 px-[var(--space-4)] py-[var(--space-4)]">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block rounded-md px-[var(--space-3)] py-[var(--space-2)] text-base font-medium font-body transition-colors ${
                    active
                      ? "bg-[var(--color-surface-raised)] text-[var(--color-text-primary)] border-l-2 border-[var(--color-signal)]"
                      : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-text-primary)]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
              <Button 
                variant="primary"
                className="w-full" 
                onClick={(e) => {
                  handleWaitlistClick(e);
                  setMobileMenuOpen(false);
                }}
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
