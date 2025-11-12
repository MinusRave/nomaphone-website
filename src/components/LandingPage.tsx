import * as React from "react";
import { HeroSection } from "./HeroSection";
import { ProblemUseCasesSection } from "./ProblemUseCasesSection";
import { SolutionFeaturesSection } from "./SolutionFeaturesSection";
import { PricingTeaserSection } from "./PricingTeaserSection";
import { CompetitorComparisonSection } from "./CompetitorComparisonSection";
import { BetaIncentivesSection } from "./BetaIncentivesSection";
import { WaitlistFormSection } from "./WaitlistFormSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { SocialProofSection } from "./SocialProofSection";
import { FAQSection } from "./FAQSection";
import { FinalCTASection } from "./FinalCTASection";

/**
 * NomaPhone Pre-Launch Landing Page
 * 
 * Structure (11 sections + 3 inline forms):
 * 1. Hero + Form #1 (above fold)
 * 2. Problem/Use Cases (3 scenarios)
 * 3. Solution/Features (keyword-rich)
 * 4. Pricing Teaser (transparency)
 * 5. vs Competitors (differentiation)
 * 6. Beta Incentives (tiered rewards)
 * 7. Form #2 (post-incentives conversion)
 * 8. How It Works (3 steps visual)
 * 9. Social Proof/Credibility (founder story)
 * 10. FAQ (SEO long-tail queries)
 * 11. Final CTA + Form #3 + Lead Magnet
 * 
 * Tech: Astro + React + Tailwind 4 + shadcn/ui
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
      {/* 1. Hero + Form #1 */}
      <HeroSection />
      
      {/* 2. Problem/Use Cases */}
      <ProblemUseCasesSection />
      
      {/* 3. Solution/Features */}
      <SolutionFeaturesSection />
      
      {/* 4. Pricing Teaser */}
      <PricingTeaserSection />
      
      {/* 5. vs Competitors */}
      <CompetitorComparisonSection />
      
      {/* 6. Beta Incentives */}
      <BetaIncentivesSection />
      
      {/* 7. Form #2 (post-incentives) */}
      <WaitlistFormSection variant="mid-page" />
      
      {/* 8. How It Works */}
      <HowItWorksSection />
      
      {/* 9. Social Proof/Credibility */}
      <SocialProofSection />
      
      {/* 10. FAQ */}
      <FAQSection />
      
      {/* 11. Final CTA + Form #3 + Lead Magnet */}
      <FinalCTASection />
    </main>
  );
}