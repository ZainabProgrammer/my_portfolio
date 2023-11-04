import React from "react";
import project_6 from "public/assets/jobslab.png";
import Link from "next/link";
import Image from "next/image";
const Project_Jobslab = () => {
  return (
    <div>
      <div className="relative group w-full  shadow-gray-700 rounded-xl shadow-lg p-2">
        <figure className="snip1361 w-full h-auto">
          <Image src={project_6} alt="sample45" className="w-full h-auto" />
          <figcaption className="md:text-lg text-[.7rem]">
            <h3>Jobslab</h3>

            <div className="flex items-center gap-5 py-0 md:py-7  ">
              <Link href="/jobslab">
                <button>See Details</button>
              </Link>

              <div className=" text-gray-700">
                <a
                  href="https://zainabprogrammer.github.io/inspiro_bot/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Live Demo</button>
                </a>
              </div>
              <div className=" text-gray-700">
                <a
                  href="https://github.com/ZainabProgrammer/inspiro_bot"
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

export default Project_Jobslab;
