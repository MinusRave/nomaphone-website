import * as React from "react";

const footerNavigation = {
  product: [
    { name: "Create eBook", href: "/dashboard/create" },
    { name: "Pricing & Credits", href: "/pricing" },
    { name: "How Bookify Works", href: "/getting-started/how-it-works/" },
    { name: "Quick Start Guide", href: "/getting-started/quick-start/" },
  ],
  useCases: [
    { name: "Lead Magnet Creator", href: "/use-cases/lead-magnet-creator/" },
    { name: "Digital Product Creator", href: "/use-cases/digital-product-creator/" },
    { name: "Course Workbook Creator", href: "/use-cases/course-workbook-creator/" },
    { name: "Flexible Ebook Creator", href: "/use-cases/flexible-book-creator/" },
  ],
  resources: [
    { name: "Blog", href: "/blog" }, // ✅ added
    { name: "Create a Lead Magnet", href: "/guides/how-to-create-lead-magnet/" },
    { name: "Create Course Workbook", href: "/guides/create-course-workbook/" },
    { name: "Write an Info Product", href: "/guides/write-info-product/" },
  ],
  support: [
    { name: "FAQ", href: "/help/faq/" },
    { name: "Contact Support", href: "/help/contact/" },
    { name: "Email Us", href: "mailto:support@bookify.it" },
    // { name: "Privacy Policy", href: "/privacy" },
    // { name: "Terms of Service", href: "/terms" },
  ],
} as const;

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* CTA strip */}
        <div className="mb-10 overflow-hidden rounded-2xl border bg-[hsl(var(--muted))] p-4 sm:p-5">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <div className="text-sm sm:text-base">
              <span className="mr-2 inline-flex items-center rounded-full bg-[hsl(var(--secondary)/0.18)] px-2.5 py-1 text-xs font-semibold text-[hsl(var(--secondary))]">
                1 free credit
              </span>
              Get started with a free proposal — pay only when you generate the manuscript.
            </div>
            <a
              href="/dashboard/create"
              className="inline-flex items-center rounded-lg border px-3 py-2 text-sm font-medium transition-colors hover:bg-[hsl(var(--secondary)/0.08)]"
            >
              Create eBook
              <svg
                viewBox="0 0 24 24"
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Top section — 5 columns on one row at lg+ */}
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand column (no col-span to keep everything on a single row) */}
          <div>
            <a href="/" className="mb-4 inline-flex items-center gap-3 text-xl font-bold">
              <img
                src="/logo-bookify.svg"
                alt="Bookify"
                className="h-7 w-auto"
              />
              <span>Bookify</span>
            </a>
            <p className="mb-6 text-sm text-muted-foreground">
              Create non-fiction ebooks for digital business — lead magnets, info products, and course workbooks.
              <br />
              Free proposals. Pay per manuscript. Real editing with DOCX & Markdown.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Product</h3>
            <ul className="space-y-3">
              {footerNavigation.product.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Use cases */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Use cases</h3>
            <ul className="space-y-3">
              {footerNavigation.useCases.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources (includes Blog) */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Resources</h3>
            <ul className="space-y-3">
              {footerNavigation.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Support</h3>
            <ul className="space-y-3">
              {footerNavigation.support.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Bookify. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              {/* Uncomment when pages are available */}
              {/* <a href="/privacy" className="hover:text-foreground">Privacy Policy</a>
              <a href="/terms" className="hover:text-foreground">Terms of Service</a> */}
              <a href="/help/faq/" className="hover:text-foreground">
                FAQ
              </a>
              <a href="/help/contact/" className="hover:text-foreground">
                Contact
              </a>
              <a href="/blog" className="hover:text-foreground">
                Blog
              </a>
              <a href="mailto:support@bookify.it" className="hover:text-foreground">
                support@bookify.it
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
