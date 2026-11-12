import { PortfolioProject, SkillGroup, StudentProfile } from '../interfaces/portfolio.interface';

export const STUDENT_PROFILE_MOCK: StudentProfile = {
  name: 'Javier Eduardo Morán Jurado',
  codename: 'ARQUITECTURA DE SOFTWARE // UCEVA',
  role: 'Ingeniería de Sistemas (8° Semestre) — Desarrollo Web & DevOps CI/CD',
  university: 'Unidad Central del Valle del Cauca (UCEVA)',
  course: 'Arquitectura de Software',
  professor: 'Ing. Jesús David Mejía Vergara',
  githubProfile: 'https://github.com/javiereduardomoranjurado',
  githubUsername: 'javiereduardomoranjurado',
  codecFreq: '140.85',
  summary:
    'Portafolio técnico y catálogo centralizado de proyectos desarrollados en Angular y Node.js bajo principios de Arquitectura de Software, sistemas de diseño atómico, modularidad e integración y despliegue continuo (CI/CD) con GitHub Actions y GitHub Pages.',
};

export const SKILL_GROUPS_MOCK: SkillGroup[] = [
  {
    title: 'Frontend & Arquitectura UI',
    code: 'UNIT // 01',
    skills: ['Angular 20', 'TypeScript', 'Astro (SSG)', 'RxJS', 'HTML5 & SCSS', 'Bootstrap 5', 'Atomic Design'],
  },
  {
    title: 'Backend & Diseño de Sistemas',
    code: 'UNIT // 02',
    skills: ['Node.js', 'Express', 'REST APIs', 'Swagger / OpenAPI', 'Cliente-Servidor', 'NgModules & Standalone'],
  },
  {
    title: 'DevOps, CI/CD & Pruebas',
    code: 'UNIT // 03',
    skills: ['GitHub Actions', 'GitHub Pages', 'Jest (Unit Testing)', 'Compodoc', 'Git & GitFlow', 'Conventional Commits'],
  },
];

export const PORTFOLIO_PROJECTS_MOCK: PortfolioProject[] = [
  {
    id: 1,
    code: '01',
    name: 'Portafolio',
    repoName: 'Portafolio',
    category: 'Proyecto Principal',
    description:
      'Catálogo centralizado desarrollado en Angular 20 que presenta el perfil profesional y los cinco proyectos del curso con despliegue continuo automatizado en GitHub Pages.',
    technologies: ['Angular 20', 'TypeScript', 'SCSS', 'Bootstrap 5', 'Jest', 'GitHub Actions'],
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
      'Comparativa e implementación arquitectónica combinando Static Site Generation (SSG) con Astro y Single Page Application (SPA) en Angular para módulos de gestión.',
    technologies: ['Angular 20', 'Astro', 'TypeScript', 'SPA & SSG', 'Bootstrap 5', 'Jest'],
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
      'Librería y sistema de diseño basado en Atomic Design (Átomos, Moléculas y Organismos) empaquetado con ng-packagr, pruebas en Jest y documentación en Compodoc.',
    technologies: ['Angular 20', 'Atomic Design', 'ng-packagr', 'Bootstrap 5', 'Jest', 'Compodoc'],
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
      'Aplicación modular en Angular con NgModules y Lazy Loading que integra dominios de Usuarios, Productos, God of War, Metal Gear y catálogo de Anime con Jikan API v4.',
    technologies: ['Angular 20', 'NgModules', 'Lazy Loading', 'Jikan API v4', 'RxJS', 'Jest'],
    repoUrl: 'https://github.com/javiereduardomoranjurado/Uceva-Angular-Taller-Modules',
    liveUrl: 'https://javiereduardomoranjurado.github.io/Uceva-Angular-Taller-Modules/',
  },
  {
    id: 5,
    code: '05',
    name: 'Uceva-Angular-NodeJS-Taller-Client-Server',
    repoName: 'Uceva-Angular-NodeJS-Taller-Client-Server',
    category: 'Cliente-Servidor',
    description:
      'Sistema bajo arquitectura Cliente-Servidor con cliente SPA en Angular (interceptores HTTP y manejo reactivo de estado) y servidor RESTful en Node.js con Swagger.',
    technologies: ['Angular 20', 'Node.js', 'REST API', 'Swagger', 'HttpInterceptor', 'Jest'],
    repoUrl: 'https://github.com/javiereduardomoranjurado/Uceva-Angular-NodeJS-Taller-Client-Server',
    liveUrl: 'https://javiereduardomoranjurado.github.io/Uceva-Angular-NodeJS-Taller-Client-Server/',
  },
];
