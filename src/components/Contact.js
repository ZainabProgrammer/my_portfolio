import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail, AiOutlineGithub } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaUserAlt } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "public/assets/contact.png";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen py-16">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <h2 className="my-5 text-center" data-aos="flip-right">
          Let's Talk
        </h2>
        <div className="line max-w-[9%]" data-aos="flip-right"></div>
        <div
          className="grid lg:grid-cols-5 gap-8 py-16"
          data-aos="zoom-in-right"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div className="items-center justify-center flex">
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300  "
                  src={ContactImg}
                  alt="/"
                  width="300"
                  height="auto"
                />
              </div>
              <div>
                <h3 className="py-5 text-3xl text-gray-700">
                  Drop Me a Message
                </h3>
                <p className="py-3">
                  I'm currently seeking new work opportunities and would love to
                  hear from you. If you have a project you'd like to discuss or
                  if you're looking to hire a front-end web developer, I'm
                  available and ready to collaborate.
                </p>
              </div>
              <div>
                <p className="uppercase pt-4">Connect with me</p>
                <div className=" mt-8 flex justify-between gap-2 items-center icons-group">
                  <div className="icons">
                    <a
                      href="https://www.linkedin.com/in/zainab-younas-1b9687269/"
                      target="_blank"
                      rel="norefferer"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="icons">
                    <a
                      href="https://github.com/ZainabProgrammer"
                      target="_blank"
                      rel="norefferer"
                    >
                      <AiOutlineGithub />
                    </a>
                  </div>

                  <div className="icons">
                    <a href="/#contact">
                      <AiOutlineMail />
                    </a>
                  </div>
                  <div className="icons ">
                    <FaUserAlt />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/88496cfc-e047-4403-bc4f-083795d951c8"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      required
                      className="border-b-2  rounded-lg p-3 flex border-b-gray-300 "
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 ">
                      Phone Number
                    </label>
                    <input
                      className="border-b-2 rounded-lg p-3 flex border-b-gray-300"
                      required
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 ">Email</label>
                  <input
                    required
                    className="border-b-2 rounded-lg p-3 flex border-b-gray-300 "
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 ">Subject</label>
                  <input
                    required
                    className="border-b-2 rounded-lg p-3 flex border-b-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 ">Message</label>
                  <textarea
                    required
                    className="border-b-2 rounded-lg p-3 border-b-gray-300"
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 mt-4">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-end py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110  hover:bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white text-gray-500 font-semibold ">
              <HiOutlineChevronDoubleUp size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
