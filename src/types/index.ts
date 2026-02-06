import type { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType;
  description: string;
  proficiency: number;
  category: 'Networking' | 'Programming' | 'Web Development' | 'System Design';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavLink {
  path: string;
  label: string;
}
