export interface DeveloperProfile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  yearsOfExperience: number;
  projectsCompleted: number;
  availability: 'Available for Hire' | 'Contract / Freelance' | 'Open to Discussion';
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  twitter: string;
  devTo: string;
  whatsapp?: string;
  website?: string;
  avatarUrl: string;
  resumeSummary: string;
  topSkills: string[];
}

export interface ProjectArchitecture {
  client: string;
  server: string;
  database: string;
  auth: string;
  deployment: string;
}

export interface ProjectSnippets {
  mongoSchema: string;
  expressRoute: string;
  reactComponent: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'mern' | 'frontend' | 'backend' | 'realtime';
  image: string;
  metrics: string;
  stars: number;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  highlights: string[];
  architecture: ProjectArchitecture;
  snippets: ProjectSnippets;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Remote';
  location: string;
  summary: string;
  achievements: string[];
  techStack: string[];
}

export interface SkillItem {
  name: string;
  proficiency: number; // 0-100
  years: string;
  featured?: boolean;
}

export interface SkillGroup {
  category: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface CodeSnippet {
  id: string;
  title: string;
  category: string;
  filename: string;
  language: string;
  description: string;
  code: string;
}

export interface ApiWorkbenchEndpoint {
  id: string;
  name: string;
  method: 'GET' | 'POST' | 'DELETE' | 'PUT';
  path: string;
  description: string;
  defaultPayload?: string;
  responseStatus: number;
  responseTimeMs: number;
  middlewareChain: string[];
  expressRouteCode: string;
  mongoPipelineCode: string;
  responseFn: (payload?: any) => any;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  avatar: string;
  content: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  createdAt: string;
}

export interface ServiceOffer {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
  popularTech: string[];
  turnaround: string;
  priceRange?: string;
}
