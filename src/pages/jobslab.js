import Link from "next/link";
import React from "react";

const jobslab = () => {
  return (
    <div>
      <div id="projects" className="w-full pt-20 ">
        <div className="max-w-[1240px] mx-auto px-6  rounded-xl  w-full py-16 animate__animated animate__slideInRight animate__delay-.8s">
          <h2 className="pt-4  multi-text mx-5">Jobslab</h2>
          <div className="grid md:grid-cols-3  grid-cols-1 py-7 gap-8 place-items-center w-full ">
            <div className="col-span-2 mx-5">
              <p>
                Jobslab is an amazing jobs searcing web app. It allows
                candidates to filter jobs based on full time, part time and
                internships.
                <br />
                Also this allow companies to search for candidates which could
                be filtered based on current company, experience and
                location,etc. Includes dark/light mode to enhance its
                accessibility. To enhance user experience this app uses animate
                on scroll library.
              </p>
            </div>

            <div className="shadow-xl p-10 col-span-1 py-7 h-full  w-full shadow-gray-400">
              <h3 className="text-center multi-text text-xl pt-7">
                Technologies{" "}
              </h3>
              <div className="flex flex-col gap-7 pt-9">
                <li className="text-gray-500 hover:text-gray-500">REACT</li>
                <li className="text-gray-500 hover:text-gray-500">BOOTSTRAP</li>

                <li className="text-gray-500 hover:text-gray-500">
                  Firestore databasee
                </li>
                <li className="text-gray-500 hover:text-gray-500">
                  Firebase Authentication
                </li>
                <li className="text-gray-500 hover:text-gray-500">
                  Google Maps
                </li>
                <li className="text-gray-500 hover:text-gray-500">
                  Animate on scroll
                </li>
                <li className="text-gray-500 hover:text-gray-500">Vercel</li>
              </div>
            </div>
          </div>
          <div className="flex  items-center gap-9 mx-5">
            <Link href="/#projects">
              {" "}
              <button>Go Back</button>
            </Link>
            <a
              href="https://jobslab.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <button>See Live</button>
            </a>
            <a
              href="https://github.com/ZainabProgrammer/Jobslab"
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

export default jobslab;
