import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { Menu, Globe } from "lucide-react";

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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight transition hover:opacity-90"
          aria-label="NomaPhone — Home"
        >
          <Globe className="h-6 w-6 text-[hsl(var(--secondary))]" />
          <span>NomaPhone</span>
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
            variant="default"
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

            <div className="mt-4 border-t pt-4">
              <Button 
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