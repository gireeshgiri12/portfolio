import { FaReact, FaNodeJs, FaHtml5, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiCss3,
  SiNextdotjs,
  SiTypescript,
  SiPostman,
  SiMaterialui,
} from "react-icons/si";
import { ImGit } from "react-icons/im";

interface SkillsType {
  name: string;
  icon: any;
  link: string;
}

export const SkillsData: SkillsType[] = [
  {
    name: "JavaScript",
    icon: <IoLogoJavascript color='#000000dc' />,
    link: "https://www.javascript.com/",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript color='#000000dc' />,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: <FaReact color='#000000dc' />,
    link: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs color='#000000dc' />,
    link: "https://nextjs.org/",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs color='#000000dc' />,
    link: "https://nodejs.org/",
  },
  {
    name: "HTML",
    icon: <FaHtml5 color='#000000dc' />,
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS",
    icon: <SiCss3 color='#000000dc' />,
    link: "https://www.w3schools.com/css/",
  },
  {
    name: "Material-Ui",
    icon: <SiMaterialui color='#000000dc' />,
    link: "https://mui.com/",
  },
  {
    name: "Git",
    icon: <ImGit color='#000000dc' />,
    link: "https://git-scm.com/",
  },
  {
    name: "Postman",
    icon: <SiPostman color='#000000dc' />,
    link: "https://www.postman.com/",
  },
];
