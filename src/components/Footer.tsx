import * as React from "react";
import { Mail } from "lucide-react";
import { APP_URL } from "@/consts";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { href: APP_URL, label: "Make a call" },
    { href: "/rates/", label: "Rates" },
    { href: "/#faq", label: "FAQ" },
  ];
  const guideLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/blog/how-to-call-us-toll-free-numbers-from-anywhere/", label: "Call US toll-free numbers" },
    { href: "/blog/calling-banks-from-abroad-complete-guide-expats/", label: "Call your bank from abroad" },
  ];
  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ];

  const Column = ({ title, links }: { title: string; links: { href: string; label: string }[] }) => (
    <div className="space-y-3">
      <h3 className="text-sm font-extrabold text-[var(--color-ink)]">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-ink)]">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-paper)]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <a href="/" className="flex items-center gap-2 text-lg font-extrabold text-[var(--color-ink)]" aria-label="NomaPhone home">
              <img src="/pixel/phone.webp" alt="" width="28" height="26" className="h-6 w-auto" />
              NomaPhone
            </a>
            <p className="text-sm text-[var(--color-text-secondary)]">
              The internet's public phone. Call any landline or mobile from your browser with prepaid credit. No app, no account, no SIM.
            </p>
            <a
              href="mailto:support@nomaphone.com"
              className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-ink)]"
            >
              <Mail className="h-4 w-4" />
              support@nomaphone.com
            </a>
          </div>
          <Column title="Product" links={productLinks} />
          <Column title="Guides" links={guideLinks} />
          <Column title="Legal" links={legalLinks} />
        </div>
        <div className="mt-8 border-t border-[var(--color-border)] pt-6 text-center">
          <p className="font-mono text-xs text-[var(--color-text-secondary)]">
            © {currentYear} NomaPhone. Outgoing calls only. Not for emergency calls.
          </p>
        </div>
      </div>
    </footer>
  );
}
