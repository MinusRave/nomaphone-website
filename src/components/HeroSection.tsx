import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Smartphone,
  Zap,
  CheckCircle2,
} from "lucide-react";

export function HeroSection() {
  const [email, setEmail] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);


// --- Helpers ---

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeEmail(raw: string): string {
  return raw.trim().toLowerCase();
}

function isValidEmail(raw: string): boolean {
  const email = normalizeEmail(raw);
  if (!email) return false;
  if (email.length > 320) return false; // RFC-ish hard cap
  if (!EMAIL_REGEX.test(email)) return false;

  // Optional basic anti-trash heuristics (comment out if you don't like them)
  const banned = ["test@test.com", "example@example.com", "a@a.a"];
  if (banned.includes(email)) return false;

  return true;
}

// limit string length & normalize
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

  // Page / marketing context
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

  // Client info (no cookies)
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

    // user local time info
    localTimeISO?: string;
    localTimeEpochMs?: number;
    utcOffsetMinutes?: number;
    utcOffsetFromUTC?: number;
  };

  // Internal info
  source: string; // e.g. which form
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (isSubmitting) return;

  // --- EMAIL VALIDATION ---
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
      source: "waitlist_main_form",
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

    // Device type heuristic
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

    const utcOffsetMinutes = now.getTimezoneOffset(); // minutes behind UTC
    const utcOffsetFromUTC = -utcOffsetMinutes; // ahead of UTC = positive

    const payload: WaitlistPayload = {
      email: normalizedEmail,

      // PAGE / MARKETING (with sane length limits)
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

      // CLIENT INFO
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

        // 🕒 USER LOCAL TIME
        localTimeISO: now.toISOString(),
        localTimeEpochMs: now.getTime(),
        utcOffsetMinutes,
        utcOffsetFromUTC,
      },

      // INTERNAL TAG
      source: "waitlist_main_form",
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
    alert("Thanks! You're on the waitlist 🎉");
  } catch (err) {
    console.error("Waitlist error", err);
    alert("Oops, something went wrong. Please try again 🙏");
  } finally {
    setIsSubmitting(false);
  }
};




  


  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--muted))] via-background to-[hsl(var(--secondary)/0.08)] dark:from-[hsl(var(--background))] dark:via-[hsl(var(--background))] dark:to-[hsl(var(--secondary)/0.12)]" />
        <div className="pointer-events-none absolute -inset-[20%] rounded-full bg-[radial-gradient(ellipse_at_top_left,hsl(var(--secondary)/0.18),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top_left,hsl(var(--secondary)/0.25),transparent_55%)]" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <Globe className="mr-2 h-4 w-4" />
            Launching Q2 2026 • Early access for frequent callers
          </Badge>

          {/* H1 – focus sul problema reale */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Call your <span className="bg-[linear-gradient(to_right,hsl(var(--secondary-muted)),hsl(var(--secondary)))] bg-clip-text text-transparent">bank, government office, or clients</span> from abroad.
          </h1>

          {/* Subheadline – chiarisce use case + target */}
          <p className="mb-10 text-lg text-muted-foreground md:text-xl lg:text-2xl">
            No roaming, no SIM, no app. Just open your browser and call
            US, UK, India and more at local-style rates.
            <br className="hidden sm:inline" />
            Built for digital nomads, expats and remote teams who still need to call real phone numbers.
          </p>

          {/* Form #1 - Hero Inline */}
          <form onSubmit={handleSubmit} className="mx-auto mb-8 max-w-md">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="you@nomadlife.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="sm:w-auto"
              >
                {isSubmitting ? "Joining..." : "Join waitlist & get $10 credit"}
              </Button>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              First 100 members get $10 in free calling credits at launch. No spam, unsubscribe anytime.
            </p>
          </form>

          {/* Trust indicators – orientati al risultato */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-[hsl(var(--secondary))]" />
              <span>Works with landlines, call centers & hotlines</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-[hsl(var(--secondary))]" />
              <span>From landing to first call in 30 seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[hsl(var(--secondary))]" />
              <span>No app, no contract, pay-per-use only</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-[hsl(var(--secondary))]" />
              <span>Virtual numbers & SMS for OTP and 2FA</span>
            </div>
          </div>
        </div>

        {/* Hero visual - Nomad context */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            {/* Glow effect behind */}
            <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-[radial-gradient(ellipse_at_center,hsl(var(--secondary)/0.3),transparent_70%)]" />

            {/* Main container */}
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-gradient-to-br from-[hsl(var(--muted))] to-[hsl(var(--background))]">
              <img
                src="/nomaphone-mockup.svg"
                alt="NomaPhone calling interface"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[hsl(var(--border)/0.5)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
