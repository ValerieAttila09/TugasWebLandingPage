import { ReactSVGElement } from "react";

declare global {
  type LandingPageNavMenu = {
    label: string;
    href: string;
  }

  type LandingPageSidebarMenu = {
    label: string;
    href: string;
  }

  type IsHovered = {
    isHovered: boolean;
    elementId: string;
  }

  type IntegrationLogo = {
    name: string;
    icon: string;
  }

  type CountOnData = {
    number: number;
    label: string;
    symbol: string;
  }

  type PricingSectionData = {
    pricingDescription: {
      label: string;
      title: string;
      description: string;
      additionalContent?: string | undefined;
    }[];
    pricingOfferDetail: {
      title: string;
      subtitle: string;
      price: number;
      guaranteedServices: string[];
      benefits: string[];
    }[];
  }

};

export { };