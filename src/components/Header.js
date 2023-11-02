import React, { useState, useEffect } from "react";
import Link from "next/link";
import "animate.css";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaUserAlt } from "react-icons/fa";

const Header = () => {
  const [side, setside] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      var header = document.getElementById("header");
      var scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollPosition > 0) {
        header.classList.add("header-bg");
      } else {
        header.classList.remove("header-bg");
      }
    });
  }, []);

  const handleSide = () => {
    setside(!side);
    console.log("clicked");
  };

  return (
    <div className="w-full  fixed  z-[100] h-18 " id="header">
      <div className="flex  items-center justify-between w-full h-full px-2 2xl:16 ">
        <span className="bg-transparent h-18 w-18">
          <Link href="/">
            <h2
              style={{ fontFamily: "cursive" }}
              className=" my-2 bg-gradient-to-r  from-purple-500 to-blue-500 bg-clip-text  text-transparent"
            >
              Zainab.
            </h2>
          </Link>
        </span>
        <div className="ml-auto ">
          <ul className=" hidden md:flex header ">
            <Link
              href="/#"
              className="duration-300 about-link "
              data-replace="Home"
            >
              <li className="px-5 uppercase color  tracking-wide text-sm duration-100 ">
                <span> Home</span>
              </li>
            </Link>
            <Link href="/#about" className="duration-300" data-replace="About">
              <li className="px-5 uppercase color tracking-wide text-sm duration-100">
                About
              </li>
            </Link>
            <Link
              href="/#skills"
              className="duration-300"
              data-replace="Skills"
            >
              <li className="px-5 uppercase color tracking-wide text-sm duration-100 ">
                Skills
              </li>
            </Link>
            <Link
              href="/#projects"
              className="duration-300"
              data-replace="Projects"
            >
              <li className="px-5 uppercase color tracking-wide text-sm duration-100 ">
                Projects
              </li>
            </Link>
            <Link
              href="/#contact"
              className="duration-300"
              data-replace="Contact"
            >
              <li className="px-5 uppercase color tracking-wide text-sm duration-100 ">
                Contact
              </li>
            </Link>
          </ul>
          <div
            onClick={handleSide}
            className="p-2 text-purple-600  md:hidden cursor-pointer duration-100 rounded-xl hover:bg-gradient-to-r from-purple-500  to-blue-500 hover:text-white "
          >
            <AiOutlineMenu className="md:hidden w-6 h-6 flex  " />
          </div>
        </div>
      </div>

      {/* Side header */}
      <div
        className={
          side ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/60" : ""
        }
      >
        <div
          className={
            side
              ? " md:hidden fixed left-0 top-0  h-full  w-[75%] sm:w-[60%] md:w-[30%] ease-in duration-500 shadow-xl bg-[#ecf0f3] p-10"
              : " fixed p-10 top-0 left-[-100%] h-full ease-in duration-500 "
          }
        >
          <div>
            <div className=" flex w-full items-center justify-between">
              <div className="flex w-full items-center justify-between">
                <span>
                  <Link href="/">
                    <h2
                      style={{ fontFamily: "cursive" }}
                      className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text  text-transparent "
                    >
                      Zainab.
                    </h2>
                  </Link>
                </span>

                {side && (
                  <div
                    onClick={handleSide}
                    className="text-xl shadow-xl hover:bg-gradient-to-r from-purple-500  to-blue-500 hover:text-white   text-purple-700 font-bold p-2  shadow-gray-500   bg-gray-200 cursor-pointer duration-100 rounded-full"
                  >
                    <AiOutlineClose />
                  </div>
                )}
              </div>
            </div>
            <span className="bg-[#ecf0f3] h-18 w-18">
              <div className="pt-9 pb-5  md:hidden w-full px-9 flex border-b border-gray-300">
                Let&apos;s build something together
              </div>
            </span>
            <ul
              className=" flex   flex-col md:hidden header"
              style={{ maxWidth: "fit-content" }}
            >
              <Link href="/" data-replace="Home">
                <li
                  className="py-4 px-9  uppercase  text-sm duration-100"
                  onClick={() => setside(false)}
                >
                  Home
                </li>
              </Link>
              <Link href="/#about" data-replace="About">
                <li
                  className="py-4 uppercase px-9  text-sm duration-100 "
                  onClick={() => setside(false)}
                >
                  About
                </li>
              </Link>
              <Link href="/#skills" data-replace="Skills">
                <li
                  className="py-4 uppercase px-9  text-sm duration-100  "
                  onClick={() => setside(false)}
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects" data-replace="Projects">
                <li
                  className="py-4 uppercase px-9  text-sm duration-100  "
                  onClick={() => setside(false)}
                >
                  Projects
                </li>
              </Link>
              <Link href="/#contact" data-replace="Contact">
                <li
                  className="py-4 uppercase px-9 text-sm duration-100  "
                  onClick={() => setside(false)}
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>

          <div className="">
            <h2 className="text-2xl  font-bold md:hidden  my-8 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Let&apos;s Connect
            </h2>
            <div className=" md:hidden gap-4 flex justify-evenly items-center">
              <div className="icons " onClick={() => setside(false)}>
                <a
                  href="https://www.linkedin.com/in/zainab-younas-1b9687269/"
                  target="_blank"
                  rel="norefferer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="icons" onClick={() => setside(false)}>
                <a
                  href="https://github.com/ZainabProgrammer"
                  target="_blank"
                  rel="norefferer"
                >
                  <AiOutlineGithub />
                </a>
              </div>
              <div className="icons" onClick={() => setside(false)}>
                <Link href="/#contact">
                  <AiOutlineMail />
                </Link>
              </div>
              <Link href="Zainab'sResume.pdf">
                <div className="icons" onClick={() => setside(false)}>
                  <FaUserAlt />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
