import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App (Dev Portfolio Project)', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the portfolio application', () => {
    expect(component).toBeTruthy();
  });

  it('should expose student profile for Javier Eduardo Morán Jurado', () => {
    expect(component.studentProfile.name).toContain('Javier Eduardo Morán Jurado');
    expect(component.studentProfile.githubProfile).toBe('https://github.com/javiereduardomoranjurado');
  });

  it('should catalog all 5 required projects with exact repository and GitHub Pages URLs', () => {
    expect(component.projects.length).toBe(5);

    const expectedRepos = [
      'Portafolio',
      'Uceva-Astro-Angular-SSG-SPA',
      'Uceva-Angular-Taller-Design-System',
      'Uceva-Angular-Taller-Modules',
      'Uceva-Angular-NodeJS-Taller-Client-Server',
    ];

    expectedRepos.forEach((repoName, idx) => {
      const project = component.projects[idx];
      expect(project.repoName).toBe(repoName);
      expect(project.repoUrl).toBe(`https://github.com/javiereduardomoranjurado/${repoName}`);
      expect(project.liveUrl).toBe(`https://javiereduardomoranjurado.github.io/${repoName}/`);
      expect(project.technologies.length).toBeGreaterThan(0);
    });
  });

  it('should filter projects by category and reset to all projects', () => {
    expect(component.filteredProjects.length).toBe(5);
    component.selectCategory('Atomic Design System');
    expect(component.filteredProjects.length).toBe(1);
    expect(component.filteredProjects[0].repoName).toBe('Uceva-Angular-Taller-Design-System');

    component.selectCategory('Todos');
    expect(component.filteredProjects.length).toBe(5);
  });

  it('should render "Ver Repositorio" and "Ver Aplicación" buttons for all 5 projects', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.project-card');
    expect(cards.length).toBe(5);
    expect(compiled.textContent).toContain('Ver Repositorio');
    expect(compiled.textContent).toContain('Ver Aplicación');
  });
});
