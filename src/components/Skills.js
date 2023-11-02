import React from "react";

import html from "public/assets/html.svg";
import Image from "next/image";
import css from "public/assets/css-3.svg";
import js from "public/assets/javascript-1.svg";
import react from "public/assets/react-2.svg";
import bootstrap from "public/assets/bootstrap.svg";
import tailwind from "public/assets/tailwind.svg";
import firebase from "public/assets/firebase-1.svg";
import github from "public/assets/github.svg";
import next from "public/assets/next-js.svg";
import tools from "public/assets/tools.svg";
import res from "public/assets/res.png";
import api from "public/assets/api.png";
import redux from "public/assets/react-redux.png";
import mui from "public/assets/mui.png";
const Skills = () => {
  return (
    <div className="my-16  ">
      <div className="w-full p-2 py-16 " id="skills">
        <div className="w-full flex  flex-col items-center justify-center">
          <h2
            className="text-gray-700  tracking-wider py-4 uppercase"
            data-aos="flip-right"
          >
            Skills
          </h2>

          <div className="line max-w-[9%]" data-aos="flip-left"></div>

          <div
            className="grid md:grid-cols-3 max-w-7xl w-full place-items-center mt-20 gap-14  grid-cols-1  sm:grid-cols-2"
            data-aos="flip-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-easing="linear"
          >
            <div className="col-span-1 skills w-full h-full">
              <Image src={html} alt="/" width="80" height="auto" />
              <h3>HTML</h3>
            </div>
            <div className="col-span-1 skills w-full h-full">
              <Image src={css} alt="/" width="80" height="auto" />
              <h3>CSS</h3>
            </div>
            <div className="col-span-1 skills w-full h-full">
              <Image src={js} alt="/" width="80" height="auto" />
              <h3>JavaScript</h3>
            </div>
            <div className="col-span-1 skills w-full h-full">
              <Image src={react} alt="/" width="80" height="auto" />
              <h3>React</h3>
            </div>
            <div className="col-span-1 skills w-full h-full">
              <Image src={redux} alt="/" width="80" height="auto" />
              <h3>Redux</h3>
            </div>
            <div className="col-span-1 skills w-full h-full">
              <Image src={bootstrap} alt="/" width="80" height="auto" />
              <h3>Bootstrap</h3>
            </div>
            <div className="col-span-1 skills w-full h-full">
              <Image src={tailwind} alt="/" width="80" height="auto" />
              <h3>Tailwind CSS</h3>
            </div>
            <div className="col-span-1 skills w-full h-full">
              <Image src={mui} alt="/" width="80" height="auto" />
              <h3>Material UI</h3>
            </div>
          </div>

          {/* other skills */}
          <h2
            className="text-gray-700 tracking-wider uppercase py-4 mt-48"
            data-aos="flip-right"
          >
            Other Skills
          </h2>
          <div className="line max-w-[9%]" data-aos="flip-left"></div>
          <div
            className="grid md:grid-cols-3 max-w-7xl w-full place-items-center mt-20 gap-14  grid-cols-1  sm:grid-cols-2"
            data-aos="flip-up"
            data-aos-offset="200"
            data-aos-easing="linear"
          >
            <div className="col-span-1 skills w-full h-full">
              <Image src={firebase} alt="/" width="80" height="auto" />
              <h3>Firebase</h3>
            </div>
            <div className="col-span-1 skills w-full h-full">
              <Image src={github} alt="/" width="80" height="auto" />
              <h3 className="flex flex-col items-center">
                Version Control{" "}
                <span className="text-gray-500 tracking-wider">
                  (Git/Github)
                </span>
              </h3>
            </div>
            <div className="col-span-1 skills w-full h-full">
              <Image src={next} alt="/" width="80" height="auto" />
              <h3 className="flex flex-col items-center">
                Performance Optimization{" "}
                <span className="text-gray-500 tracking-wider">(Next JS)</span>{" "}
              </h3>
            </div>
            <div className="col-span-1 skills w-full h-full">
              <Image src={tools} alt="/" width="80" height="auto" />
              <h3 className="flex flex-col items-center">
                Debugging and Optimization{" "}
                <span className="text-gray-500 tracking-wider">
                  (Developer Tools)
                </span>{" "}
              </h3>
            </div>
            <div className="col-span-1 skills w-full h-full bg-[#ecf0f3]">
              <Image
                src={res}
                alt="/"
                width="80"
                height="auto"
                className="bg-[#ecf0f3]"
              />
              <h3>Responsive Design</h3>
            </div>
            <div className="col-span-1 skills w-full h-full bg-[#ecf0f3]">
              <Image
                src={api}
                alt="/"
                width="80"
                height="auto"
                className="bg-[#ecf0f3] text-[#ecf0f3]"
              />
              <h3>API Integrations</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
