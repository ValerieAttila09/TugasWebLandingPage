// import AtlassianLogo from '../../assets/icons/Atlassian_id37ar18Ew_1.png';
// import DockerLogo from '../../assets/icons/Docker_ido12OLE9Y_0.png';
// import DribbbleLogo from '../../assets/icons/Dribbble_Logo.png';
// import FigmaLogo from '../../assets/icons/Figma_Symbol_0.png';
// import FramerLogo from '../../assets/icons/Framer_Logo.png';
// import GithubLogo from '../../assets/icons/GitHub_Symbol_0.png';
// import GoogleLogo from '../../assets/icons/Google_Symbol_0.png';
// import KubernetesLogo from '../../assets/icons/Kubernetes_idda6T8Ya6_1.png';

import { GradualBlurProps } from "@/components/ReactBits/GradualBlur";

export const landingPageNavMenu: LandingPageNavMenu[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/#about" },
  { label: "DOCS", href: "/#docs" },
  { label: "SERVICES", href: "/#services" },
];

export const landingPageSidebarMenu: LandingPageSidebarMenu[] = [
  { label: "HOME", href: "/" },
  { label: "BLOG", href: "/blog" },
  { label: "MEDIA", href: "/media" },
  { label: "SUPPORT", href: "/support" },
];

export const IntegrationLogo: IntegrationLogo[] = [
  { name: "Framer", icon: '/icons/Framer_Logo.png' },
  { name: "Atlassian", icon: '/icons/Atlassian_id37ar18Ew_1.png' },
  { name: "Docker", icon: '/icons/Docker_ido12OLE9Y_0.png' },
  { name: "Dribbble", icon: '/icons/Dribbble_Logo.png' },
  { name: "Figma", icon: '/icons/Figma_Symbol_0.png' },
  { name: "Github", icon: '/icons/GitHub_Symbol_0.png' },
  { name: "Google", icon: '/icons/Google_Symbol_0.png' },
  { name: "Kubernetes", icon: '/icons/Kubernetes_idda6T8Ya6_1.png' },
];

export const DEFAULT_CONFIG: Partial<GradualBlurProps> = {
  position: 'bottom',
  strength: 2,
  height: '6rem',
  divCount: 5,
  exponential: false,
  zIndex: 1000,
  animated: false,
  duration: '0.3s',
  easing: 'ease-out',
  opacity: 1,
  curve: 'linear',
  responsive: false,
  target: 'parent',
  className: '',
  style: {}
};

export const PRESETS: Record<string, Partial<GradualBlurProps>> = {
  top: { position: 'top', height: '6rem' },
  bottom: { position: 'bottom', height: '6rem' },
  left: { position: 'left', height: '6rem' },
  right: { position: 'right', height: '6rem' },

  subtle: { height: '4rem', strength: 1, opacity: 0.8, divCount: 3 },
  intense: { height: '10rem', strength: 4, divCount: 8, exponential: true },

  smooth: { height: '8rem', curve: 'bezier', divCount: 10 },
  sharp: { height: '5rem', curve: 'linear', divCount: 4 },

  header: { position: 'top', height: '8rem', curve: 'ease-out' },
  footer: { position: 'bottom', height: '8rem', curve: 'ease-out' },
  sidebar: { position: 'left', height: '6rem', strength: 2.5 },

  'page-header': {
    position: 'top',
    height: '10rem',
    target: 'page',
    strength: 3
  },
  'page-footer': {
    position: 'bottom',
    height: '10rem',
    target: 'page',
    strength: 3
  }
};

export const CURVE_FUNCTIONS: Record<string, (p: number) => number> = {
  linear: p => p,
  bezier: p => p * p * (3 - 2 * p),
  'ease-in': p => p * p,
  'ease-out': p => 1 - Math.pow(1 - p, 2),
  'ease-in-out': p => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2)
};

export const CountOnData: CountOnData[] = [
  { number: 100, label: "More Secure", symbol: "%" },
  { number: 5750, label: "Users Active", symbol: "+" },
  { number: 250, label: "Projects Completed", symbol: "+" },
];

export const ServicesSectionData: { title: string; description: string }[] = [
  {
    title: "Web Design & Development",
    description: "We design and build high-performance websites using modern frameworks. Every build is optimized for speed, maintainability, and long-term scalability."
  }, 
  {
    title: "UI/UX Design",
    description: "Interfaces crafted with a strong focus on usability, accessability, and visual hierarchy, ensuring users can navigate and understand your products effortlessly."
  },
  {
    title: "Motion & Interaction",
    description: "Subtle yet meaningful animations that enhance user expirience, guide attention, and bring interfaces to life without unnecessary disctraction.",  
  }, 
  {
    title: "Branding & Visual Systems",
    description: "We create consistent visual identities and design systems that help brands stay recognizable, flexible, and future-ready."
  }
];

export const ProcessSectionData: { title: string; description: string }[] = [
  {
    title: "Discovery",
    description: "We begin by understanding your goals, audience, challenges to establish a clear project direction."
  },
  {
    title: "Design",
    description: "We translate insights into structured layouts, visual systems, and interaction concepts."
  },
  {
    title: "Development",
    description: "We build using modern, scalable technologies with performance and maintanability in mind",
  },
  {
    title: "Lauch & Iterate",
    description: "After launch, we refine, optimize, and support continuous improvements when needed."
  }
];