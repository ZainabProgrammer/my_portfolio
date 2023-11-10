import React from "react";
import { useState } from "react";
import Project from "./Project";

const Projects = () => {
  const [seeMore, setseeMore] = useState(false);
  const handleSeeMore = () => {
    setseeMore(!seeMore);
  };

  return (
    <div className=" content py-9">
      <div className="my-32 pt-32">
        <div className=" ">
          <div className="w-full p-2 py-16 " id="projects">
            <div className="w-full flex  flex-col items-center justify-center ">
              <h2
                className="text-gray-700 tracking-wider py-4 uppercase"
                data-aos="flip-left"
              >
                My Projects
              </h2>
              <div className="line max-w-[9%]" data-aos="flip-right"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Project handleSeeMore={handleSeeMore} seeMore={seeMore} />
      </div>
      <div className="w-full text-center py-6 my-8">
        <button className="button-2" onClick={handleSeeMore}>
          {seeMore ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
