import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PORTFOLIO_PROJECTS_MOCK } from '../../mocks/portfolio.mocks';
import { ProjectCardComponent } from './project-card.component';

describe('ProjectCardComponent', () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCardComponent);
    component = fixture.componentInstance;
    component.project = PORTFOLIO_PROJECTS_MOCK[0];
    fixture.detectChanges();
  });

  it('debería crear el componente de tarjeta de proyecto', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar nombre, descripción, tecnologías y botones del proyecto', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain(PORTFOLIO_PROJECTS_MOCK[0].name);
    expect(compiled.textContent).toContain('Ver Repositorio');
    expect(compiled.textContent).toContain('Ver Aplicación');
  });
});
