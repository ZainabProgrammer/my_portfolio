import Link from "next/link";
import React from "react";
import { AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaUserAlt } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="blur"></div>
      <div className="blur-div"></div>
      <div className=" max-w-full" id="home">
        <div className="flex flex-col justify-center text-center items-center w-full h-screen">
          <div className="flex mt-[25rem] md:mt-[15rem] w-full  md:max-w-5xl relative text-center flex-col justify-center  items-center gap-8">
            <h2 className="text-gray-700 animate__animated animate__fadeInLeft">
              Hi,👋 I am{" "}
              <span className="  p-1 shadow-xl rounded-sm  bg-gradient-to-r to-blue-500 from-purple-500 bg-clip-text text-transparent">
                Zainab
              </span>
            </h2>

            <h1 className="text-gray-700 max-w-[70%] animated  animate__animated animate__slideInRight">
              A Frontend Web Developer
            </h1>
            <div className=" mx-3 animate__animated animate__slideInUp ">
              <p className="leading-8 text-center mx-auto">
                I&apos;ve gained extensive experience in front-end development
                through personal projects for the past 1-2 years. I specialize
                in HTML, CSS, and JavaScript and have experience with popular
                front-end frameworks such as React. My attention to detail and
                passion for clean, efficient code has enabled me to create
                beautiful, user-friendly websites and applications. I&apos;m
                excited to bring my skills and experience to apply on real world
                projects.
              </p>
            </div>

            {/* multi color button and text */}
            <Link href="/MyResume.pdf">
              <button className="animate__animated  animate__flipInY  animate__delay-1s button-2">
                Download Resume
              </button>
            </Link>
          </div>
          <div className=" my-20  flex justify-between xxs:gap-5 xs:gap-14  items-center icons-group animate__animated animate__bounceInUp animate__delay-1s">
            <div className="icons">
              <a
                href="https://www.linkedin.com/in/zainab-younas-1b9687269/"
                target="_blank"
                rel="norefferer"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="icons">
              <a
                href="https://github.com/ZainabProgrammer"
                target="_blank"
                rel="norefferer"
              >
                <AiOutlineGithub />
              </a>
            </div>
            <div className="icons">
              <a href="#contact">
                <AiOutlineMail />
              </a>
            </div>
            <Link href="/Zainab'sResume.pdf">
              <div className="icons ">
                <FaUserAlt />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
