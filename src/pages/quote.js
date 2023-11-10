import Link from "next/link";
import React from "react";

const travel = () => {
  return (
    <div>
      <div id="projects" className="w-full pt-20 ">
        <div className="max-w-[1240px] mx-auto px-6  rounded-xl  w-full py-16 animate__animated animate__slideInRight animate__delay-.8s">
          <h2 className="pt-4  multi-text mx-5">Advice Generator</h2>
          <div className="grid md:grid-cols-3  grid-cols-1 py-7 gap-8 place-items-center w-full ">
            <div className="col-span-2 mx-5">
              <p>
                Advice Generator an amazing Quote Generator App made with React
                and Material UI which keeps users motivated and guided
                throughout their life.
              </p>
              <br />
              <p>
                It shows a loading indicator if the next quote is loaded to give
                as engaging user experience as it could
              </p>
            </div>

            <div className="shadow-xl p-10 col-span-1 py-7 h-full  w-full shadow-gray-400">
              <h3 className="text-center multi-text text-xl pt-7">
                Technologies{" "}
              </h3>
              <div className="flex flex-col gap-7 pt-9">
                <li className="text-gray-500 hover:text-gray-500">REACT</li>
                <li className="text-gray-500 hover:text-gray-500">
                  Material UI
                </li>
                <li className="text-gray-500 hover:text-gray-500">
                  Custom Hooks
                </li>

                <li className="text-gray-500 hover:text-gray-500">QUOTE API</li>
                <li className="text-gray-500 hover:text-gray-500">
                  Github Pages
                </li>
              </div>
            </div>
          </div>
          <div className="flex  items-center gap-9 mx-5">
            <Link href="/#projects">
              {" "}
              <button>Go Back</button>
            </Link>
            <a
              href="https://zainabprogrammer.github.io/Advice-generator/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <button>See Live</button>
            </a>
            <a
              href="https://github.com/ZainabProgrammer/Advice-generator"
              target="_blank"
              rel="noreferrer"
            >
              <button>Github Repo</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default travel;
