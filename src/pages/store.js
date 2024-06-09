import Link from "next/link";
import React from "react";

const calculator = () => {
  return (
    <div>
      <div id="projects" className="w-full pt-20 ">
        <div className="max-w-[1240px] mx-auto px-6  rounded-xl  w-full py-0 animate__animated animate__slideInRight animate__delay-.8s">
          <h2 className="pt-4  multi-text uppercase mx-5">
            Dictionary Web App
          </h2>
          <div className="grid md:grid-cols-3  grid-cols-1 py-7 gap-8 place-items-center w-full ">
            <div className="col-span-2 mx-5">
              <p>
                This website is made with Material UI. I have used the custom
                theme to give my app a consistent design. I have used custom
                hooks to make the logic and design separate. Also, I implemented
                the dark/light mode in order to give the amazing user
                experience. This app will help end users to search for any word
                and give them the pronunciation alongwith their phonetics and
                vast meanings with respect to each part of speech.
              </p>
            </div>

            <div className="shadow-xl p-10 col-span-1 py-7 h-full  w-full shadow-gray-400">
              <h3 className="text-center multi-text text-xl pt-7">
                Technologies{" "}
              </h3>
              <div className="flex flex-col gap-7 pt-9">
                <li className="text-gray-500 hover:text-gray-500">React</li>
                <li className="text-gray-500 hover:text-gray-500">
                  Custom Hooks
                </li>
                <li className="text-gray-500 hover:text-gray-500 uppercase">
                  Material UI
                </li>
                <li className="text-gray-500 hover:text-gray-500">API</li>
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
              href="https://zainabprogrammer.github.io/Dictionary_Web_App/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <button>See Live</button>
            </a>
            <a
              href="https://github.com/ZainabProgrammer/Dictionary_Web_App"
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

export default calculator;
