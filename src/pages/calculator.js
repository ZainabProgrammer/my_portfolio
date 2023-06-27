import Link from "next/link";
import React from "react";

const calculator = () => {
  return (
    <div>
      <div id="projects" className="w-full pt-20 ">
        <div className="max-w-[1240px] mx-auto px-6  rounded-xl  w-full py-0 animate__animated animate__slideInRight animate__delay-.8s">
          <h2 className="pt-4  multi-text mx-5">Calculator</h2>
          <div className="grid md:grid-cols-3  grid-cols-1 py-7 gap-8 place-items-center w-full ">
            <div className="col-span-2 mx-5">
              <p>
                This app utilizes Bootstrap&apos;s responsive design features,
                allowing it to adapt seamlessly to different screen sizes and
                devices. This ensures that users can access and utilize the
                calculator on their desktop computers, laptops, tablets, or
                smartphones without any issues. The calculator&apos;s layout is
                structured using Bootstrap&apos;s grid system, which enabled me
                to arrange the buttons in rows and columns. This design choice
                makes it easy for users to locate and press the buttons
                corresponding to the numbers, mathematical operations, and
                functions they want to use.
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
                <li className="text-gray-500 hover:text-gray-500">Bootstrap</li>
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
              href="https://amazon-green-ten.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <button>See Live</button>
            </a>
            <a
              href="https://github.com/ZainabProgrammer/amazon."
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
