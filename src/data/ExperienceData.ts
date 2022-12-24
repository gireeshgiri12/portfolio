interface ExperienceDataType {
  title: string;
  date: string;
  details: string[];
}

export const ExperienceData: ExperienceDataType[] = [
  {
    title: 'Backend Developer | Altorum Leren',
    date: ' July 2021 - Jan 2023',
    details: [
      'Designed and developed multiple microservices for various reusable features of applications using NodeJs', 
      'Trained and Shared knowledge with co-employees for various topics such as git, nodejs, creating npm packages, postman, swagger documentation of REST APIs',
      'Worked with team leads and managers to improvise the development process by creating daily goals and by removing the impediments',
      'Developed many server side applications which are efficient, testable and reusable.By making use of Test-Driven Development (TDD), static code analysis,SonarQube, artillery',
    ],
  },
  {
    title: 'Frontend Developer | Beginner',
    date: 'Dec 2022 - Present',
    details: [
      'Strong understanding of web design principles and user experience design',
      'Ability to create better UI using HTML,CSS',
      'Started Working on ReactJs',
    ],
  },
];
