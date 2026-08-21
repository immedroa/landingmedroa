export type ActiveTab = 'inicio' | 'contacto' | 'terminos' | 'privacidad';

export interface CategoryInfo {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlight: string;
  examples: string[];
  maxGrantEstimate: string;
}

export interface MethodStep {
  number: number;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  message: string;
}

export interface ServiceInfo {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  ctaText: string;
  prefillValue: string;
}

