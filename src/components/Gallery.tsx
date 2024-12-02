"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const Filters = ["All", "Office", "Events", "Client Visits"];

function Gallery() {
  const [filterValue, setFilterValue] = useState("All");

  return (
    <div className="glass-effect z-20 w-full absolute sm:bottom-0 bottom-10 md:pl-[30%] px-5 py-5 md:pr-[30%] flex items-center justify-between">
      {Filters.map((filter) => (
        <motion.button
          className={clsx(
            "relative z-10 cursor-pointer md:text-base text-sm font-semibold px-4 py-1.5 transition rounded-full",
            {
              "text-black font-bold": filter === filterValue,
              "text-white": filter !== filterValue,
            }
          )}
          key={filter}
          onClick={() => setFilterValue(filter)}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          {filter}
          {filter === filterValue && (
            <motion.span
              className="absolute inset-0 -z-10 rounded-full bg-white"
              layoutId="activeFilter"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}

export default Gallery;
