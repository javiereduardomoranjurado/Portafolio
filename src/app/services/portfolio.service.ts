import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PortfolioProject, SkillGroup, StudentProfile } from '../interfaces/portfolio.interface';
import {
  PORTFOLIO_PROJECTS_MOCK,
  SKILL_GROUPS_MOCK,
  STUDENT_PROFILE_MOCK,
} from '../mocks/portfolio.mocks';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  getProfile(): Observable<StudentProfile> {
    return of(STUDENT_PROFILE_MOCK);
  }

  getSkillGroups(): Observable<SkillGroup[]> {
    return of(SKILL_GROUPS_MOCK);
  }

  getProjects(): Observable<PortfolioProject[]> {
    return of(PORTFOLIO_PROJECTS_MOCK);
  }
}
