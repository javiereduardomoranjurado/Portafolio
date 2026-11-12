import { Component, Input } from '@angular/core';
import { STUDENT_PROFILE_MOCK } from '../../mocks/portfolio.mocks';
import { StudentProfile } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() profile: StudentProfile = STUDENT_PROFILE_MOCK;
}
