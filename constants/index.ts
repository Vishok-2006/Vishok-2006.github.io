import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
   {
    skill_name: "Kali Linux",
    image: "kalilinux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Garuda Linux",
    image: "garuda.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Arch Linux",
    image: "arch.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Shell Scripts",
    image: "shell.png",
    width: 80,
    height: 80,
  },


] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/vtm___alone__king__143?igsh=MWJ1YzVicW5vMGxqMg==",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Vishok-2006",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/vishok-p-319075387?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "java",
    image: "java.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
 

  {
    skill_name: "Solidity",
    image: "solidity.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Spring Boot",
    image: "springboot.png",
    width: 80,
    height: 80,
  },
 
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Supabase",
    image: "supabase.png",
    width: 70,
    height: 70,
  },
  
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Git",
    image: "git.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "GitHub",
    image: "github.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "BlockChain",
    image: "blockchain.png",
    width: 70,
    height: 70,
  },
 
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  
] as const;


export const OTHER_SKILL: {
  skill_name: string;
  image: string;
  width: number;
  height: number;
}[] = [];


export const PROJECTS = [
  {
    title: "ChainDrive",
    description:
      "A blockchain-powered decentralized storage and file management platform focused on secure and transparent data handling.",
    image: "chaindrive.png",
      link: "https://github.com/Vishok-2006/ChainDrive.git",
  },

  {
    title: "Vector Project",
    description:
      "An AI-powered vector search and Retrieval-Augmented Generation (RAG) project designed for intelligent document querying and semantic search.",
   image: "vector.png",
      link: "https://github.com/Vishok-2006/Vector-Project.git",
  },

  {
    title: "InsureAI",
    description:
      "An AI-based insurance assistant that simplifies policy analysis, claim understanding, and intelligent insurance recommendations.",
    image: "insureai.png",
      link: "https://github.com/Vishok-2006/InsureAI.git",
  },

  {
    title: "Agrow AI",
    description:
      "A smart agriculture assistant using Weather API and AI to provide crop suggestions, farming insights, and weather-aware recommendations.",
    image: "agrowai.png",
      link: "https://github.com/Vishok-2006/Agrow-AI.git",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
       {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Vishok-2006",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.gg/Zv2HbfnF2N",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
       {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/vtm___alone__king__143?igsh=MWJ1YzVicW5vMGxqMg==",
  },
     
     {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/vishok-p-319075387?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
    ],
  },
  {
    title: "About",
    data: [
    
      {
        name: "Learning about me",
        icon: null,
        link: "https://github.com/Vishok-2006",
      },
     {
  name: "Contact Me",
  icon: null,
  link: "https://mail.google.com/mail/?view=cm&fs=1&to=pvishok969@gmail.com",
},
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
