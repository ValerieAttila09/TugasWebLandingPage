"use client";

import AboutSection from "@/components/landing/sections/About/About";
import FAQSection from "@/components/landing/sections/FAQ/FAQSection";
import FooterSection from "@/components/landing/sections/Footer/Footer";
import HeroSection from "@/components/landing/sections/Hero/Hero";
import IntegrationsSection from "@/components/landing/sections/Integrations/Integrations";
import PricingSection from "@/components/landing/sections/Pricing/PricingSection";

const Page = () => {

  return (
    <div className="relative min-h-screen w-full">
      <HeroSection
        headline="We Craft Digital Experiences That Feel Intuitive, Modern & Alive"
        subHeadline="Nexora Studio is a digital agency specializing in web design, development, and motion-driven interfaces for forward-thinking brands."
        primaryCTA="Start a Project"
        secondaryCTA="View Our Work"
      />
      <IntegrationsSection />
      <AboutSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}

export default Page;
