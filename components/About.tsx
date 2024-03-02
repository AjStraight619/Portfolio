"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center text-lg leading-6 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My passion for{" "}
        <span className="font-medium">technology and solving problems</span>,
        led me to pursue a career in{" "}
        <span className="italic">Computer Science. </span>
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">React, Next.js, Node.js, and MySQL</span>.
        I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position or internship</span>
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching TV shows, and going to the gym. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        enhancing my skills in fine-tuning the GPT-3 Turbo model to improve its
        proficiency in solving mathematical problems, with the goal of
        integrating this advanced capability into my application.
      </p>
    </motion.section>
  );
}
