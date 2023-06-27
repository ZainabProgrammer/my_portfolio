import React from "react";
import project_1 from "public/assets/project-1.png";
import Link from "next/link";
import Image from "next/image";
const Project_Amazon = () => {
  return (
    <div>
      <div className="relative group w-full  shadow-gray-700 rounded-xl shadow-lg p-2">
        <figure className="snip1361 w-full h-auto">
          <Image src={project_1} alt="sample45" className="w-full h-auto" />
          <figcaption className="md:text-lg text-[.7rem]">
            <h3>Amazon Clone</h3>

            <div className="flex items-center gap-5 py-0 md:py-7  ">
              <Link href="/amazon">
                <button>See Details</button>
              </Link>

              <div className=" text-gray-700">
                <a
                  href="https://amazon-green-ten.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Live Demo</button>
                </a>
              </div>
              <div className=" text-gray-700">
                <a
                  href="https://github.com/ZainabProgrammer/amazon."
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

export default Project_Amazon;
