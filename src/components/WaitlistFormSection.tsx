import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

interface WaitlistFormSectionProps {
  variant?: "hero" | "mid-page" | "final";
}

export function WaitlistFormSection({ variant = "mid-page" }: WaitlistFormSectionProps) {
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


  // Mid-page variant has section wrapper
  if (variant === "mid-page") {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-br from-[hsl(var(--secondary)/0.1)] to-[hsl(var(--secondary)/0.05)]">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            {/* Header */}
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to join?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Get your spot on the waitlist now. Takes 10 seconds.
            </p>

            {/* Form */}
            {isSuccess ? (
              <div className="rounded-lg border-2 border-[hsl(var(--secondary))] bg-background p-8">
                <p className="text-xl font-semibold text-[hsl(var(--secondary))]">
                  You're in! Check your email 🎉
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  We just sent you a confirmation. Welcome to NomaPhone.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto max-w-md">
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
                    className="sm:w-auto h-12"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      "Join Beta Waitlist"
                    )}
                  </Button>
                </div>

                {/* Privacy text */}
                <p className="mt-4 text-xs text-muted-foreground">
                  No spam, unsubscribe anytime. We'll only email you when we launch.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Hero and Final variants return just the form (no section wrapper)
  // They will be embedded in their parent sections
  return (
    <div className="mx-auto max-w-md">
      {isSuccess ? (
        <div className="rounded-lg border-2 border-[hsl(var(--secondary))] bg-background p-6">
          <p className="text-lg font-semibold text-[hsl(var(--secondary))]">
            You're in! Check your email 🎉
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            We just sent you a confirmation.
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
              className="flex-1"
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Joining...
                </>
              ) : (
                "Join Beta Waitlist"
              )}
            </Button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground text-center">
            {variant === "hero"
              ? "First 50 get $25 total value • No spam, unsubscribe anytime"
              : "No spam, unsubscribe anytime. We'll only email you when we launch."}
          </p>
        </form>
      )}
    </div>
  );
}