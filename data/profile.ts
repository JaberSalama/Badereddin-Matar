import type {
  PersonalInfo,
  Stat,
  SkillCategory,
  Experience,
  Education,
  Certification,
  Service,
  Project,
  Testimonial,
  NavLink,
} from '@/types'

export const personalInfo: PersonalInfo = {
  name: 'Badereddin Matar',
  firstName: 'Badereddin',
  lastName: 'Matar',
  initials: 'BM',
  title: 'Full-Stack Laravel Developer',
  subtitle: 'Backend-Focused',
  /*bio: 'Full-Stack Laravel Developer (Backend-Focused) with strong experience building scalable business systems, RESTful APIs, and interactive dashboards using Laravel, JavaScript, MySQL, and Redis.',*/
  fullBio:
    'Full-Stack Laravel Developer with a passion for building scalable, high-performance web applications. I specialize in designing robust backend architectures, RESTful APIs, and business automation systems. With experience across multiple industries including e-commerce, logistics, academia, and government sectors, I deliver solutions that make a real impact. Skilled in clean architecture, TDD, and performance optimization to ensure maintainable and reliable code.',
  location: 'Cairo, Egypt',
  phone: '+201003864413',
  email: 'mattar.bader99@gmail.com',
  linkedin: 'https://linkedin.com/in/badereddin-matar-437684224/',
  github: 'https://github.com/Bader533/',
  cvUrl: '/cv.pdf',
  availability: 'Available for Hire',
}

export const stats: Stat[] = [
  { label: 'Years of Experience', value: 4, suffix: '+', icon: 'Calendar' },
  { label: 'Projects Completed', value: 15, suffix: '+', icon: 'Briefcase' },
  { label: 'Happy Clients', value: 10, suffix: '+', icon: 'Users' },
  { label: 'Training Hours', value: 289, suffix: '+', icon: 'Award' },
]

export const skillCategories: SkillCategory[] = [
  {
    name: 'Backend Development',
    icon: 'Server',
    skills: [
      { name: 'Laravel', level: 95, category: 'backend' },
      { name: 'PHP', level: 90, category: 'backend' },
      { name: 'MySQL', level: 88, category: 'backend' },
      { name: 'Redis', level: 82, category: 'backend' },
      { name: 'REST APIs', level: 92, category: 'backend' },
      { name: 'Queues & Jobs', level: 80, category: 'backend' },
      { name: 'RBAC Systems', level: 85, category: 'backend' },
    ],
  },
  {
    name: 'Frontend Development',
    icon: 'Monitor',
    skills: [
      { name: 'JavaScript (ES6)', level: 78, category: 'frontend' },
      { name: 'Blade Templates', level: 88, category: 'frontend' },
      { name: 'HTML5 & CSS3', level: 82, category: 'frontend' },
      { name: 'Responsive Design', level: 80, category: 'frontend' },
    ],
  },
  {
    name: 'Architecture & Design',
    icon: 'Layers',
    skills: [
      { name: 'Clean Architecture', level: 88, category: 'architecture' },
      { name: 'SOLID Principles', level: 85, category: 'architecture' },
      { name: 'Modular Design', level: 87, category: 'architecture' },
      { name: 'TDD', level: 82, category: 'architecture' },
    ],
  },
  {
    name: 'Tools & Collaboration',
    icon: 'GitBranch',
    skills: [
      { name: 'Git & GitHub', level: 88, category: 'tools' },
      { name: 'Agile / Scrum', level: 80, category: 'tools' },
      { name: 'CI / CD', level: 75, category: 'tools' },
      { name: 'Unit & Feature Testing', level: 82, category: 'tools' },
    ],
  },
]

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Full-Stack Developer',
    company: 'British Academy For Training And Development',
    location: 'London, United Kingdom',
    period: 'May 2024 – Present',
    current: true,
    type: 'remote',
    description: [
      'Provided technical maintenance and feature development for the academy\'s main web platform serving 10,000+ users.',
      'Built dynamic dashboards and workflow-based modules, reducing manual reporting time by 40%.',
      'Led the integration of RESTful APIs, ensuring seamless communication between front-end and back-end systems.',
      'Optimized performance and scalability, improving page load speed by 30%.',
      'Applied TDD and Clean Architecture to maintain long-term code stability and reliability.',
    ],
  },
  {
    id: 'exp-2',
    role: 'Full-Stack Developer',
    company: 'Operate Solution',
    location: 'Saudi Arabia',
    period: 'Sep 2024 – Feb 2025',
    current: false,
    type: 'remote',
    description: [
      'Improved backend performance and scalability to support 15,000+ active users.',
      'Reduced page response time by 35% through query optimization and effective caching strategies.',
      'Built a dynamic Excel import system capable of processing 5,000+ records with real-time validation.',
      'Applied Test-Driven Development (TDD) to reduce production bugs and increase release confidence.',
    ],
  },
  {
    id: 'exp-3',
    role: 'Freelance Full-Stack Laravel Developer',
    company: 'Mostaql Platform',
    location: 'Remote',
    period: 'Jun 2022 – Present',
    current: true,
    type: 'remote',
    description: [
      'Shipping Management Platform: 1,200+ monthly delivery orders; reduced invoice errors by 40%; improved response time by 60% with Redis caching.',
      'Sales & Installment System: Serves 500+ customers; automated payment plans; reduced missed payments by 40%.',
      'Accommodation Booking Platform: Supported 1,000+ rental bookings; reduced API response time by 30%.',
      'Manufacturing & Sales ERP (Saudi Company): Production, procurement, sales, bank reconciliation, and exportable financial reports.',
    ],
  },
  {
    id: 'exp-4',
    role: 'Full-Stack Laravel Developer',
    company: 'Badri & Hania Trading Company',
    location: 'Gaza Strip, Palestine',
    period: 'Jul 2023 – Sep 2023',
    current: false,
    type: 'onsite',
    description: [
      'Developed a multi-branch POS and inventory management system used across 15+ retail stores.',
      'Reduced invoice processing errors by 45% with automated printing and barcode validation.',
      'Integrated Call Center API to recognize customers and retrieve order history, improving call handling by 40%.',
      'Implemented real-time inventory synchronization across all branches, reducing stock mismatch by 30%.',
    ],
  },
  {
    id: 'exp-5',
    role: 'Back-End Developer',
    company: 'Ministry of Interior',
    location: 'Gaza Strip, Palestine',
    period: 'Nov 2021 – Jan 2022',
    current: false,
    type: 'onsite',
    description: [
      'Developed a committee management system, reducing approval time by 60%.',
      'Built a secure RBAC system to control permissions across departments.',
      'Improved system response time by optimizing SQL queries.',
    ],
  },
]

export const educations: Education[] = [
  {
    id: 'edu-1',
    degree: "Bachelor's Degree",
    field: 'Information Technology',
    institution: 'Islamic University of Gaza',
    location: 'Gaza Strip, Palestine',
    year: '2022',
    description:
      'Comprehensive study of software engineering, database management, algorithms, and computer networks. Built a strong foundation in object-oriented programming and system design principles.',
  },
]

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: 'Laravel 9 – Build Complete Multi Vendor Ecommerce Project A-Z',
    issuer: 'Udemy',
    hours: 79,
    year: '2022',
  },
  {
    id: 'cert-2',
    name: 'Java Programming Course',
    issuer: 'Vision Plus Education Center',
    hours: 50,
  },
  {
    id: 'cert-3',
    name: 'Flutter & Freelance Work Course',
    issuer: 'Vision Plus Education Center',
    hours: 60,
  },
  {
    id: 'cert-4',
    name: 'PHP Laravel Course',
    issuer: 'Ajyal Association for Creativity and Development',
    hours: 50,
  },
  {
    id: 'cert-5',
    name: 'Web Development: JS, MySQL, PHP & Laravel',
    issuer: 'Vision Plus Education Center',
    hours: 50,
  },
]

export const services: Service[] = [
  {
    id: 'srv-1',
    title: 'Backend Development',
    description: 'Building robust, scalable backend systems with Laravel, RESTful APIs, and optimized database architecture.',
    icon: 'Server',
    features: ['RESTful API Design', 'MySQL & Redis', 'Queue Management', 'RBAC Systems'],
  },
  {
    id: 'srv-2',
    title: 'Full-Stack Web Development',
    description: 'End-to-end web application development with clean architecture and seamless frontend-backend integration.',
    icon: 'Globe',
    features: ['Laravel + JavaScript', 'Blade Templating', 'Responsive UI', 'SPA Integration'],
  },
  {
    id: 'srv-3',
    title: 'ERP & Business Systems',
    description: 'Custom enterprise resource planning systems for manufacturing, sales, inventory, and financial management.',
    icon: 'BarChart3',
    features: ['Inventory Management', 'Financial Reports', 'Multi-branch Support', 'Workflow Automation'],
  },
  {
    id: 'srv-4',
    title: 'Performance Optimization',
    description: 'Analyzing and optimizing application performance through query tuning, caching, and architectural improvements.',
    icon: 'Zap',
    features: ['Redis Caching', 'Query Optimization', 'Load Time Reduction', 'Scalability Planning'],
  },
  {
    id: 'srv-5',
    title: 'POS & Retail Systems',
    description: 'Multi-branch point-of-sale systems with real-time inventory sync, barcode support, and automated workflows.',
    icon: 'ShoppingCart',
    features: ['Multi-branch POS', 'Barcode Integration', 'Call Center API', 'Invoice Automation'],
  },
  {
    id: 'srv-6',
    title: 'Clean Architecture & TDD',
    description: 'Applying SOLID principles, clean architecture, and test-driven development for reliable, maintainable codebases.',
    icon: 'Code',
    features: ['SOLID Principles', 'Unit & Feature Tests', 'Code Review', 'Modular Design'],
  },
]

export const projects: Project[] = [
  {
    id: 'proj-1',
    name: 'British Academy Platform',
    description: 'Full-featured web platform serving 10,000+ users with dynamic dashboards, workflow modules, and RESTful API integration.',
    technologies: ['Laravel', 'MySQL', 'Redis', 'JavaScript', 'REST APIs'],
    category: 'Full-Stack',
    highlights: ['10,000+ active users', '40% less manual reporting', '30% faster page load'],
  },
  {
    id: 'proj-2',
    name: 'Shipping Management Platform',
    description: 'High-volume shipping management system handling 1,200+ monthly deliveries with Redis caching and real-time tracking.',
    technologies: ['Laravel', 'MySQL', 'Redis', 'REST APIs', 'JavaScript'],
    category: 'Backend',
    highlights: ['1,200+ monthly orders', '60% faster response', '40% fewer invoice errors'],
  },
  {
    id: 'proj-3',
    name: 'Sales & Installment System',
    description: 'Automated sales and installment management for 500+ customers with payment plan automation and agreement generation.',
    technologies: ['Laravel', 'MySQL', 'JavaScript', 'Blade'],
    category: 'Full-Stack',
    highlights: ['500+ customers', '40% fewer missed payments', 'Automated agreements'],
  },
  {
    id: 'proj-4',
    name: 'Accommodation Booking Platform',
    description: 'Rental booking platform supporting 1,000+ bookings with optimized API response times through clean architecture.',
    technologies: ['Laravel', 'MySQL', 'REST APIs', 'JavaScript'],
    category: 'Full-Stack',
    highlights: ['1,000+ bookings', '30% API improvement', 'Clean architecture'],
  },
  {
    id: 'proj-5',
    name: 'Manufacturing & Sales ERP',
    description: 'Comprehensive ERP for a Saudi company managing production, procurement, sales, financials, and exportable reports.',
    technologies: ['Laravel', 'MySQL', 'JavaScript', 'Excel Export', 'RBAC'],
    category: 'ERP',
    highlights: ['Multi-module ERP', 'Financial reports', 'Bank reconciliation'],
  },
  {
    id: 'proj-6',
    name: 'Multi-Branch POS System',
    description: 'Complete POS and inventory management system deployed across 15+ retail stores with real-time synchronization.',
    technologies: ['Laravel', 'MySQL', 'Barcode API', 'Call Center API', 'JavaScript'],
    category: 'POS',
    highlights: ['15+ retail stores', '45% fewer invoice errors', 'Real-time sync'],
  },
  {
    id: 'proj-7',
    name: 'Operate Solution Platform',
    description: 'High-performance enterprise platform supporting 15,000+ active users with optimized queries and Excel import system.',
    technologies: ['Laravel', 'MySQL', 'Redis', 'TDD', 'Excel Import'],
    category: 'Backend',
    highlights: ['15,000+ active users', '35% faster response', '5,000+ records per import'],
  },
  {
    id: 'proj-8',
    name: 'Committee Management System',
    description: 'Government committee management system with RBAC, workflow automation, and SQL query optimization.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'RBAC'],
    category: 'Backend',
    highlights: ['60% faster approvals', 'Secure RBAC', 'SQL optimization'],
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Ahmed Al-Rashidi',
    role: 'CTO',
    company: 'Operate Solution',
    content:
      "Badereddin's work on our platform was exceptional. He improved performance significantly and delivered clean, well-tested code. His expertise in Laravel and Redis made a real difference for our 15,000+ users.",
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'Sarah Mitchell',
    role: 'Head of Technology',
    company: 'British Academy For Training',
    content:
      'Working with Badereddin was a pleasure. He built powerful dashboards and workflow modules that reduced our manual processes by 40%. His commitment to quality and TDD practices is outstanding.',
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'Mohammed Al-Farsi',
    role: 'Founder',
    company: 'Saudi Manufacturing Co.',
    content:
      'Badereddin delivered a comprehensive ERP system that transformed how we manage operations. The financial reporting and inventory features are exactly what we needed. Highly recommended.',
    rating: 5,
  },
]

export const navLinks: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]
