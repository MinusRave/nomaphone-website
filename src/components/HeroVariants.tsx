import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, Zap, Shield, DollarSign } from "lucide-react";

/**
 * Alternative Hero Variants
 * 
 * Questo file contiene 3 varianti alternative dell'Hero section
 * da usare per A/B testing o per scegliere quella che preferisci.
 * 
 * Varianti:
 * 1. HeroVariantSavings - Focus su risparmio economico
 * 2. HeroVariantNomad - Focus su digital nomads
 * 3. HeroVariantSimple - Ultra minimalista
 */

// ==========================================
// VARIANTE 1: Focus su risparmio economico
// ==========================================
export function HeroVariantSavings() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-background to-cyan-50 dark:from-blue-950/20 dark:via-background dark:to-cyan-950/20" />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            <DollarSign className="mr-2 h-4 w-4" />
            Save up to 90% on international calls
          </Badge>

          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Stop overpaying for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              international calls
            </span>
          </h1>

          <p className="mb-4 text-lg text-muted-foreground md:text-xl lg:text-2xl">
            Call any phone number worldwide from your browser.
          </p>
          
          <div className="mb-10 flex flex-wrap items-center justify-center gap-6 text-lg font-semibold">
            <div className="flex items-center gap-2">
              <span className="text-2xl">$0.01/min</span>
              <span className="text-muted-foreground">to USA</span>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">$0.02/min</span>
              <span className="text-muted-foreground">to most countries</span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group w-full sm:w-auto">
              Start saving now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              See all rates
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            No hidden fees • No monthly commitment • Credits never expire
          </p>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// VARIANTE 2: Focus su digital nomads
// ==========================================
export function HeroVariantNomad() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10 animate-pulse" />
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-base">
            🌍 Built for Digital Nomads
          </Badge>

          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Your international phone,
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              right in your browser
            </span>
          </h1>

          <p className="mb-10 text-lg text-muted-foreground md:text-xl">
            From Bali to Barcelona, call anyone without roaming fees.
            <br className="hidden sm:block" />
            No downloads. No contracts. Just works.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 sm:w-auto">
              Get started free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Watch demo
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-muted-foreground">5,000+ nomads calling</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-blue-600" />
              <span className="text-muted-foreground">150+ countries</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-blue-600" />
              <span className="text-muted-foreground">30s setup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// VARIANTE 3: Ultra minimalista
// ==========================================
export function HeroVariantSimple() {
  return (
    <section className="py-32 md:py-40">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-8 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            International calls.
            <br />
            <span className="text-blue-600">From your browser.</span>
          </h1>

          <p className="mb-12 text-xl text-muted-foreground md:text-2xl">
            No app. No contracts. From $0.01/min.
          </p>

          <Button size="lg" className="h-14 px-8 text-lg">
            Start calling now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="mt-16 grid gap-8 text-center sm:grid-cols-3">
            <div>
              <div className="mb-2 text-4xl font-bold text-blue-600">150+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-blue-600">30s</div>
              <div className="text-sm text-muted-foreground">Setup time</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-blue-600">90%</div>
              <div className="text-sm text-muted-foreground">Savings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// Guida per l'uso
// ==========================================

/**
 * Come usare queste varianti:
 * 
 * 1. Sostituisci l'import nel file LandingPage.tsx:
 *    import { HeroVariantSavings as HeroSection } from "./HeroVariants";
 * 
 * 2. Oppure crea una versione A/B test:
 *    const HeroSection = Math.random() > 0.5 ? HeroVariantSavings : HeroVariantNomad;
 * 
 * 3. Testa quale converte meglio con analytics:
 *    - Track "Started calling" click rate
 *    - Measure time on page
 *    - Check bounce rate
 * 
 * Raccomandazioni per A/B testing:
 * - HeroVariantSavings: Per utenti price-sensitive (es. da ads "cheap calls")
 * - HeroVariantNomad: Per traffico da Nomad List, digital nomad blogs
 * - HeroVariantSimple: Per traffico tech-savvy (Product Hunt, HN)
 */
