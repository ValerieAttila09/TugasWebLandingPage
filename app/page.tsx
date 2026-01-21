"use client";

import HeroSection from "@/components/landing/sections/Hero/Hero";

const Page = () => {

  return (
    <div className="relative min-h-screen w-full">
      <HeroSection
        headline="We Craft Digital Experiences That Feel Intuitive, Modern & Alive"
        subHeadline="Nexora Studio is a digital agency specializing in web design, development, and motion-driven interfaces for forward-thinking brands."
        primaryCTA="Start a Project"
        secondaryCTA="View Our Work"
      />
    </div>
  );
}

export default Page;
