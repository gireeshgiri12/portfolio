import { FaReact, FaNodeJs, FaHtml5, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiCss3,
  SiNextdotjs,
  SiTypescript,
  SiPostman,
  SiExpress,
  SiNpm,
  SiSwagger,
  SiMongodb,
  SiPostgresql,
  SiInfluxdb,
  SiRedis,
  SiNeo4J,
  SiElasticsearch,
  SiKubernetes,
  SiJenkins,
  SiRazorpay
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
    name: "Node.js",
    icon: <FaNodeJs color='#000000dc' />,
    link: "https://nodejs.org/",
  },
  {
    name: "Express",
    icon: <SiExpress color='#000000dc' />,
    link: "https://expressjs.com/",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs color='#000000dc' />,
    link: "https://nextjs.org/",
  },
  {
    name: "React",
    icon: <FaReact color='#000000dc' />,
    link: "https://reactjs.org/",
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
    name: "Mongodb",
    icon: <SiMongodb color='#000000dc' />,
    link: "https://www.mongodb.com/home",
  },
  {
    name: "Postgresql",
    icon: <SiPostgresql color='#000000dc' />,
    link: "https://www.postgresql.org/",
  },
  {
    name: "Influxdb",
    icon: <SiInfluxdb color='#000000dc' />,
    link: "https://www.influxdata.com/",
  },
  {
    name: "Neo4J",
    icon: <SiNeo4J color='#000000dc' />,
    link: "https://neo4j.com/",
  },
  {
    name: "Redis",
    icon: <SiRedis color='#000000dc' />,
    link: "https://redis.io/",
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
  {
    name: "Npm",
    icon: <SiNpm color='#000000dc' />,
    link: "https://www.npmjs.com/",
  },
  {
    name: "Swagger",
    icon: <SiSwagger color='#000000dc' />,
    link: "https://swagger.io/tools/swaggerhub/",
  },
  {
    name: "Elasticsearch",
    icon: <SiElasticsearch color='#000000dc' />,
    link: "https://www.elastic.co/",
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes color='#000000dc' />,
    link: "https://kubernetes.io/",
  },
  {
    name: "Jenkins",
    icon: <SiJenkins color='#000000dc' />,
    link: "https://www.jenkins.io/",
  }
];
