import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Science Tutor",
    subtitle: "Southwestern College",
    location: "Chula Vista, CA",
    description:
      "I worked as a computer science tutor at Southwestern College. I helped students with their programming assignments and projects. I also held workshops on various programming topics.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer",
    subtitle: "Freelancer",
    location: "San Diego, CA",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, and Prisma. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
  {
    title: "Research Assistant",
    subtitle: "San Diego State University",
    location: "San Diego, CA",
    description:
      "I worked as a research assistant at San Deigo State University. I worked on a project that involved optimizing data rates for a NOMA (Non-Orthogonal Multiple Access) system. I used Python and MATLAB for this project.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },

  {
    title: "Attending San Diego State University",
    subtitle: "Computer Science, Major GPA: 3.7",
    location: "San Diego, CA",
    description:
      "I am currently attending San Diego State University, majoring in Computer Science. I am expected to graduate in 2025. I am currently looking for a summer internship.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Math Base",
    subtitle: "Refactoring in progress",
    description:
      "Math Base is an AI-powered web app for student exam preparation, integrating Wolfram Alpha for advanced math solutions and featuring robust note organization tools.",
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "MySQL",
      "Tailwind",
      "Prisma",
      "Framer Motion",
    ],
    imageUrl: "/mathbase.png",
    href: "https://math-base-final.vercel.app/",
  },

  {
    title: "Pathfinding Visualizer",
    subtitle: "Completed",
    description:
      "Pathfinding Visualizer is a web app that visualizes pathfinding algorithms. It's built with React and TypeScript.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: "/pathfinding.png",
    href: "https://algo-visualizer-nine.vercel.app/",
  },
  {
    title: "Link Tree Clone",
    subtitle: "Still in development",
    description:
      "Link Tree Clone is a clone of the popular Link Tree website. It's built with React and Tailwind.",
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "Postgres",
      "Tailwind",
      "Prisma",
      "Framer Motion",
    ],
    imageUrl: "/link-tree-clone.png",
    href: "https://ltree-clone.vercel.app/",
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
  "Git",
  "Tailwind",
  "Prisma",
  "Python",
  "Framer Motion",
] as const;
