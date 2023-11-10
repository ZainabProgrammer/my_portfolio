import React from "react";
import Link from "next/link";
import Image from "next/image";
import data from "../source/data.json";
const Project = ({ seeMore }) => {
  const proj = data.filter((e) => e.see_more === false);
  const myproj = [...proj];

  const now = data.filter((e) => e.see_more === true);
  let combined = [...proj, ...now];
  let ans = (seeMore && combined) || myproj;

  return (
    <div className="grid grid-cols-1  h-auto max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-2 max-width-4xl w-full gap-8  place-items-center">
      {ans.map((project, index) => {
        return (
          <div
            className="relative group w-full  shadow-gray-700 rounded-xl shadow-lg p-2"
            key={index}
          >
            <figure className="snip1361 w-ful md:h-96 sm:h-auto rounded-xl">
              <Image
                src={project.image}
                alt="sample45"
                className="w-full h-auto"
                height={500}
                width={500}
              />
              <figcaption className="md:text-lg text-[.7rem]">
                <h3>{project.name}</h3>

                <div className="flex items-center gap-5 py-0 md:py-7  ">
                  <Link href={project.endpoint}>
                    <button>See Details</button>
                  </Link>

                  <div className=" text-gray-700">
                    <a href={project.url} target="_blank" rel="noreferrer">
                      <button>Live Demo</button>
                    </a>
                  </div>
                  <div className=" text-gray-700">
                    <a
                      href={project.github_repo}
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
        );
      })}
    </div>
  );
};

export default Project;
