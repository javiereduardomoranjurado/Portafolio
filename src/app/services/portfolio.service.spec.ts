import { TestBed } from '@angular/core/testing';
import {
  PORTFOLIO_PROJECTS_MOCK,
  SKILL_GROUPS_MOCK,
  STUDENT_PROFILE_MOCK,
} from '../mocks/portfolio.mocks';
import { PortfolioService } from './portfolio.service';

describe('PortfolioService', () => {
  let service: PortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioService);
  });

  it('debería crear el servicio correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debería retornar el perfil del estudiante', (done) => {
    service.getProfile().subscribe((profile) => {
      expect(profile).toEqual(STUDENT_PROFILE_MOCK);
      done();
    });
  });

  it('debería retornar los grupos de habilidades', (done) => {
    service.getSkillGroups().subscribe((groups) => {
      expect(groups).toEqual(SKILL_GROUPS_MOCK);
      done();
    });
  });

  it('debería retornar los 5 proyectos del portafolio', (done) => {
    service.getProjects().subscribe((projects) => {
      expect(projects).toEqual(PORTFOLIO_PROJECTS_MOCK);
      expect(projects.length).toBe(5);
      done();
    });
  });
});
