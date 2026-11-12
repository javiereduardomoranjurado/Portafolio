import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear la página principal del portafolio', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar el perfil y los 5 proyectos desde el servicio', () => {
    expect(component.profile.name).toContain('Javier Eduardo Morán Jurado');
    expect(component.projects.length).toBe(5);
    expect(component.skillGroups.length).toBe(3);
  });

  it('debería renderizar las 5 tarjetas de proyectos con sus enlaces', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.project-card');
    expect(cards.length).toBe(5);
  });
});
