import React from "react";
import Link from "next/link";
import Image from "next/image";
import project_2 from "public/assets/project-2.png";
const Project_Calculator = () => {
  return (
    <div>
      <div className="relative group w-full  shadow-gray-700 rounded-xl shadow-lg p-2">
        <figure className="snip1361 w-full h-auto ">
          <Image src={project_2} alt="sample45" className="w-full h-auto" />
          <figcaption className="md:text-lg text-[.7rem]">
            <h3>Calculator</h3>

            <div className="flex w-full  items-center gap-5 py-0 md:py-7">
              <Link href="/calculator">
                <button>See Details</button>
              </Link>

              <div className=" text-gray-700">
                <a
                  href="https://zainabprogrammer.github.io/Calculator/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Live Demo</button>
                </a>
              </div>
              <div className=" text-gray-700">
                <a
                  href="https://github.com/ZainabProgrammer/Calculator"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Github Repo</button>
                </a>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Project_Calculator;
