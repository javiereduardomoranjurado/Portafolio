import { PortfolioProject, SkillGroup, StudentProfile } from '../interfaces/portfolio.interface';

export const STUDENT_PROFILE_MOCK: StudentProfile = {
  name: 'Javier Eduardo Morán Jurado',
  codename: 'SOFTWARE ENGINEER // PORTFOLIO',
  role: 'Desarrollador de Software | Arquitectura Frontend & Full-Stack',
  specialty: 'Arquitectura de Software & Aplicaciones Web Modernas',
  focus: 'Sistemas Modulares, Atomic Design, APIs REST & Automatización CI/CD',
  location: 'Colombia — Remoto / Híbrido',
  githubProfile: 'https://github.com/javiereduardomoranjurado',
  githubUsername: 'javiereduardomoranjurado',
  codecFreq: '140.85',
  summary:
    'Desarrollador de Software enfocado en el diseño y construcción de aplicaciones web escalables y mantenibles. Especializado en el ecosistema Angular, arquitecturas modulares, sistemas de diseño atómico, servicios backend con Node.js y prácticas modernas de pruebas unitarias e integración continua.',
};

export const SKILL_GROUPS_MOCK: SkillGroup[] = [
  {
    title: 'Frontend & Arquitectura UI',
    code: 'UNIT // 01',
    skills: ['Angular', 'TypeScript', 'Astro (SSG)', 'RxJS', 'HTML5 & SCSS', 'Bootstrap 5', 'Atomic Design'],
  },
  {
    title: 'Backend & Diseño de Sistemas',
    code: 'UNIT // 02',
    skills: ['Node.js', 'Express', 'REST APIs', 'Swagger / OpenAPI', 'Arquitectura Cliente-Servidor', 'Clean Architecture'],
  },
  {
    title: 'DevOps, CI/CD & Calidad',
    code: 'UNIT // 03',
    skills: ['GitHub Actions', 'CI/CD Pipelines', 'Jest (Unit Testing)', 'Compodoc', 'Git & GitFlow', 'Linux'],
  },
];

export const PORTFOLIO_PROJECTS_MOCK: PortfolioProject[] = [
  {
    id: 1,
    code: '01',
    name: 'Portafolio Profesional',
    repoName: 'Portafolio',
    category: 'Web Application',
    description:
      'Plataforma web desarrollada en Angular que centraliza mi perfil profesional, stack tecnológico y catálogo de soluciones de software desplegadas en producción.',
    technologies: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap 5', 'Jest', 'GitHub Actions'],
    repoUrl: 'https://github.com/javiereduardomoranjurado/Portafolio',
    liveUrl: 'https://javiereduardomoranjurado.github.io/Portafolio/',
  },
  {
    id: 2,
    code: '02',
    name: 'Uceva-Astro-Angular-SSG-SPA',
    repoName: 'Uceva-Astro-Angular-SSG-SPA',
    category: 'Arquitectura SSG & SPA',
    description:
      'Implementación arquitectónica que combina Static Site Generation (SSG) con Astro y Single Page Application (SPA) en Angular para la gestión de usuarios, catálogo de productos, categorías, reseñas y órdenes.',
    technologies: ['Angular', 'Astro', 'TypeScript', 'SPA & SSG', 'Bootstrap 5', 'Jest'],
    repoUrl: 'https://github.com/javiereduardomoranjurado/Uceva-Astro-Angular-SSG-SPA',
    liveUrl: 'https://javiereduardomoranjurado.github.io/Uceva-Astro-Angular-SSG-SPA/',
  },
  {
    id: 3,
    code: '03',
    name: 'Uceva-Angular-Taller-Design-System',
    repoName: 'Uceva-Angular-Taller-Design-System',
    category: 'Atomic Design System',
    description:
      'Librería de componentes y sistema de diseño basado en Atomic Design (Átomos, Moléculas y Organismos) empaquetado con ng-packagr, con cobertura de pruebas en Jest y documentación técnica en Compodoc.',
    technologies: ['Angular', 'Atomic Design', 'ng-packagr', 'Bootstrap 5', 'Jest', 'Compodoc'],
    repoUrl: 'https://github.com/javiereduardomoranjurado/Uceva-Angular-Taller-Design-System',
    liveUrl: 'https://javiereduardomoranjurado.github.io/Uceva-Angular-Taller-Design-System/',
  },
  {
    id: 4,
    code: '04',
    name: 'Uceva-Angular-Taller-Modules',
    repoName: 'Uceva-Angular-Taller-Modules',
    category: 'Arquitectura Modular',
    description:
      'Aplicación empresarial modular en Angular con NgModules y Lazy Loading que integra módulos independientes de dominio y consumo reactivo en tiempo real de la API REST Jikan v4.',
    technologies: ['Angular', 'NgModules', 'Lazy Loading', 'REST API', 'RxJS', 'Jest'],
    repoUrl: 'https://github.com/javiereduardomoranjurado/Uceva-Angular-Taller-Modules',
    liveUrl: 'https://javiereduardomoranjurado.github.io/Uceva-Angular-Taller-Modules/',
  },
  {
    id: 5,
    code: '05',
    name: 'Uceva-Angular-NodeJS-Taller-Client-Server',
    repoName: 'Uceva-Angular-NodeJS-Taller-Client-Server',
    category: 'Arquitectura Cliente-Servidor',
    description:
      'Sistema distribuido bajo arquitectura Cliente-Servidor compuesto por un cliente SPA en Angular con interceptores HTTP y un backend RESTful en Node.js documentado con Swagger/OpenAPI.',
    technologies: ['Angular', 'Node.js', 'REST API', 'Swagger', 'HttpInterceptor', 'Jest'],
    repoUrl: 'https://github.com/javiereduardomoranjurado/Uceva-Angular-NodeJS-Taller-Client-Server',
    liveUrl: 'https://javiereduardomoranjurado.github.io/Uceva-Angular-NodeJS-Taller-Client-Server/',
  },
];
