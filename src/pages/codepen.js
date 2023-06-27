import Link from "next/link";
import React from "react";

const calculator = () => {
  return (
    <div>
      <div id="projects" className="w-full pt-20 ">
        <div className="max-w-[1240px] mx-auto px-6  rounded-xl  w-full py-0 animate__animated animate__slideInRight animate__delay-.8s">
          <h2 className="pt-4  multi-text mx-5">Codepen Clone</h2>
          <div className="grid md:grid-cols-3  grid-cols-1 py-7 gap-8 place-items-center w-full ">
            <div className="col-span-2 mx-5">
              <p>
                The project includes a feature-rich code editor with syntax
                highlighting for HTML, CSS, and JavaScript. It allows users to
                write and modify code easily, providing a seamless coding
                experience.
              </p>
              <p>
                The code editor is integrated with a live preview window that
                updates in real-time as users make changes to their code. This
                enables users to visualize the output of their code instantly.
              </p>
              <p>
                Users can create and switch between multiple code tabs, allowing
                them to work on different code snippets simultaneously and
                organize their projects effectively. Moreover, CodePen clone is
                designed to be responsive and adapt to various screen sizes and
                devices, ensuring optimal user experience across desktop and
                mobile platforms.
              </p>
            </div>

            <div className="shadow-xl p-10 col-span-1 py-7 h-full  w-full shadow-gray-400">
              <h3 className="text-center multi-text text-xl pt-7">
                Technologies{" "}
              </h3>
              <div className="flex flex-col gap-7 pt-9">
                <li className="text-gray-500 hover:text-gray-500">React</li>
                <li className="text-gray-500 hover:text-gray-500">
                  Context Api
                </li>
                <li className="text-gray-500 hover:text-gray-500">MUI</li>
                <li className="text-gray-500 hover:text-gray-500">
                  Codemirror2
                </li>
                <li className="text-gray-500 hover:text-gray-500">
                  Github Pages
                </li>
              </div>
            </div>
          </div>
          <div className="flex  items-center gap-9 mx-5">
            <a href="/#projects">
              {" "}
              <button>Go Back</button>
            </a>
            <a
              href="https://zainabprogrammer.github.io/codepen_clone"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <button>See Live</button>
            </a>
            <a
              href="https://github.com/ZainabProgrammer/codepen_clone"
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
