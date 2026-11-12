import { Component, Input } from '@angular/core';
import { PortfolioProject } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: PortfolioProject;
}
