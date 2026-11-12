import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface PortfolioProject {
  id: number;
  code: string;
  name: string;
  repoName: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  repoUrl: string;
  liveUrl: string;
  pipelinePath: string;
  branch: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly studentProfile = {
    name: 'Javier Eduardo Morán Jurado',
    initials: 'JM',
    role: 'Estudiante de Ingeniería de Sistemas (8° Semestre) | Arquitectura de Software & DevOps CI/CD',
    university: 'Unidad Central del Valle del Cauca (UCEVA) — Facultad de Ingeniería',
    course: 'Arquitectura de Software',
    professor: 'Ing. Jesús David Mejía Vergara',
    githubProfile: 'https://github.com/javiereduardomoranjurado',
    githubUsername: 'javiereduardomoranjurado',
    summary:
      'Desarrollador de Software en formación enfocado en diseño arquitectónico moderno, aplicaciones web reactivas en Angular, sistemas de diseño atómico, arquitecturas cliente-servidor con Node.js y automatización de integración y despliegue continuo (CI/CD) mediante GitHub Actions y GitHub Pages.',
  };

  readonly skillGroups: SkillGroup[] = [
    {
      title: 'Frontend & Arquitectura UI',
      icon: 'bi-window-stack',
      skills: ['Angular 20', 'TypeScript', 'Astro (SSG)', 'RxJS', 'HTML5 & SCSS', 'Bootstrap 5', 'Atomic Design'],
    },
    {
      title: 'Backend & Patrones de Software',
      icon: 'bi-hdd-network',
      skills: ['Node.js', 'Express', 'RESTful APIs', 'Swagger / OpenAPI', 'Arquitectura Cliente-Servidor', 'NgModules & Standalone', 'Patrones de Diseño'],
    },
    {
      title: 'DevOps, CI/CD & Calidad',
      icon: 'bi-gear-wide-connected',
      skills: ['GitHub Actions (CI/CD)', 'GitHub Pages', 'Jest (Unit Testing)', 'Compodoc', 'Git & GitFlow', 'Conventional Commits', 'Linux'],
    },
  ];

  readonly projects: PortfolioProject[] = [
    {
      id: 1,
      code: 'PROYECTO 01',
      name: 'Portafolio Digital (Proyecto Principal)',
      repoName: 'Portafolio',
      category: 'Catálogo Central & CI/CD',
      description:
        'Portafolio profesional y catálogo centralizado desarrollado en Angular 20 que integra los cinco proyectos del curso de Arquitectura de Software, con acceso directo a sus repositorios y despliegues automatizados en GitHub Pages.',
      features: [
        'Perfil profesional, competencias técnicas y catálogo interactivo de los 5 proyectos',
        'Filtrado dinámico por categoría y enlaces verificados a repositorios y despliegues',
        'Pipeline CI/CD en GitHub Actions (.github/workflows/pipeline.yml) sobre rama main',
      ],
      technologies: ['Angular 20', 'TypeScript', 'SCSS', 'Bootstrap 5', 'Jest', 'GitHub Actions', 'GitHub Pages'],
      repoUrl: 'https://github.com/javiereduardomoranjurado/Portafolio',
      liveUrl: 'https://javiereduardomoranjurado.github.io/Portafolio/',
      pipelinePath: '.github/workflows/pipeline.yml',
      branch: 'main',
    },
    {
      id: 2,
      code: 'PROYECTO 02',
      name: 'Uceva-Astro-Angular-SSG-SPA',
      repoName: 'Uceva-Astro-Angular-SSG-SPA',
      category: 'Arquitectura SSG & SPA',
      description:
        'Implementación comparativa de arquitecturas web combinando Static Site Generation (SSG) con Astro y Single Page Application (SPA) en Angular 20 para la gestión de usuarios, productos, categorías, reseñas y órdenes.',
      features: [
        'Cliente SPA en Angular 20 con rutas dedicadas para Usuarios, Productos, Categorías, Reseñas y Órdenes',
        'Implementación paralela en Astro para generación estática (SSG) y análisis arquitectónico',
        'Pruebas unitarias con Jest y despliegue automatizado del cliente Angular en GitHub Pages',
      ],
      technologies: ['Angular 20', 'Astro', 'TypeScript', 'SPA & SSG', 'Bootstrap 5', 'RxJS', 'Jest'],
      repoUrl: 'https://github.com/javiereduardomoranjurado/Uceva-Astro-Angular-SSG-SPA',
      liveUrl: 'https://javiereduardomoranjurado.github.io/Uceva-Astro-Angular-SSG-SPA/',
      pipelinePath: '.github/workflows/pipeline.yml',
      branch: 'main',
    },
    {
      id: 3,
      code: 'PROYECTO 03',
      name: 'Uceva-Angular-Taller-Design-System',
      repoName: 'Uceva-Angular-Taller-Design-System',
      category: 'Atomic Design System',
      description:
        'Librería y sistema de diseño atómico en Angular construido con componentes reutilizables (Átomos, Moléculas, Organismos y Plantillas) empaquetados mediante ng-packagr y documentados con Compodoc.',
      features: [
        'Arquitectura Atomic Design: botones, inputs, alertas, tablas, formularios, tarjetas y carrito de compras',
        'Librería interna design-system-bootstrap compilada con ng-packagr y consumida por la aplicación principal',
        'Cobertura de pruebas unitarias con Jest y documentación técnica automatizada con Compodoc',
      ],
      technologies: ['Angular 20', 'Atomic Design', 'ng-packagr', 'TypeScript', 'Bootstrap 5', 'Jest', 'Compodoc'],
      repoUrl: 'https://github.com/javiereduardomoranjurado/Uceva-Angular-Taller-Design-System',
      liveUrl: 'https://javiereduardomoranjurado.github.io/Uceva-Angular-Taller-Design-System/',
      pipelinePath: '.github/workflows/pipeline.yml',
      branch: 'main',
    },
    {
      id: 4,
      code: 'PROYECTO 04',
      name: 'Uceva-Angular-Taller-Modules',
      repoName: 'Uceva-Angular-Taller-Modules',
      category: 'Arquitectura Modular',
      description:
        'Aplicación Angular estructurada mediante NgModules y carga perezosa (Lazy Loading), integrando módulos de dominio para Usuarios, Productos, God of War, Metal Gear y catálogo de Anime conectado a Jikan API v4.',
      features: [
        'Separación estricta por módulos de dominio con enrutamiento independiente y Lazy Loading',
        'Consumo HTTP reactivo en tiempo real de la API pública Jikan v4 (MyAnimeList) para ranking de anime',
        'Arquitectura Smart & Presentational Components con pruebas unitarias en Jest',
      ],
      technologies: ['Angular 20', 'NgModules', 'Lazy Loading', 'Jikan REST API v4', 'RxJS', 'TypeScript', 'Jest'],
      repoUrl: 'https://github.com/javiereduardomoranjurado/Uceva-Angular-Taller-Modules',
      liveUrl: 'https://javiereduardomoranjurado.github.io/Uceva-Angular-Taller-Modules/',
      pipelinePath: '.github/workflows/pipeline.yml',
      branch: 'main',
    },
    {
      id: 5,
      code: 'PROYECTO 05',
      name: 'Uceva-Angular-NodeJS-Taller-Client-Server',
      repoName: 'Uceva-Angular-NodeJS-Taller-Client-Server',
      category: 'Arquitectura Cliente-Servidor',
      description:
        'Sistema desacoplado bajo arquitectura Cliente-Servidor compuesto por un frontend SPA en Angular 20 con interceptores HTTP y un backend RESTful en Node.js documentado con Swagger/OpenAPI.',
      features: [
        'Cliente Angular 20 con HttpInterceptor centralizado, manejo de estados reactivo y librería de Design System',
        'Servidor Node.js con endpoints REST para usuarios, productos, categorías, reseñas y órdenes (/api/docs)',
        'Pipeline CI/CD en GitHub Actions configurado para pruebas, compilación y despliegue en GitHub Pages',
      ],
      technologies: ['Angular 20', 'Node.js', 'REST API', 'Swagger / OpenAPI', 'HttpInterceptor', 'Bootstrap 5', 'Jest'],
      repoUrl: 'https://github.com/javiereduardomoranjurado/Uceva-Angular-NodeJS-Taller-Client-Server',
      liveUrl: 'https://javiereduardomoranjurado.github.io/Uceva-Angular-NodeJS-Taller-Client-Server/',
      pipelinePath: '.github/workflows/pipeline.yml',
      branch: 'main',
    },
  ];

  selectedCategory = 'Todos';

  get categories(): string[] {
    return ['Todos', ...new Set(this.projects.map((p) => p.category))];
  }

  get filteredProjects(): PortfolioProject[] {
    if (this.selectedCategory === 'Todos') {
      return this.projects;
    }
    return this.projects.filter((project) => project.category === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
