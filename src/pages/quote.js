import Link from "next/link";
import React from "react";

const travel = () => {
  return (
    <div>
      <div id="projects" className="w-full pt-20 ">
        <div className="max-w-[1240px] mx-auto px-6  rounded-xl  w-full py-16 animate__animated animate__slideInRight animate__delay-.8s">
          <h2 className="pt-4  multi-text mx-5">Inspiro Bot</h2>
          <div className="grid md:grid-cols-3  grid-cols-1 py-7 gap-8 place-items-center w-full ">
            <div className="col-span-2 mx-5">
              <p>
                Inspiro Bot is an amazing Quote Generator App made with React
                and Bootstrap which keeps users motivated and guided throughout
                their life.
                <br />
                To enhance user experience this app changes its background
                dynamically whenever the user clicks to generate next quote.
              </p>
            </div>

            <div className="shadow-xl p-10 col-span-1 py-7 h-full  w-full shadow-gray-400">
              <h3 className="text-center multi-text text-xl pt-7">
                Technologies{" "}
              </h3>
              <div className="flex flex-col gap-7 pt-9">
                <li className="text-gray-500 hover:text-gray-500">REACT</li>
                <li className="text-gray-500 hover:text-gray-500">BOOTSTRAP</li>

                <li className="text-gray-500 hover:text-gray-500">QUOTE API</li>
                <li className="text-gray-500 hover:text-gray-500">
                  DYNAMIC BACKGROUND COLOR
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
              href="https://zainabprogrammer.github.io/inspiro_bot/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <button>See Live</button>
            </a>
            <a
              href="https://github.com/ZainabProgrammer/inspiro_bot"
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
