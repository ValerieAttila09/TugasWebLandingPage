'use client';

import React from 'react';
import { motion } from 'motion/react';
import ServicesHero from '@/components/landing/sections/Services/ServicesHero';
import ServicesDetailedGrid from '@/components/landing/sections/Services/ServicesDetailedGrid';
import ServicesBenefits from '@/components/landing/sections/Services/ServicesBenefits';
import ServicesComparison from '@/components/landing/sections/Services/ServicesComparison';
import CTA_Section from '@/components/landing/sections/CTA/CTA';
import FooterSection from '@/components/landing/sections/Footer/Footer';

const ServicesPage = () => {
  return (
    <div className="relative w-full overflow-x-hidden">
      <ServicesHero />
      <ServicesDetailedGrid />
      <ServicesBenefits />
      <ServicesComparison />
      <CTA_Section />
      <FooterSection />
    </div>
  );
};

export default ServicesPage;
