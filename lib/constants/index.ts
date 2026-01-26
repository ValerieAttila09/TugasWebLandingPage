import { Globe, Code, Zap } from 'lucide-react';
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

export const FeaturesSectionData: { title: string; description: string }[] = [
  {
    title: "Backend as a Service",
    description: "Build scalable backend infrastructure without managing servers. Deploy APIs, handle authentication, and manage data with zero infrastructure overhead."
  },
  {
    title: "Real-time Database",
    description: "Sync data across your applications instantly with our real-time database. Perfect for collaborative apps, live dashboards, and responsive user experiences."
  },
  {
    title: "Orchestration & Automation",
    description: "Automate workflows, schedule tasks, and integrate services seamlessly. Connect your entire tech stack with powerful orchestration tools built for developers."
  },
  {
    title: "Developer-Friendly APIs",
    description: "Well-documented REST and WebSocket APIs with SDKs for multiple languages. Get up and running in minutes with code examples and comprehensive documentation."
  }
];

export const PricingSectionData: PricingSectionData = {
  pricingDescription: [
    {
      label: "SERVICE PACKAGES",
      title: "Scale your backend infrastructure.",
      description: "Choose from our comprehensive BaaS packages designed to support your application from prototype to production-scale success.",
      additionalContent: "All packages include 99.9% uptime SLA and free technical onboarding."
    },
    {
      label: "CUSTOM SOLUTION",
      title: "Need enterprise features?",
      description: "Contact us for custom BaaS solutions tailored to your specific infrastructure, compliance, and scalability requirements."
    },
    {
      label: "SUPPORT",
      title: "24/7 Technical Support",
      description: "Our expert team monitors your infrastructure continuously. Get priority support, performance optimization, and instant assistance when needed."
    }
  ],
  pricingOfferDetail: [
    {
      title: "Starter",
      subtitle: "Perfect for prototypes and MVPs",
      price: "FREE",
      guaranteedServices: ["5GB Database Storage", "1M API Requests/month"],
      benefits: ["REST & WebSocket APIs", "Real-time Database", "Basic Authentication", "Up to 2 Projects", "Community Support", "Standard Performance"],
    },
    {
      title: "Pro",
      subtitle: "Complete backend solution",
      price: "$29.9",
      guaranteedServices: ["500GB Database Storage", "50M API Requests/month", "Advanced Analytics"],
      benefits: ["All Starter features", "Advanced Authentication (OAuth, JWT)", "Database Orchestration", "Scheduled Tasks & Automation", "WebSocket Streaming", "Email & SMS Integration", "Advanced Monitoring", "Custom Domains", "Priority Support", "Data Backup & Recovery", "Up to 50 Projects", "99.9% Uptime SLA"],
    },
    {
      title: "Enterprise",
      subtitle: "Unlimited scale and control",
      price: "Custom",
      guaranteedServices: ["Unlimited Storage", "Unlimited API Requests", "Dedicated Infrastructure"],
      benefits: ["All Pro features", "White-label Solutions", "Custom SLA & Support", "Dedicated Account Manager", "Advanced Security & Compliance", "Multi-region Deployment", "Custom Integrations", "Load Balancing", "CDN Included", "Advanced DDoS Protection", "Custom Development", "Unlimited Projects"],
    },
  ]
}

export const FAQSectionData: FAQSectionData[] = [
  {
    question: "What services does your studio provide?",
    answer: "We offer end-to-end digital services, including web design and development, UI/UX design, motion and interaction design, as well as branding and visual systems. Each project is tailored to the specific goals and needs of our clients.",
  },
  {
    question: "What types of clients do you usually work with?",
    answer: "We work with startups, growing businesses, and established brands that value clarity, quality, and long-term scalability. Whether you are launching a new product or refining an existing one, we adapt our approach to fit your stage.",
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on scope and complexity. Most projects typically take between 3 to 8 weeks, covering discovery, design, development, and launch. A detailed timeline is provided before the project begins.",
  },
  {
    question: "Do you offer custom designs or use templates?",
    answer: "All our projects are custom-designed. We do not rely on generic templates, ensuring each solution reflects your brand identity and project objectives while remaining flexible and scalable.",
  },
  {
    question: "How do you handle revisions and feedback?",
    answer: "We work in clear, structured phases and encourage feedback at key milestones. This approach ensures revisions are efficient, focused, and aligned with the project goals without unnecessary back-and-forth.",
  },
  {
    question: "Will the website be optimized for performance and SEO?",
    answer: "Yes. Performance and SEO are considered from the start. We follow best practices for clean code, responsive design, accessibility, and optimization to ensure your website performs well across devices and search engines.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "We offer post-launch support and maintenance options, including updates, optimizations, and feature enhancements, depending on your needs.",
  },
  {
    question: "How do we start a project with your studio?",
    answer: "You can start by reaching out through our contact form. We'll schedule an initial discussion to understand your goals, scope, and timeline before proposing the next steps.",
  },
];

export const DottedMapMarkersData = [
  {
    lat: 40.7128,
    lng: -74.006,
    size: 0.3,
  }, // New York
  {
    lat: 34.0522,
    lng: -118.2437,
    size: 0.3,
  }, // Los Angeles
  {
    lat: 51.5074,
    lng: -0.1278,
    size: 0.3,
  }, // London
  {
    lat: -33.8688,
    lng: 151.2093,
    size: 0.3,
  }, // Sydney
  {
    lat: 48.8566,
    lng: 2.3522,
    size: 0.3,
  }, // Paris
  {
    lat: 35.6762,
    lng: 139.6503,
    size: 0.3,
  }, // Tokyo
  {
    lat: 55.7558,
    lng: 37.6176,
    size: 0.3,
  }, // Moscow
  {
    lat: 39.9042,
    lng: 116.4074,
    size: 0.3,
  }, // Beijing
  {
    lat: 28.6139,
    lng: 77.209,
    size: 0.3,
  }, // New Delhi
  {
    lat: -23.5505,
    lng: -46.6333,
    size: 0.3,
  }, // São Paulo
  {
    lat: 1.3521,
    lng: 103.8198,
    size: 0.3,
  }, // Singapore
  {
    lat: 25.2048,
    lng: 55.2708,
    size: 0.3,
  }, // Dubai
  {
    lat: 52.52,
    lng: 13.405,
    size: 0.3,
  }, // Berlin
  {
    lat: 19.4326,
    lng: -99.1332,
    size: 0.3,
  }, // Mexico City
  {
    lat: -26.2041,
    lng: 28.0473,
    size: 0.3,
  }, // Johannesburg
];

// Connection Setup Integration
export const CODES_CONNECTION_SETUP = {
  Go: {
    code: `package xenore

import (
  "bytes"
  "encoding/json"
  "net/http"
  "time"
)

type Client struct {
  APIKey  string
  BaseURL string
  Client  *http.Client
}

func NewClient(apiKey string) *Client {
  return &Client{
    APIKey:  apiKey,
    BaseURL: "https://api.xenora.studio",
    Client: &http.Client{
      Timeout: 10 * time.Second,
    },
  }
}

func (c *Client) RegisterProject(projectName string) error {
  payload := map[string]string{
    "name": projectName,
  }

  body, _ := json.Marshal(payload)

  req, err := http.NewRequest(
    "POST",
    c.BaseURL+"/v1/projects",
    bytes.NewBuffer(body),
  )
  if err != nil {
    return err
  }

  req.Header.Set("Authorization", "Bearer "+c.APIKey)
  req.Header.Set("Content-Type", "application/json")

  resp, err := c.Client.Do(req)
  if err != nil {
    return err
  }
  defer resp.Body.Close()

  return nil
}`,
    description: 'Send project metadata from the Go backend to your website platform.'
  },
  Python: {
    code: `import requests
from typing import Dict

class KinetixClient:
    def __init__(self, api_key: str, base_url: str = "https://api.xenora.studio"):
        self.api_key = api_key
        self.base_url = base_url

    def sync_project(self, project_id: str, metadata: Dict):
        response = requests.post(
            f"{self.base_url}/v1/projects/{project_id}/sync",
            json=metadata,
            headers={
                "Authorization": f"Bearer {self.api_key}",
                "Content-Type": "application/json"
            },
            timeout=10
        )

        response.raise_for_status()
        return response.json()`,
    description: 'Connect Python projects for reporting or automation tasks.'
  },
  TypeScript: {
    code: `// xenora-client.ts
export interface KinetixConfig {
  apiKey: string;
  baseUrl?: string;
}

export class KinetixClient {
  private apiKey: string;
  private baseUrl: string;

  constructor(config: KinetixConfig) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl ?? "https://api.xenora.studio";
  }

  async connectProject(projectId: string) {
    const response = await fetch(
      \`\${this.baseUrl}/v1/projects/\${projectId}/connect\`,
      {
        method: "POST",
        headers: {
          "Authorization": \`Bearer \${this.apiKey}\`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to connect project");
    }

    return response.json();
  }
}`,
    description: 'Connect your frontend project or Node.js app to your website platform.'
  }
};

// Database Schema Integration
export const CODES_DATABASE_SCHEMA = {
  Go: {
    code: `package kinetixdb

import "github.com/kinetix/platform-go/db"

func RegisterSchemas() error {
	return db.Register(
		db.Schema("projects",
			db.UUID("id").Primary(),
			db.String("name").Required(),
			db.Enum("environment", []string{"dev", "staging", "prod"}),
			db.Timestamp("created_at").Auto(),
		),
		db.Schema("events",
			db.UUID("id").Primary(),
			db.UUID("project_id").Index(),
			db.String("type"),
			db.JSON("payload"),
			db.Timestamp("created_at").Auto(),
		),
	)
}`,
    description: 'Register schema to the platform from your Go backend service.'
  },
  Python: {
    code: `from kinetix.db import Model, fields

class Project(Model):
    table = "projects"

    id = fields.UUID(primary_key=True)
    name = fields.String(required=True)
    environment = fields.Enum(["development", "staging", "production"])
    created_at = fields.Timestamp(auto_now_add=True)

class Event(Model):
    table = "events"

    id = fields.UUID(primary_key=True)
    project_id = fields.UUID(index=True)
    type = fields.String()
    payload = fields.JSON()
    created_at = fields.Timestamp(auto_now_add=True)`,
    description: 'Access schema project from your Python service or data pipeline.'
  },
  TypeScript: {
    code: `// kinetix/schema.ts
import { defineSchema, Field, Relations } from "@kinetix/platform-db";

export const ProjectSchema = defineSchema("projects", {
  id: Field.uuid({ primary: true }),
  name: Field.string({ required: true }),
  environment: Field.enum(["development", "staging", "production"]),
  createdAt: Field.timestamp({ default: "now" }),
});

export const EventSchema = defineSchema("events", {
  id: Field.uuid({ primary: true }),
  projectId: Field.uuid({ index: true }),
  type: Field.string(),
  payload: Field.json(),
  createdAt: Field.timestamp({ default: "now" }),
});

export const relations = Relations.define({
  project: Relations.one(ProjectSchema, {
    hasMany: [EventSchema],
  }),
});`,
    description: 'Define database schema project connected directly to the Kinetix platform.'
  },
};

// WebSocket Integration
export const CODES_WEBSOCKET_INTEGRATION = {
  Go: {
    code: `package kinetixrealtime

import "github.com/kinetix/platform-go/realtime"

func PublishDeployment(projectID string, status string) error {
	client := realtime.NewClient(realtime.Config{
		APIKey: "KINETIX_API_KEY",
	})

	return client.Publish("project:status", map[string]string{
		"projectId": projectID,
		"status":    status,
	})
}`,
    description: 'Send real-time events from your backend service.'
  },
  Python: {
    code: `from kinetix.realtime import RealtimeClient

client = RealtimeClient(api_key="KINETIX_API_KEY")

@client.on("project:events")
def handle_event(event):
    print("Event received:", event)

@client.on("project:status")
def handle_status(status):
    print("Status updated:", status)

client.connect()`,
    description: 'Listen to events for automation or alerting.'
  },
  TypeScript: {
    code: `// kinetix/realtime.ts
import { KinetixSocket } from "@kinetix/platform-realtime";

const socket = new KinetixSocket({
  apiKey: process.env.NEXT_PUBLIC_KINETIX_KEY!,
});

socket.connect();

socket.subscribe("project:events", (event) => {
  console.log("New event received:", event);
});

socket.subscribe("project:status", (status) => {
  console.log("Project status updated:", status);
});`,
    description: 'Listen to real-time project events in your web dashboard.'
  },
};

// Default export for backward compatibility
export const CODES = CODES_CONNECTION_SETUP;

export const INTEGRATIONS = [
  {
    id: 'connection-setup',
    icon: Globe,
    title: 'Connection Setup',
    description: 'Connect to Xenora platform with HTTP request',
  },
  {
    id: 'database-schema',
    icon: Code,
    title: 'Database Schema',
    description: 'Define database schema with easy-to-understand syntax',
  },
  {
    id: 'websocket-integration',
    icon: Zap,
    title: 'WebSocket Integration',
    description: 'Real-time communication with WebSockets',
  },
];

export const footerLinks = {
  Product: [
    { label: 'API Reference', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'Status', href: '#' },
    { label: 'Roadmap', href: '#' },
  ],
  Resources: [
    { label: 'Blog', href: '#' },
    { label: 'Guides', href: '#' },
    { label: 'Changelog', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'Resources', href: '#' },
  ],
  Developers: [
    { label: 'GitHub', href: '#' },
    { label: 'Examples', href: '#' },
    { label: 'SDKs', href: '#' },
    { label: 'Integration', href: '#' },
    { label: 'Webhooks', href: '#' },
    { label: 'Architecture', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Partners', href: '#' },
    { label: 'Book a demo', href: '#' },
  ],
};

export const features = [
  { icon: '∞', label: 'Unlimited API Calls' },
  { icon: '⚡', label: 'High Performance' },
  { icon: '🔒', label: 'Enterprise Security' },
  { icon: '💬', label: 'Priority Support' },
];