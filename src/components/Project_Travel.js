import React from "react";
import Link from "next/link";
import Image from "next/image";
import project_3 from "public/assets/project-3.png";
const Project_Travel = () => {
  return (
    <div>
      <div className="relative group w-full  shadow-gray-700 rounded-xl shadow-lg p-2">
        <figure className="snip1361 w-full h-auto ">
          <Image src={project_3} alt="sample45" className="w-full h-auto" />
          <figcaption className="md:text-lg text-[.7rem]">
            <h3>Travel</h3>

            <div className="flex w-full  items-center gap-5 py-0 md:py-7">
              <Link href="/travel">
                <button>See Details</button>
              </Link>

              <div className=" text-gray-700">
                <a
                  href="https://zainabprogrammer.github.io/travel_web/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Live Demo</button>
                </a>
              </div>
              <div className=" text-gray-700">
                <a
                  href="https://github.com/ZainabProgrammer/travel_web"
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

export default Project_Travel;
