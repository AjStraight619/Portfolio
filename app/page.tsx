import Contact from "@/components/Contact";

import Intro from "@/components/intro";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Contact />
    </main>
  );
}
