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
    title: "Full-Stack Developer",
    location: "San Diego, CA",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, and Prisma. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2019",
  },
  {
    title: "Attending San Diego State University",
    location: "San Diego, CA",
    description:
      "I am currently attending San Diego State University, majoring in Computer Science. I am expected to graduate in 2025. I am currently looking for a summer internship.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  {
    title: "Research Assistant",
    location: "San Diego, CA",
    description:
      "I worked as a research assistant at San Deigo State University. I worked on a project that involved optimizing data rates for a NOMA (Non-Orthogonal Multiple Access) system. I used Python and MATLAB for this project.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Math Base",
    description:
      "Math Base is an AI-powered web app for student exam preparation, integrating Wolfram Alpha for advanced math solutions and featuring robust note organization tools.",
    tags: ["React", "Next.js", "MySQL", "Tailwind", "Prisma", "Framer Motion"],
    imageUrl: "/mathbase.png",
    href: "https://mathbase2.vercel.app/",
  },

  {
    title: "Pathfinding Visualizer",
    description:
      "Pathfinding Visualizer is a web app that visualizes pathfinding algorithms. It's built with React and TypeScript.",
    tags: ["React", "TypeScript"],
    imageUrl: "",
    href: "https://algo-visualizer-nine.vercel.app/",
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
