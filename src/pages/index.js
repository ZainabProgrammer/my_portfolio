import About from "@/components/About";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <main>
        <About />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
