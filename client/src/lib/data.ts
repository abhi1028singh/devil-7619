import { PersonalInfo, Skill, Project, EducationItem, Certification } from "@/types";

export const personalInfo: PersonalInfo = {
  degree: "B.Tech in Computer Science (AI)",
  university: "Babu Banarasi Das University",
  cgpa: "8.5/10",
  email: "abhisheksingh15560@gmail.com",
  phone: "+91 9598411504",
  location: "Lucknow, Uttar Pradesh, India"
};

export const developmentSkills: Skill[] = [
  { name: "Java", percentage: 90 },
  { name: "Spring Boot", percentage: 85 },
  { name: "HTML/CSS", percentage: 80 },
  { name: "JavaScript", percentage: 75 },
  { name: "React.js", percentage: 70 },
  { name: "SQL", percentage: 85 },
  { name: "RESTful APIs", percentage: 80 },
  { name: "Hibernate/JPA", percentage: 75 }
];

export const aiSkills: Skill[] = [
  { name: "Python", percentage: 80 },
  { name: "TensorFlow", percentage: 70 },
  { name: "Data Analysis", percentage: 75 },
  { name: "Machine Learning", percentage: 65 },
  { name: "Computer Vision", percentage: 60 },
  { name: "Natural Language Processing", percentage: 55 }
];

export const toolsSkills: Skill[] = [
  { name: "Microsoft Excel", percentage: 90 },
  { name: "Graphic Design", percentage: 75 },
  { name: "Git & GitHub", percentage: 80 },
  { name: "Adobe Photoshop", percentage: 70 },
  { name: "VS Code/IntelliJ", percentage: 85 },
  { name: "Docker", percentage: 65 }
];

export const softSkills: Skill[] = [
  { name: "Problem Solving", percentage: 90 },
  { name: "Team Collaboration", percentage: 85 },
  { name: "Communication", percentage: 80 },
  { name: "Time Management", percentage: 85 },
  { name: "Adaptability", percentage: 80 },
  { name: "Critical Thinking", percentage: 85 }
];

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with Spring Boot and React with secure payment integration.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    technologies: ["Java", "Spring Boot", "React", "MySQL"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    color: "#3B82F6" // blue color
  },
  {
    title: "AI-Powered Image Recognition",
    description: "An image recognition system using deep learning algorithms to identify objects in photos.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    color: "#10B981" // green color
  },
  {
    title: "Cricket Analytics Dashboard",
    description: "A dashboard for cricket statistics analysis with visualizations and player performance metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    technologies: ["Excel", "Data Analysis", "React", "D3.js"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    color: "#6366F1" // indigo color
  }
];

export const education: EducationItem[] = [
  {
    type: "bachelors",
    degree: "B.Tech in Computer Science (AI)",
    institution: "Babu Banarasi Das University, Lucknow",
    period: "2020 - 2024 (Currently in 3rd Year, 6th Semester)",
    description: "Specialized in Artificial Intelligence with core computer science subjects. Maintained a CGPA of 8.5/10.",
    courses: [
      "Data Structures & Algorithms",
      "Artificial Intelligence",
      "Machine Learning",
      "Database Management",
      "Web Development",
      "Software Engineering"
    ]
  },
  {
    type: "highSchool",
    degree: "Higher Secondary Education",
    institution: "P.N. Saigal Inter College, Sitapur",
    period: "2018 - 2020",
    description: "Completed higher secondary education with focus on Physics, Chemistry, and Mathematics. Secured 90% in final examinations."
  }
];

export const certifications: Certification[] = [
  {
    title: "Full Stack Java Developer Certification",
    issuer: "Oracle Certified Professional",
    year: "2023",
    description: "Completed comprehensive certification in Java Full Stack Development covering Spring Boot, Hibernate, and React.js for building enterprise applications."
  }
];
