import * as React from "react";
import { Menu, X } from "lucide-react";
import { APP_URL, APP_CTA_LABEL } from "@/consts";

interface HeaderProps {
  currentPath?: string;
}

const links = [
  { href: "/rates/", label: "Rates" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

export default function Header({ currentPath = "/" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const isActive = (href: string) => {
    const clean = href.replace(/\/$/, "");
    return !href.includes("#") && clean !== "" && currentPath.replace(/\/$/, "").startsWith(clean);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-paper)]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a
          href="/"
          className="flex items-center gap-2 font-display text-xl font-extrabold tracking-[var(--tracking-tight)] text-[var(--color-ink)] hover:opacity-90"
          aria-label="NomaPhone home"
        >
          <img src="/pixel/phone.webp" alt="" width="32" height="29" className="h-7 w-auto [image-rendering:pixelated]" />
          NomaPhone
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`pb-1 text-sm font-semibold transition-colors ${
                    active
                      ? "border-b-2 border-[var(--color-orange)] text-[var(--color-ink)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-ink)]"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={APP_URL}
            className="hidden rounded-md bg-[var(--color-green)] px-4 py-2 text-sm font-bold text-[var(--color-paper-2)] transition-colors hover:bg-[var(--color-signal-hover)] md:inline-flex"
          >
            {APP_CTA_LABEL}
          </a>
          <button
            type="button"
            className="rounded-md p-2 text-[var(--color-ink)] md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-paper-2)] md:hidden">
          <div className="space-y-1 px-4 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-semibold text-[var(--color-ink)] hover:bg-[var(--color-surface-raised)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={APP_URL}
              className="mt-3 block rounded-md bg-[var(--color-green)] px-3 py-3 text-center font-bold text-[var(--color-paper-2)]"
            >
              {APP_CTA_LABEL}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
