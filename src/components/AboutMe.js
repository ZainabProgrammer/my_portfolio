import React, { useRef } from "react";
import Image from "next/image";
import girl from "public/assets/girl.png";

const AboutMe = () => {
  return (
    <div className="pt-9">
      <div className="sm:py-16 py-40 md:mt-1 xxs:mt-48 ">
        <div
          className="w-full md:h-screen  p-2 flex items-center py-16 scroll-smooth duration-300 "
          id="about"
        >
          <div className="max-w-[1240px] relative  m-auto md:grid grid-cols-3 gap-8 ">
            <div className="col-span-2">
              <div className="flex flex-col items-center">
                <h2
                  className="text-gray-700 tracking-wider uppercase py-4"
                  data-aos="flip-left"
                >
                  About Me
                </h2>
                <div className="line" data-aos="flip-right"></div>{" "}
                <div className="mx-5 mt-20" data-aos="fade-right">
                  <p className=" leading-8">
                    I am an enthusiastic web developer with a passion for
                    creating dynamic and engaging user experiences. As a web
                    developer, I bring a solid foundation in HTML, CSS, and
                    JavaScript, along with a strong desire to expand my
                    knowledge and skills. I&apos;m eager to collaborate with
                    experienced developers and learn from their expertise while
                    contributing to meaningful projects.
                  </p>
                  <p className="leading-8">
                    {" "}
                    I&apos;m excited to work on real-world projects, contribute
                    my skills, and grow as a web developer. I&apos;m open to
                    feedback and always ready to take on new responsibilities.
                    I&apos;m confident that my dedication, technical skills, and
                    eagerness to learn make me a valuable addition to any
                    development team. I look forward to the opportunity to
                    contribute and learn from experienced professionals, as well
                    as make a positive impact through my work.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 my-auto ">
              <Image
                src={girl}
                width=""
                height=""
                alt="/"
                className="hover:scale-105 ease-in duration-200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
