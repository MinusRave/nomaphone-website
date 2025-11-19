import * as React from "react";
import { Globe, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    
  ];

  const otherLinks = [
    
    { href: "/blog", label: "Blog" },
  ];

  const socialLinks = [
    // Uncomment and add your social links when ready
    // { href: "https://twitter.com/nomaphone", label: "Twitter", icon: Twitter },
    // { href: "https://linkedin.com/company/nomaphone", label: "LinkedIn", icon: Linkedin },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-3">
            <a
              href="/"
              className="flex items-center gap-2 text-lg font-bold transition hover:opacity-90"
              aria-label="NomaPhone — Home"
            >
              <Globe className="h-5 w-5 text-[hsl(var(--secondary))]" />
              <span>NomaPhone</span>
            </a>
            <p className="text-sm text-muted-foreground">
              International calling for digital nomads. Browser-based, no app, no
              contracts.
            </p>
            <p className="text-xs text-muted-foreground">
              Made with ❤️ in Naples, Italy
            </p>
          </div>

          {/* Links Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Blog</h3>
            <ul className="space-y-2">
              {otherLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact</h3>
            <a
              href="mailto:support@nomaphone.com"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              support@nomaphone.com
            </a>

            {/* Social Links - Uncomment when ready */}
            {socialLinks.length > 0 && (
              <div className="flex gap-3 pt-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} NomaPhone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}