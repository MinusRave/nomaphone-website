import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe, CheckCircle2, Loader2 } from "lucide-react";

export function BlogWaitlistCTA() {
  const [email, setEmail] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  // --- Helpers ---
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function normalizeEmail(raw: string): string {
    return raw.trim().toLowerCase();
  }

  function isValidEmail(raw: string): boolean {
    const email = normalizeEmail(raw);
    if (!email) return false;
    if (email.length > 320) return false;
    if (!EMAIL_REGEX.test(email)) return false;
    const banned = ["test@test.com", "example@example.com", "a@a.a"];
    if (banned.includes(email)) return false;
    return true;
  }

  function safeStr(value: string | null | undefined, maxLen: number): string | null {
    if (value == null) return null;
    let s = String(value).trim();
    if (!s) return null;
    if (s.length > maxLen) {
      s = s.slice(0, maxLen);
    }
    return s;
  }

  type WaitlistPayload = {
    email: string;
    pageUrl?: string;
    path?: string;
    queryString?: string | null;
    hash?: string | null;
    referrer?: string | null;
    utm_source?: string | null;
    utm_medium?: string | null;
    utm_campaign?: string | null;
    utm_term?: string | null;
    utm_content?: string | null;
    gclid?: string | null;
    fbclid?: string | null;
    client: {
      userAgent?: string;
      language?: string;
      languages?: readonly string[];
      timezone?: string;
      screen?: {
        width?: number;
        height?: number;
        availWidth?: number;
        availHeight?: number;
        pixelRatio?: number;
      };
      viewport?: {
        width?: number;
        height?: number;
      };
      deviceType?: "mobile" | "tablet" | "desktop" | "unknown";
      doNotTrack?: string | null;
      online?: boolean;
      hardwareConcurrency?: number | null;
      connection?: {
        effectiveType?: string;
        downlink?: number;
        rtt?: number;
        saveData?: boolean;
      };
      localTimeISO?: string;
      localTimeEpochMs?: number;
      utcOffsetMinutes?: number;
      utcOffsetFromUTC?: number;
    };
    source: string;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const normalizedEmail = normalizeEmail(email);

    if (!isValidEmail(normalizedEmail)) {
      alert("Please enter a valid email address 🙂");
      return;
    }

    setIsSubmitting(true);

    const buildPayload = (): WaitlistPayload => {
      const base: WaitlistPayload = {
        email: normalizedEmail,
        client: {},
        source: "waitlist_blog_form",
      };

      if (typeof window === "undefined") {
        return base;
      }

      const now = new Date();
      const url = new URL(window.location.href);
      const searchParams = url.searchParams;
      const getParam = (key: string) => searchParams.get(key);

      const utm_source = safeStr(getParam("utm_source"), 255);
      const utm_medium = safeStr(getParam("utm_medium"), 255);
      const utm_campaign = safeStr(getParam("utm_campaign"), 255);
      const utm_term = safeStr(getParam("utm_term"), 255);
      const utm_content = safeStr(getParam("utm_content"), 255);
      const gclid = safeStr(getParam("gclid"), 255);
      const fbclid = safeStr(getParam("fbclid"), 255);

      const ua = typeof navigator !== "undefined" ? navigator.userAgent || "" : "";
      const isMobile = /Mobi|Android/i.test(ua);
      const isTablet = /Tablet|iPad/i.test(ua);
      const deviceType: WaitlistPayload["client"]["deviceType"] =
        isTablet ? "tablet" : isMobile ? "mobile" : ua ? "desktop" : "unknown";

      const nav: any = typeof navigator !== "undefined" ? navigator : {};
      const connection =
        nav.connection || nav.mozConnection || nav.webkitConnection || undefined;

      const timezone =
        typeof Intl !== "undefined"
          ? Intl.DateTimeFormat().resolvedOptions().timeZone
          : undefined;

      const utcOffsetMinutes = now.getTimezoneOffset();
      const utcOffsetFromUTC = -utcOffsetMinutes;

      const payload: WaitlistPayload = {
        email: normalizedEmail,
        pageUrl: safeStr(url.href, 2000) || undefined,
        path: safeStr(url.pathname, 500) || undefined,
        queryString: safeStr(url.search || "", 1000),
        hash: safeStr(url.hash || "", 500),
        referrer:
          typeof document !== "undefined" && document.referrer
            ? safeStr(document.referrer, 2000)
            : null,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_term,
        utm_content,
        gclid,
        fbclid,
        client: {
          userAgent: safeStr(ua, 512),
          language: safeStr(nav.language, 20) || undefined,
          languages: Array.isArray(nav.languages)
            ? nav.languages
                .map((l: any) => safeStr(String(l), 20))
                .filter((l: string | null) => !!l) as string[]
            : [],
          timezone: safeStr(timezone || "", 100) || undefined,
          screen: typeof window !== "undefined" && window.screen
            ? {
                width: Number.isFinite(window.screen.width)
                  ? window.screen.width
                  : undefined,
                height: Number.isFinite(window.screen.height)
                  ? window.screen.height
                  : undefined,
                availWidth: Number.isFinite(window.screen.availWidth)
                  ? window.screen.availWidth
                  : undefined,
                availHeight: Number.isFinite(window.screen.availHeight)
                  ? window.screen.availHeight
                  : undefined,
                pixelRatio: Number.isFinite(window.devicePixelRatio)
                  ? window.devicePixelRatio
                  : undefined,
              }
            : undefined,
          viewport:
            typeof window !== "undefined"
              ? {
                  width: Number.isFinite(window.innerWidth)
                    ? window.innerWidth
                    : undefined,
                  height: Number.isFinite(window.innerHeight)
                    ? window.innerHeight
                    : undefined,
                }
              : undefined,
          deviceType,
          doNotTrack:
            typeof nav.doNotTrack === "string" ? nav.doNotTrack : null,
          online:
            typeof nav.onLine === "boolean" ? Boolean(nav.onLine) : undefined,
          hardwareConcurrency:
            typeof nav.hardwareConcurrency === "number"
              ? nav.hardwareConcurrency
              : null,
          connection: connection
            ? {
                effectiveType: safeStr(connection.effectiveType, 50) || undefined,
                downlink:
                  typeof connection.downlink === "number"
                    ? connection.downlink
                    : undefined,
                rtt:
                  typeof connection.rtt === "number"
                    ? connection.rtt
                    : undefined,
                saveData:
                  typeof connection.saveData === "boolean"
                    ? connection.saveData
                    : undefined,
              }
            : undefined,
          localTimeISO: now.toISOString(),
          localTimeEpochMs: now.getTime(),
          utcOffsetMinutes,
          utcOffsetFromUTC,
        },
        source: "waitlist_blog_form",
      };

      return payload;
    };

    try {
      const payload = buildPayload();

      const res = await fetch(
        "https://nr.nomaphone.com/nomaphone/waitlist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        console.error("Waitlist error", await res.text());
        alert("Oops, something went wrong. Please try again 🙏");
        return;
      }

      setEmail("");
      setIsSuccess(true);
    } catch (err) {
      console.error("Waitlist error", err);
      alert("Oops, something went wrong. Please try again 🙏");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <aside className="my-12 rounded-2xl border-2 border-[hsl(var(--secondary)/0.3)] bg-gradient-to-br from-[hsl(var(--secondary)/0.05)] to-[hsl(var(--secondary)/0.02)] p-8 shadow-lg">
      <div className="mx-auto max-w-2xl">
        {/* Header with icon */}
        <div className="mb-6 flex items-start gap-4">
          <div className="rounded-full bg-[hsl(var(--secondary)/0.15)] p-3">
            <Globe className="h-6 w-6 text-[hsl(var(--secondary))]" />
          </div>
          <div className="flex-1">
            <h3 className="mb-2 text-2xl font-bold tracking-tight">
              Try NomaPhone — Call anywhere from your browser
            </h3>
            <p className="text-muted-foreground">
              Make international calls without SIM cards, roaming fees, or apps.
              Perfect for digital nomads who need to call banks, government offices,
              or clients back home.
            </p>
          </div>
        </div>

        {/* Key benefits */}
        <div className="mb-6 grid gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[hsl(var(--secondary))]" />
            <span>Works with just Wi-Fi</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[hsl(var(--secondary))]" />
            <span>Call landlines & mobiles</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[hsl(var(--secondary))]" />
            <span>Virtual numbers for 2FA</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[hsl(var(--secondary))]" />
            <span>Pay-per-use, no contracts</span>
          </div>
        </div>

        {/* Form */}
        {isSuccess ? (
  <div className="rounded-lg border-2 border-[hsl(var(--secondary))] bg-background p-6">
    <p className="text-lg font-semibold text-[hsl(var(--secondary))]">
      Perfect! You're on the waitlist 🎉
    </p>
    <p className="mt-2 text-sm text-muted-foreground">
      Top up $5 at launch and we'll match it — $10 to call with. Stay tuned!
    </p>
  </div>
) : (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 text-base"
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="sm:w-auto h-12 whitespace-nowrap"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  "Get $5 matched"
                )}
              </Button>
            </div>

            {/* Privacy + incentive */}
            <p className="mt-3 text-center text-xs text-muted-foreground">
              <strong className="text-[hsl(var(--secondary))]">300 members already joined.</strong> Top up $5 and we'll match it.
              Launching Q2 2026 • No spam, unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </aside>
  );
}