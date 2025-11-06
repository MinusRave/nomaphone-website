import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { Globe, Menu } from "lucide-react";

interface HeaderProps {
  currentPath?: string;
}

const links = [
  { href: "/", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
];

export default function NomaPhoneHeader({ currentPath = "/" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const isActive = (href: string) =>
    href === currentPath || (href !== "/" && currentPath.startsWith(href));

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a 
          href="/" 
          className="flex items-center gap-2 font-bold text-xl tracking-tight hover:opacity-90 transition"
        >
          <Globe className="h-6 w-6 text-blue-600" />
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
                    className={`px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                      isActive(link.href) 
                        ? "text-blue-600" 
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
            <a href="/login">Log in</a>
          </Button>
          
          <Button 
            size="sm"
            className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
            asChild
          >
            <a href="/signup">Get started</a>
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
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-950"
                    : "text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            
            <div className="border-t pt-4 mt-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="/login">Log in</a>
              </Button>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600" asChild>
                <a href="/signup">Get started</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
