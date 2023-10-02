import visionBlog from '@/public/vision-blog.png';
import amazonClone from '@/public/amazon-clone.png';
import spotifyClone from '@/public/spotify-clone.png';

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Vision Blog",
    description:
      "I created this project when I was just getting started with React.It uses React on the frontend and a basic json-server for data fetching",
    tags: ["React", "Json Server", "React Router"],
    imageUrl: visionBlog,
  },
  {
    title: "Amazon Clone",
    description:
      "My first ever full-stack project built with the MERN stack.An eCommerce store just like amazon designed using styled components.",
    tags: ["React", "Mongo-DB", "Express-Js", "Node-js", "Styled-Components", "Stripe"],
    imageUrl: amazonClone,
  },
  {
    title: "Sound Wave",
    description:
      "A full-stack project build using the most popular react framework, Next-js. It is a full-stack app with stripe integration.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Stripe", "Supabase"],
    imageUrl: spotifyClone,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Firebase",
  "Git",
  "Tailwind",
  "Prisma",
  "Supabase",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Java",
  "Express.js",
  "MySQL",
  "Python",
  "SASS",
  "Framer Motion",
  "C++",
  "Computer Networks",
] as const;