import React from "react";
import Project_Travel from "./Project_Travel";
import Project_Calculator from "./Project_Calculator";
import Project_Store from "./Project_Store";
import Project_Amazon from "./Project_Amazon";
import { useState } from "react";
import Project_Codepen from "./Project_Codepen";
import Project_Quote from "./Project_Quote";
import Project_Jobslab from "./Project_Jobslab";
const Projects = () => {
  const [seeMore, setseeMore] = useState(false);
  return (
    <div className=" content pt-9">
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
      <div className="grid grid-cols-1   h-auto max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-2 max-width-4xl w-full gap-8  place-items-center">
        <Project_Amazon />
        <Project_Jobslab />
        <Project_Store />
        <Project_Codepen />
        {seeMore && <Project_Quote />}
        {seeMore && <Project_Calculator />}
        {seeMore && <Project_Travel />}
      </div>
      <div className="w-full text-center py-6 my-8">
        <button className="button-2" onClick={() => setseeMore(!seeMore)}>
          {seeMore ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
