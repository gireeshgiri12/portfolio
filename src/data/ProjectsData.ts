
interface ProjectsType {
  title: string
  description: string
  image: string
  GitHub: string
  hosted: string
}

export const ProjectsData: ProjectsType[] = [
  {
    title: 'Portfolio | Private Project',
    description: `Fastest Landing page built with React, Next Js and Styled Components. modern monorepo architecture. Minimal design`,
    image: 'https://erfjs.com/images/protfolio/my_portfolio/img-1.png',
    GitHub: '',
    hosted: 'https://erfjs.com',
  },
  {
    title: 'Portfolio',
    description: `Portfolio website built with React v18.2, Typescript,  react-router-dom v6, framer-motion, react-icons, Scss`,
    image: 'https://raw.githubusercontent.com/erfjs/animated-portfolio/main/src/assets/example.png',
    GitHub: 'https://github.com/erfjs/animated-portfolio',
    hosted: 'https://animated-portfolio.erfjs.com/',
  }
];
