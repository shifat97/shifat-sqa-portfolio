export interface PersonalInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
}

export interface TechnicalSkills {
  languages: string[];
  test_automation_performance: string[];
  manual_testing: string[];
  api_testing: string[];
  technologies: string[];
  tools_process: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  link: string;
  period: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  gpa: string;
  location: string;
  period: string;
  coursework: string[];
}

export interface Training {
  institution: string;
  program: string;
  location: string;
  period: string;
  topics: string[];
}

export interface PortfolioData {
  personal_info: PersonalInfo;
  technical_skills: TechnicalSkills;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  training: Training[];
  awards: string[];
  certifications: string[];
}
