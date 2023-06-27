import Link from "next/link";
import React from "react";

const travel = () => {
  return (
    <div>
      <div id="projects" className="w-full pt-20 ">
        <div className="max-w-[1240px] mx-auto px-6  rounded-xl  w-full py-16 animate__animated animate__slideInRight animate__delay-.8s">
          <h2 className="pt-4  multi-text mx-5">Travel Website</h2>
          <div className="grid md:grid-cols-3  grid-cols-1 py-7 gap-8 place-items-center w-full ">
            <div className="col-span-2 mx-5">
              <p>
                The Travel Website is a dynamic and visually captivating web
                application that I developed using HTML, CSS, and JavaScript. It
                serves as an interactive platform for users to explore and
                discover various travel destinations. It is a simple project
                made to test the HTML,CSS and JAVASCRIPT concepts. It is fully
                responsive website providing best accessibility to users on
                their desktop computers, laptops, tablets, or smartphones
                without any issues.The Travel Website serves as a testament to
                my skills in creating engaging and user-friendly web
                applications.
              </p>
            </div>

            <div className="shadow-xl p-10 col-span-1 py-7 h-full  w-full shadow-gray-400">
              <h3 className="text-center multi-text text-xl pt-7">
                Technologies{" "}
              </h3>
              <div className="flex flex-col gap-7 pt-9">
                <li className="text-gray-500 hover:text-gray-500">HTML</li>
                <li className="text-gray-500 hover:text-gray-500">CSS</li>
                <li className="text-gray-500 hover:text-gray-500">
                  JAVASCRIPT
                </li>

                <li className="text-gray-500 hover:text-gray-500">SWIPER JS</li>
                <li className="text-gray-500 hover:text-gray-500">
                  FONTAWSOME
                </li>
                <li className="text-gray-500 uppercase hover:text-gray-500">
                  Github pages
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
              href="https://zainabprogrammer.github.io/travel_web/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <button>See Live</button>
            </a>
            <a
              href="https://github.com/ZainabProgrammer/travel_web"
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
