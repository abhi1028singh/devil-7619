export interface Skill {
  name: string;
  percentage: number;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  color: string;
}

export interface EducationItem {
  type: 'bachelors' | 'highSchool';
  degree: string;
  institution: string;
  period: string;
  description: string;
  courses?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export interface PersonalInfo {
  degree: string;
  university: string;
  cgpa: string;
  email: string;
  phone: string;
  location: string;
}
