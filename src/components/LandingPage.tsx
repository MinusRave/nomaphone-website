import * as React from "react";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { PricingSection } from "./PricingSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { FAQSection } from "./FAQSection";
import { CTASection } from "./CTASection";

/**
 * Complete NomaPhone landing page
 * 
 * Includes:
 * - Hero with value proposition
 * - Features grid
 * - How it works (3 steps)
 * - Pricing (tabs: pay-per-use vs subscription)
 * - Social proof & testimonials
 * - FAQ (accordion)
 * - Final CTA
 * 
 * Usage in Astro:
 * ```astro
 * ---
 * import LandingPage from '@/components/LandingPage';
 * ---
 * <LandingPage client:load />
 * ```
 */
export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
