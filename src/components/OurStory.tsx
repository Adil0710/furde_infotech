"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function OurStory() {
  const [options, setOptions] = useState<string>("1989");
  return (
    <div className="bg-white md:pl-20 md:pr-20 px-5 py-10">
      {/* Hidden preloaded images */}

      <div>
        <h1 className=" text-4xl font-bold leading-tight text-black">
          Our Story
        </h1>
        <p className="mt-5 text-md text-[#9CA3AF]">
          Building Legacy of Trust and Excellence.
        </p>

        <div className="mt-10 flex flex-row h-96">
          {/* Left side */}
          <ul className="flex flex-col w-1/2 justify-evenly">
            {["1989", "1987", "2003", "2012", "2018", "2024"].map(
              (step, index) => (
                <React.Fragment key={index}>
                  <li
                    onClick={() => setOptions(step)}
                    className={`${
                      options === step ? "font-bold" : ""
                    } group cursor-pointer flex flex-row justify-between items-center w-[90%] hover:font-bold duration-200`}
                  >
                    {step}
                  </li>
                  {/* <div className="h-[0.6px] bg-[#9CA3AF] w-[90%] rounded-full"></div> */}
                </React.Fragment>
              )
            )}
          </ul>

          {/* Right side */}
          <div className="w-1/2 flex flex-col items-center justify-center">
            <div
              key={options}
              className={`transition-opacity duration-500 ${
                options ? "opacity-100" : "opacity-0"
              }`}
            >
              {options === "1989" && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h1 className="font-semibold text-5xl">Furde Group</h1>
                  <p className="mt-5 text-lg text-[#4B5563]">
                    The foundation of Furde Group was laid in 1989, with a
                    vision to build more than the structures we aimed to create
                    a legacy of trust and quality. Since its inception, we have
                    been synonymous with reliability and excellence in every
                    venture we take.
                  </p>
                </motion.div>
              )}
              {options === "1987" && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h1 className="font-semibold text-5xl">Amar Constructions</h1>
                  <p className="mt-5 text-lg text-[#4B5563]">
                    In 1997, we expanded our horizons with the establishment of
                    Amar constructions. This marked our foray into large scale
                    construction projects, where we delivered numerous iconic
                    structures contributing to the skyline of our city.
                  </p>
                </motion.div>
              )}
              {options === "2003" && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h1 className="font-semibold text-5xl">
                    Furde Constructions Pvt. Ltd.
                  </h1>
                  <p className="mt-5 text-lg text-[#4B5563]">
                    Furde Constructions was born a testament to our growing
                    ambition. We focused on innovative designs and sustainable
                    construction practices, ensuring that every project is met
                    with the highest standards of quality.
                  </p>
                </motion.div>
              )}
              {options === "2012" && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h1 className="font-semibold text-5xl">
                    Furde Group Warehouse
                  </h1>
                  <p className="mt-5 text-lg text-[#4B5563]">
                    2012 saw the inception of Furde Group Warehouse, catering to
                    logistics and warehousing needs of our clients. This venture
                    solidified our reputation as a versatile player in the real
                    estate and construction industry.
                  </p>
                </motion.div>
              )}
              {options === "2018" && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h1 className="font-semibold text-5xl">
                    Rohit Realty (Pune)
                  </h1>
                  <p className="mt-5 text-lg text-[#4B5563]">
                    Through Rohit Realty we diversified our portfolio into the
                    facility management sector along with construction and
                    delivered projects in Pune and Solapur.
                  </p>
                </motion.div>
              )}
              {options === "2024" && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h1 className="font-semibold text-5xl">
                    Furde Infotech Pvt. Ltd.
                  </h1>
                  <p className="mt-5 text-lg text-[#4B5563]">
                    We took a significant leap forward with the establishment of
                    Furde Infotech Pvt. Ltd. This marks our entry into the world
                    of technology and BPO services, driven by the same values
                    that have guided us over three decades - Innovative ideas,
                    Dynamic Results.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className=" flex md:flex-col flex-col py-10 z-10 text-black">
        <div>
          <h1 className=" text-4xl font-bold leading-tight">Our Story</h1>
          <p className="mt-5 text-md text-[#4B5563]">
            Building Legacy of Trust and Excellence.
          </p>
        </div>
        <Link
          href="/careers"
          className="border mt-10 border-black rounded font-semibold text-black text-sm w-52 flex items-center justify-center py-2 hover:bg-[#1d4ed8] hover:border-[#1d4ed8] hover:text-white transition duration-500"
        >
          Explore Careers
        </Link>
      </div>
    </div>
  );
}

export default OurStory;
