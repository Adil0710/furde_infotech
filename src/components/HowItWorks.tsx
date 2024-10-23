"use client";
import React, { useState } from "react";
import how1 from "@/assets/how1.png";
import how2 from "@/assets/how2.png";
import how3 from "@/assets/how3.png";
import how4 from "@/assets/how4.png";
import how5 from "@/assets/how5.png";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export default function HowItWorks() {
  const [options, setOptions] = useState<string>("Initial Consultation");
  return (
    <div className="bg-white md:pl-20 md:pr-20 px-5 py-10">
      <div>
        <h1 className=" text-4xl font-bold leading-tight  text-black">
          HOW IT WORKS:OUR STREAMLINED WORKFLOW
        </h1>
        <p className="mt-5 text-md text-[#9CA3AF] ">
          Explore our streamlined workflow,where we combine clear
          planning,efficient execution and continuous feedback to deliver
          tailored solutions that drive results.
        </p>

        <div className="mt-10 flex flex-row">
          {/* Left side */}

          <ul className="flex flex-col w-1/2 justify-evenly">
            <li
              onClick={() => setOptions("Initial Consultation")}
              className={`${
                options === "Initial Consultation" ? "font-bold" : ""
              } group cursor-pointer flex flex-row justify-between items-center w-[90%]`}
            >
              Initial Consultation
              <FaArrowRightLong
                className={`${
                  options === "Initial Consultation"
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-5 opacity-0"
                } transition-all duration-500`}
              />
            </li>

            <div className="h-[1px] bg-black/50 w-[90%]"></div>

            <li
              onClick={() => setOptions("Planning and Strategy")}
              className={`${
                options === "Planning and Strategy" ? "font-bold" : ""
              } group cursor-pointer flex flex-row justify-between items-center w-[90%]`}
            >
              Planning and Strategy
              <FaArrowRightLong
                className={`${
                  options === "Planning and Strategy"
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-5 opacity-0"
                } transition-all duration-500`}
              />
            </li>

            <div className="h-[1px] bg-black/50 w-[90%]"></div>

            <li
              onClick={() => setOptions("Design and Development")}
              className={`${
                options === "Design and Development" ? "font-bold" : ""
              } group cursor-pointer flex flex-row justify-between items-center w-[90%]`}
            >
              Design and Development
              <FaArrowRightLong
                className={`${
                  options === "Design and Development"
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-5 opacity-0"
                } transition-all duration-500`}
              />
            </li>

            <div className="h-[1px] bg-black/50 w-[90%]"></div>

            <li
              onClick={() => setOptions("Testing and Assurance")}
              className={`${
                options === "Testing and Assurance" ? "font-bold" : ""
              } group cursor-pointer flex flex-row justify-between items-center w-[90%]`}
            >
              Testing and Assurance
              <FaArrowRightLong
                className={`${
                  options === "Testing and Assurance"
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-5 opacity-0"
                } transition-all duration-500`}
              />
            </li>

            <div className="h-[1px] bg-black/50 w-[90%]"></div>

            <li
              onClick={() => setOptions("Client Feedback")}
              className={`${
                options === "Client Feedback" ? "font-bold" : ""
              } group cursor-pointer flex flex-row justify-between items-center w-[90%]`}
            >
              Client Feedback
              <FaArrowRightLong
                className={`${
                  options === "Client Feedback"
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-5 opacity-0"
                } transition-all duration-500`}
              />
            </li>
          </ul>

          {/* Right side  */}
          <div className="w-1/2">
            <div
              key={options} // Key to re-render with animation
              className={`transition-opacity duration-500 ${
                options ? "opacity-100" : "opacity-0"
              }`}
            >
              {options === "Initial Consultation" && (
                <>
                  <Image
                    src={how1}
                    alt="How it works"
                    className="transition-opacity duration-500 ease-in-out opacity-100"
                  />
                  <p className="ml-5 text-sm text-[#6B7280] transition-opacity duration-500 ease-in-out opacity-100">
                    Understanding client needs, goals, and project scope.
                  </p>
                </>
              )}

              {options === "Planning and Strategy" && (
                <>
                  <Image
                    src={how2}
                    alt="How it works"
                    className="transition-opacity duration-500 ease-in-out opacity-100"
                  />
                  <p className="ml-5 text-sm text-[#6B7280] transition-opacity duration-500 ease-in-out opacity-100">
                    Outlining a clear plan and defining strategies for project
                    success.
                  </p>
                </>
              )}

              {options === "Design and Development" && (
                <>
                  <Image
                    src={how3}
                    alt="How it works"
                    className="transition-opacity duration-500 ease-in-out opacity-100"
                  />
                  <p className="ml-5 text-sm text-[#6B7280] transition-opacity duration-500 ease-in-out opacity-100">
                    Creating the visual design and developing the necessary
                    features.
                  </p>
                </>
              )}

              {options === "Testing and Assurance" && (
                <>
                  <Image
                    src={how4}
                    alt="How it works"
                    className="transition-opacity duration-500 ease-in-out opacity-100"
                  />
                  <p className="ml-5 text-sm text-[#6B7280] transition-opacity duration-500 ease-in-out opacity-100">
                    Ensuring the project works flawlessly and meets quality
                    standards.
                  </p>
                </>
              )}

              {options === "Client Feedback" && (
                <>
                  <Image
                    src={how5}
                    alt="How it works"
                    className="transition-opacity duration-500 ease-in-out opacity-100"
                  />
                  <p className="ml-5 text-sm text-[#6B7280] transition-opacity duration-500 ease-in-out opacity-100">
                    Gathering feedback and implementing improvements as needed.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
