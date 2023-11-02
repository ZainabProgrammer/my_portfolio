import Link from "next/link";
import React from "react";

const amazon = () => {
  return (
    <div>
      <div id="projects" className="w-full pt-20 ">
        <div className="max-w-[1240px] mx-auto px-6  rounded-xl  w-full py-16 animate__animated animate__slideInRight animate__delay-.8s">
          <h2 className="pt-4  multi-text mx-5">Amazon Clone</h2>
          <div className="grid md:grid-cols-3  grid-cols-1 py-7 gap-8 place-items-center w-full ">
            <div className="col-span-2 mx-5">
              <p className="py-2">
                {" "}
                I implemented several key components to deliver a seamless user
                experience. To provide a wide range of products, I integrated a
                Dummy JSON API that fetches product data over the network,
                enabling users to explore and select items from an extensive
                catalog. To manage the state of the application, I utilized
                Redux Toolkit, ensuring a streamlined and efficient data flow
                within a single store.
              </p>
              <p>
                One of the standout features of the clone is its robust search
                functionality. Users can effortlessly browse through specific
                categories or search for individual items, guaranteeing an
                intuitive and tailored shopping experience. The website also
                enables users to conveniently add products to their shopping
                carts, adjust quantities, and remove items as needed.
              </p>
              <p>
                To enhance the user experience further, I incorporated Firebase
                authentication, allowing users to sign in or sign up with ease.
                This mirrors the familiar interface of the original Amazon
                platform, ensuring a seamless transition for users. For
                deployment, I utilized Vercel, a reliable platform that ensures
                the website is accessible and performs optimally.
              </p>
              <p>
                By successfully recreating the Amazon experience through this
                clone, I showcase my expertise in utilizing modern technologies
                to develop dynamic and feature-rich web applications. This
                project not only highlights my skills but also demonstrates my
                ability to integrate essential functionalities, manage state
                efficiently, and deploy applications effectively. I am excited
                to present this Amazon website clone as a testament to my
                capabilities in creating exceptional e-commerce experiences.
              </p>
            </div>

            <div className="shadow-xl p-10 col-span-1 py-7 h-full  w-full shadow-gray-400">
              <h3 className="text-center multi-text text-xl pt-7">
                Technologies{" "}
              </h3>
              <div className="flex flex-col gap-7 pt-9">
                <li className="text-gray-500 hover:text-gray-500">React</li>
                <li className="text-gray-500 hover:text-gray-500">
                  Redux Toolkit
                </li>
                <li className="text-gray-500 hover:text-gray-500">
                  Tailwind CSS
                </li>
                <li className="text-gray-500 hover:text-gray-500">Vercel</li>
                <li className="text-gray-500 hover:text-gray-500">Firebase</li>
                <li className="text-gray-500 hover:text-gray-500">
                  Dummy Json Api
                </li>
                <li className="text-gray-500 hover:text-gray-500">
                  Searching Functionality
                </li>
                <li className="text-gray-500 hover:text-gray-500">
                  User Authentication
                </li>
                <li className="text-gray-500 hover:text-gray-500">
                  Cart Functionality
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

export default amazon;
