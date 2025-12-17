import { LucideIcon } from 'lucide-react';

export interface NavLink {
  name: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  colSpan?: number; // For Bento grid layout
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export interface StepItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  name: string;
  icon: LucideIcon;
  href: string;
}