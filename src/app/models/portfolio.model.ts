export interface NavigationItem {
  readonly label: string;
  readonly href: string;
}

export interface Profile {
  readonly name: string;
  readonly role: string;
  readonly tagline: string;
  readonly location: string;
  readonly email: string;
  readonly summary: string;
  readonly metrics: readonly ProfileMetric[];
  readonly socials: readonly SocialLink[];
}

export interface ProfileMetric {
  readonly value: string;
  readonly label: string;
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
}

export interface Experience {
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly type: string;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly technologies: readonly string[];
}

export interface Education {
  readonly school: string;
  readonly degree: string;
  readonly period: string;
  readonly description: string;
}

export interface SkillGroup {
  readonly title: string;
  readonly skills: readonly string[];
}

export interface Project {
  readonly title: string;
  readonly period: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly links: readonly SocialLink[];
}

export interface Achievement {
  readonly title: string;
  readonly date: string;
  readonly location: string;
  readonly description: string;
}
