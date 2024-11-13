"use client";
import React, { useState } from "react";
import how1 from "@/assets/how1.png";
import how2 from "@/assets/how2.png";
import how3 from "@/assets/how3.png";
import how4 from "@/assets/how4.png";
import how5 from "@/assets/how5.png";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const [selectedOption, setSelectedOption] = useState<string>(
    "Initial Consultation"
  );

  // Store steps and image descriptions in an array for cleaner mapping
  const steps = [
    {
      label: "Initial Consultation",
      img: how1,
      description: "Understanding client needs, goals, and project scope.",
    },
    {
      label: "Planning and Strategy",
      img: how2,
      description:
        "Defining the project roadmap, timelines, and resource allocation.",
    },
    {
      label: "Design and Development",
      img: how3,
      description:
        "Creating wireframes, user interface (UI), and writing code for the solution.",
    },
    {
      label: "Testing and Assurance",
      img: how4,
      description:
        "Ensuring the product is functional, secure, and bug-free through rigorous testing.",
    },
    {
      label: "Client Feedback",
      img: how5,
      description:
        "Gathering client input and making necessary adjustments or improvements.",
    },
  ];

  // Find the current step object to display corresponding image and description
  const currentStep = steps.find((step) => step.label === selectedOption);

  return (
    <div className="bg-white md:pl-20 md:pr-20 px-5 py-10">
      {/* Preload images for faster switching */}
      <div style={{ display: "none" }}>
        {steps.map((step, index) => (
          <Image
            key={index}
            src={step.img}
            alt={`Preload ${step.label}`}
            priority
          />
        ))}
      </div>

      <div>
        <h1 className="text-4xl font-bold leading-tight text-black">
          HOW IT WORKS: OUR STREAMLINED WORKFLOW
        </h1>
        <p className="mt-5 text-md text-[#9CA3AF]">
          Explore our streamlined workflow, where we combine clear planning,
          efficient execution, and continuous feedback to deliver tailored
          solutions that drive results.
        </p>

        <div className="mt-16 flex flex-row">
          {/* Left side options */}
          <ul className="flex flex-col w-1/2 justify-evenly -mt-5">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <li
                  onClick={() => setSelectedOption(step.label)}
                  className={`cursor-pointer flex flex-row justify-between items-center w-[90%] hover:font-bold ${
                    selectedOption === step.label ? "font-bold" : ""
                  } duration-200`}
                >
                  {step.label}
                  <FaArrowRightLong
                    className={`transition-transform duration-500 ${
                      selectedOption === step.label
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-5 opacity-0"
                    }`}
                  />
                </li>
                <div className="h-[0.6px] bg-[#9CA3AF] w-[90%] rounded-full"></div>
              </React.Fragment>
            ))}
          </ul>

          {/* Right side content */}
          <div className="w-1/2">
            <div className="pb-5">
              {currentStep && (
                <motion.div
                  key={currentStep.label}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="pb-5">
                    <Image
                      src={currentStep.img}
                      alt={currentStep.label}
                      quality={90}
                      priority
                      className="cardShadow rounded-xl"
                    />
                  </div>
                  <p className="ml-5 text-sm text-[#6B7280]">
                    {currentStep.description}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
