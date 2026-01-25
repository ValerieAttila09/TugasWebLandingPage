"use client";

import AboutSection from "@/components/landing/sections/About/About";
import CodeSection from "@/components/landing/sections/Code/CodeSection";
import CTA_Section from "@/components/landing/sections/CTA/CTA";
import FAQSection from "@/components/landing/sections/FAQ/FAQSection";
import FeaturesSection from "@/components/landing/sections/Features/FeaturesSection";
import FooterSection from "@/components/landing/sections/Footer/Footer";
import HeroSection from "@/components/landing/sections/Hero/Hero";
import IntegrationsSection from "@/components/landing/sections/Integrations/Integrations";
import PricingSection from "@/components/landing/sections/Pricing/PricingSection";
import ProjectsSection from "@/components/landing/sections/Projects/Projects";

const Page = () => {

  return (
    <div className="relative min-h-screen w-full">
      <HeroSection
        headline="We Craft Digital Experiences That Feel Intuitive, Modern & Alive"
        subHeadline="Xenora Studio is a digital agency specializing in web design, development, and motion-driven interfaces for forward-thinking brands."
        primaryCTA="Start a Project"
        secondaryCTA="View Our Work"
      />
      <IntegrationsSection />
      <AboutSection />
      <ProjectsSection />
      <CodeSection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <CTA_Section />
      <FooterSection />
    </div>
  );
}

export default Page;
