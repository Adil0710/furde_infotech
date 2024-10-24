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
        <h1 className=" text-4xl font-bold leading-tight text-black">
          HOW IT WORKS: OUR STREAMLINED WORKFLOW
        </h1>
        <p className="mt-5 text-md text-[#9CA3AF]">
          Explore our streamlined workflow, where we combine clear planning,
          efficient execution, and continuous feedback to deliver tailored
          solutions that drive results.
        </p>

        <div className="mt-10 flex flex-row">
          {/* Left side */}
          <ul className="flex flex-col w-1/2 justify-evenly">
            {["Initial Consultation", "Planning and Strategy", "Design and Development", "Testing and Assurance", "Client Feedback"].map((step, index) => (
              <React.Fragment key={index}>
                <li
                  onClick={() => setOptions(step)}
                  className={`${
                    options === step ? "font-bold" : ""
                  } group cursor-pointer flex flex-row justify-between items-center w-[90%] hover:font-bold duration-200`}
                >
                  {step}
                  <FaArrowRightLong
                    className={`${
                      options === step
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-5 opacity-0"
                    } transition-all duration-500`}
                  />
                </li>
                <div className="h-[0.6px] bg-[#9CA3AF] w-[90%] rounded-full"></div>
              </React.Fragment>
            ))}
          </ul>

          {/* Right side */}
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
                   
                    quality={90}
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
                   
                    quality={90}
                    className="transition-opacity duration-500 ease-in-out opacity-100"
                  />
                  <p className="ml-5 text-sm text-[#6B7280] transition-opacity duration-500 ease-in-out opacity-100">
                    Defining the project roadmap, timelines, and resource allocation.
                  </p>
                </>
              )}

              {options === "Design and Development" && (
                <>
                  <Image
                    src={how3}
                    alt="How it works"
                   
                    quality={90}
                    className="transition-opacity duration-500 ease-in-out opacity-100"
                  />
                  <p className="ml-5 text-sm text-[#6B7280] transition-opacity duration-500 ease-in-out opacity-100">
                    Creating wireframes, user interface (UI), and writing code for the solution.
                  </p>
                </>
              )}

              {options === "Testing and Assurance" && (
                <>
                  <Image
                    src={how4}
                    alt="How it works"
                   
                    quality={90}
                    className="transition-opacity duration-500 ease-in-out opacity-100"
                  />
                  <p className="ml-5 text-sm text-[#6B7280] transition-opacity duration-500 ease-in-out opacity-100">
                    Ensuring the product is functional, secure, and bug-free through rigorous testing.
                  </p>
                </>
              )}

              {options === "Client Feedback" && (
                <>
                  <Image
                    src={how5}
                    alt="How it works"
                   
                    quality={90}
                    className="transition-opacity duration-500 ease-in-out opacity-100"
                  />
                  <p className="ml-5 text-sm text-[#6B7280] transition-opacity duration-500 ease-in-out opacity-100">
                    Gathering client input and making necessary adjustments or improvements.
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
