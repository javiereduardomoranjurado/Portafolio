export interface PortfolioProject {
  id: number;
  code: string;
  name: string;
  repoName: string;
  category: string;
  description: string;
  technologies: string[];
  repoUrl: string;
  liveUrl: string;
}

export interface SkillGroup {
  title: string;
  code: string;
  skills: string[];
}

export interface StudentProfile {
  name: string;
  codename: string;
  role: string;
  specialty: string;
  focus: string;
  location: string;
  githubProfile: string;
  githubUsername: string;
  codecFreq: string;
  summary: string;
}
