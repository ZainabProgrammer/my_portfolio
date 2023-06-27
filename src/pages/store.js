import Link from "next/link";
import React from "react";

const calculator = () => {
  return (
    <div>
      <div id="projects" className="w-full pt-20 ">
        <div className="max-w-[1240px] mx-auto px-6  rounded-xl  w-full py-0 animate__animated animate__slideInRight animate__delay-.8s">
          <h2 className="pt-4  multi-text uppercase mx-5">Shopping Store</h2>
          <div className="grid md:grid-cols-3  grid-cols-1 py-7 gap-8 place-items-center w-full ">
            <div className="col-span-2 mx-5">
              <p>
                This website is made with pure HTML,CSS and Javascript. I have
                used the responsive design to checkout my skills through this
                website. Also, I implemented the google maps in order to show
                the location of my shopping store which is giving this website
                the real world website taste.Moreover, I have deployed this
                website on github pages.
              </p>
            </div>

            <div className="shadow-xl p-10 col-span-1 py-7 h-full  w-full shadow-gray-400">
              <h3 className="text-center multi-text text-xl pt-7">
                Technologies{" "}
              </h3>
              <div className="flex flex-col gap-7 pt-9">
                <li className="text-gray-500 hover:text-gray-500">HTML</li>
                <li className="text-gray-500 hover:text-gray-500">CSS</li>
                <li className="text-gray-500 hover:text-gray-500 uppercase">
                  JavaScript
                </li>
                <li className="text-gray-500 hover:text-gray-500">
                  Google Maps
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
              href="https://zainabprogrammer.github.io/shopping_store/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <button>See Live</button>
            </a>
            <a
              href="https://github.com/ZainabProgrammer/shopping_store"
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
