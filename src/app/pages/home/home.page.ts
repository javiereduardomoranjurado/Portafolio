import { Component, inject, OnInit } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import {
  PortfolioProject,
  SkillGroup,
  StudentProfile,
} from '../../interfaces/portfolio.interface';
import { STUDENT_PROFILE_MOCK } from '../../mocks/portfolio.mocks';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage implements OnInit {
  private readonly portfolioService = inject(PortfolioService);

  profile: StudentProfile = STUDENT_PROFILE_MOCK;
  skillGroups: SkillGroup[] = [];
  projects: PortfolioProject[] = [];

  ngOnInit(): void {
    this.portfolioService.getProfile().subscribe((profile) => {
      this.profile = profile;
    });
    this.portfolioService.getSkillGroups().subscribe((groups) => {
      this.skillGroups = groups;
    });
    this.portfolioService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }
}
