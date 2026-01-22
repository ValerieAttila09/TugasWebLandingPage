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
    icon: any;
  }
};

export { };