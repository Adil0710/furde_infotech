"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function OurStory() {
  const [selectedYear, setSelectedYear] = useState<string>("1989");

  // Store story content in an array for cleaner mapping
  const timeline = [
    {
      year: "1989",
      title: "Furde Group",
      description:
        "The foundation of Furde Group was laid in 1989, with a vision to build more than the structures we aimed to create a legacy of trust and quality. Since its inception, we have been synonymous with reliability and excellence in every venture we take.",
    },
    {
      year: "1987",
      title: "Amar Constructions",
      description:
        "In 1997, we expanded our horizons with the establishment of Amar constructions. This marked our foray into large-scale construction projects, where we delivered numerous iconic structures contributing to the skyline of our city.",
    },
    {
      year: "2003",
      title: "Furde Constructions Pvt. Ltd.",
      description:
        "Furde Constructions was born as a testament to our growing ambition. We focused on innovative designs and sustainable construction practices, ensuring that every project meets the highest standards of quality.",
    },
    {
      year: "2012",
      title: "Furde Group Warehouse",
      description:
        "2012 saw the inception of Furde Group Warehouse, catering to the logistics and warehousing needs of our clients. This venture solidified our reputation as a versatile player in the real estate and construction industry.",
    },
    {
      year: "2018",
      title: "Rohit Realty (Pune)",
      description:
        "Through Rohit Realty, we diversified our portfolio into the facility management sector along with construction, delivering projects in Pune and Solapur.",
    },
    {
      year: "2024",
      title: "Furde Infotech Pvt. Ltd.",
      description:
        "We took a significant leap forward with the establishment of Furde Infotech Pvt. Ltd. This marks our entry into the world of technology and BPO services, driven by the same values that have guided us for over three decades - Innovative ideas, Dynamic Results.",
    },
  ];

  // Find the current timeline object to display its content
  const currentStory = timeline.find((item) => item.year === selectedYear);

  return (
    <div className="bg-white md:pl-20 md:pr-20 px-5 py-10 scroll-m-28" id="ourstory">
      <div>
        <h1 className="text-4xl font-bold leading-tight text-black">
          Our Story
        </h1>
        <p className="mt-5 text-md text-[#9CA3AF]">
          Building Legacy of Trust and Excellence.
        </p>

        <div className="mt-10 flex flex-row h-96">
          {/* Left Side - Year List */}
          <ul className="flex flex-col w-1/2 justify-between">
            {timeline.map((item, index) => (
              <React.Fragment key={index}>
              <li
          
                onClick={() => setSelectedYear(item.year)}
                className={`cursor-pointer flex flex-row justify-between items-center w-[90%] hover:font-bold duration-200 ${
                  selectedYear === item.year ? "font-bold" : ""
                }`}
              >
                {item.year}
                <FaArrowRightLong
                    className={`transition-transform duration-500 ${
                      selectedYear === item.year
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-5 opacity-0"
                    }`}
                  />
              </li>
              <div className="h-[0.6px] bg-[#9CA3AF] w-[90%] rounded-full"></div>
              </React.Fragment>
            ))}
          </ul>

          {/* Right Side - Story Content */}
          <div className="w-1/2 flex flex-col items-center justify-center">
            {currentStory && (
              <motion.div
                key={currentStory.year}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                
              >
                <h1 className="font-semibold text-5xl">{currentStory.title}</h1>
                <p className="mt-5 text-lg text-[#4B5563]">
                  {currentStory.description}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Careers Section */}
      <div className="mt-10 flex flex-col py-10 z-10 text-black">
        <h1 className="text-4xl font-bold leading-tight">Our Story</h1>
        <p className="mt-5 text-md text-[#4B5563]">
          Building Legacy of Trust and Excellence.
        </p>
        <Link
          href="/careers"
          className="mt-10 rounded font-semibold text-sm w-52 flex items-center justify-center py-2 hover:bg-[#1E3A8A] bg-[#1d4ed8] text-white transition duration-500"
        >
          Explore Careers
        </Link>
      </div>
    </div>
  );
}
