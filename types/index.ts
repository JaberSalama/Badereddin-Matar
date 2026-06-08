export interface SkillItem {
  name: string
  level: number
  category: string
}

export interface SkillCategory {
  name: string
  icon: string
  skills: SkillItem[]
}

export interface Experience {
  id: string
  role: string
  company: string
  location: string
  period: string
  current: boolean
  type: 'remote' | 'onsite' | 'hybrid'
  description: string[]
}

export interface Education {
  id: string
  degree: string
  field: string
  institution: string
  location: string
  year: string
  description?: string
}

export interface Certification {
  id: string
  name: string
  issuer: string
  hours?: number
  year?: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  category: string
  highlights?: string[]
  link?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
}

export interface Stat {
  label: string
  value: number
  suffix?: string
  icon: string
}

export interface NavLink {
  href: string
  label: string
}

export interface PersonalInfo {
  name: string
  firstName: string
  lastName: string
  initials: string
  title: string
  subtitle: string
  bio: string
  fullBio: string
  location: string
  phone: string
  email: string
  linkedin: string
  github: string
  cvUrl: string
  availability: string
}
