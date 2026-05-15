import {
  Achievement,
  Education,
  Experience,
  NavigationItem,
  Profile,
  Project,
  SkillGroup,
} from '../models/portfolio.model';

export const navigationItems: readonly NavigationItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const profile: Profile = {
  name: 'Pidchanard',
  role: 'Aspiring Software Developer',
  tagline: 'No Boundary, Make Tomorrow Better than Today',
  location: 'Bangkok 10250, Thailand',
  email: 'pidchanard.m@gmail.com',
  summary:
    'Aspiring Software Developer specializing in Frontend (Angular/Tailwind) and Android platforms. I bridge the gap between web and mobile by leveraging a strong foundation in .NET and a problem-solving mindset. Dedicated to mastering modern frameworks and committed to building scalable, user-centric applications for every screen.',
  metrics: [
    { value: '3+', label: 'Years learning and building' },
    { value: '12+', label: 'Web and mobile projects' },
    { value: 'Full-stack', label: 'Product mindset' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/nubnibjung' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pidchanard-mueanson-44a878325/' },
    { label: 'Email', href: 'mailto:pidchanard.m@gmail.com' },
  ],
};

export const experiences: readonly Experience[] = [
  {
    company: 'Gofive',
    role: 'Front-End Developer',
    period: 'Apr 2025 - Apr 2026',
    type: 'Intern',
    description:
      'Enhanced CRM and e-commerce platforms using Angular and Tailwind CSS in an Agile team.',
    highlights: [
      'Collaborated in an Agile (Scrum) team to enhance CRM and e-commerce platforms using Angular and Tailwind CSS.',
      'Improved user experience by implementing Dark Mode, resolving UI jitter, and integrating interactive feedback components.',
      'Optimized system reliability by fixing complex rendering bugs, data validation logic, and HTML formatting issues.',
      'Executed system migration of legacy components to a Micro Frontend architecture aligned with modern Design System and Clean Code principles.',
    ],
    technologies: ['Angular', 'Tailwind CSS', 'RxJS', 'Angular Signals', 'Micro Frontend'],
  },
];

export const education: Education = {
  school: 'Kasetsart University, Sriracha Campus',
  degree: 'Bachelor of Science in Information Technology',
  period: 'June 2022 - April 2026',
  description:
    'GPA 3.36, Good Study Award, and Very Good Oral Presentation Award.',
};

export const skillGroups: readonly SkillGroup[] = [
  {
    title: 'Skills',
    skills: [
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Angular',
      'Flutter',
      'C++',
      'node.js',
      'Python',
      '.NET',
      'Kotlin',
      'Micro Frontend',
      'Component-Based Architecture',
      'MSSQL',
      'MySQL',
      'Angular Signals',
      'RxJS',
      'Jira',
      'Figma',
      'Git',
      'Postman',
      'Swagger',
      'VS Code',
    ],
  },
];

export const projects: readonly Project[] = [
  {
    title: 'Namkub',
    period: '2023',
    description:
      'A water distribution and e-commerce platform built with Angular and Node.js (Express), featuring a responsive product catalog, real-time shopping cart management, multi-step checkout workflow, Reactive Forms validation, and RESTful API integration.',
    technologies: ['Angular', 'Node.js', 'Express', 'MSSQL', 'Reactive Forms', 'REST API'],
    links: [
      { label: 'Live Demo', href: 'https://numkub.netlify.app/' },
      { label: 'Source', href: 'https://github.com/pidchanard/NAMKUB-Store-me' },
    ],
  },
  {
    title: 'VillaReserve',
    period: '2024',
    description:
      'A village facility booking system for housing estates with real-time scheduling, automated conflict resolution to prevent double bookings, and an administrative dashboard for monitoring usage quotas and approving requests.',
    technologies: ['Angular', '.NET', 'SQL Server'],
    links: [
      { label: 'Live Demo', href: 'https://village-club.netlify.app/' },
      { label: 'Source', href: 'https://github.com/pidchanard/VillageClubHouse-demo' },
    ],
  },
  {
    title: 'ScoopHub',
    period: '2025',
    description:
      'A complete online ice cream shop with dynamic product catalog, shopping cart, order tracking, inventory control, user account management, and secure transaction records.',
    technologies: ['PHP', 'MySQL', 'E-commerce'],
    links: [
      { label: 'Live Demo', href: 'https://icecreampidchanard.infinityfree.me/' },
      { label: 'Source', href: 'https://github.com/nubnibjung' },
    ],
  },
];

export const achievements: readonly Achievement[] = [
  {
    title: 'Hackathon Prototype',
    date: '2024',
    location: 'Bangkok, Thailand',
    description:
      'Built a working prototype under tight deadlines while collaborating on product scope, UI, and technical implementation.',
  },
  {
    title: 'Programming Competition',
    date: '2023',
    location: 'Thailand',
    description:
      'Practiced algorithmic problem solving, team communication, and rapid debugging in a competitive environment.',
  },
  {
    title: 'Open Learning Projects',
    date: '2022 - Present',
    location: 'Remote',
    description:
      'Continuously improves by building projects, reading technical documentation, and refining code quality through iteration.',
  },
];
