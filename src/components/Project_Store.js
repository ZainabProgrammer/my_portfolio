import React from "react";
import Link from "next/link";
import Image from "next/image";
import project_4 from "public/assets/dictionary.png";
const Project_Store = () => {
  return (
    <div>
      <div className="relative group w-full  shadow-gray-700 rounded-xl shadow-lg p-2">
        <figure className="snip1361 w-full h-auto ">
          <Image src={project_4} alt="sample45" className="w-full h-auto" />
          <figcaption className="md:text-lg text-[.7rem]">
            <h3>Dictionary Web App</h3>

            <div className="flex w-full  items-center gap-5 py-0 md:py-7">
              <Link href="/store">
                <button>See Details</button>
              </Link>

              <div className=" text-gray-700">
                <a
                  href="https://zainabprogrammer.github.io/Dictionary-web-app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Live Demo</button>
                </a>
              </div>
              <div className=" text-gray-700">
                <a
                  href="https://github.com/ZainabProgrammer/Dictionary-web-app"
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

export default Project_Store;
