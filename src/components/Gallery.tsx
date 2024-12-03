"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import floor3 from "@/assets/floor3.jpeg";
import floor5 from "@/assets/floor5.jpeg";
import floor6 from "@/assets/floor6.jpeg";
import reception from "@/assets/reception.jpeg";
import Image from "next/image";

const Filters = ["All", "Office", "Events", "Client Visits"];

// Sample data to populate the grid
const items = [
  {
    id: 1,
    category: "Office",
    title: "Office Meeting",
    img: floor3,
    orientation: "horizontal",
  },
  {
    id: 2,
    category: "Events",
    title: "Annual Party",
    img: floor3,
    orientation: "horizontal",
  },
  {
    id: 3,
    category: "Client Visits",
    title: "Client Presentation",
    img: floor5,
    orientation: "horizontal",
  },
  {
    id: 4,
    category: "Office",
    title: "Workspace Setup",
    img: reception,
    orientation: "vertical",
  },
  {
    id: 5,
    category: "Events",
    title: "Team Outing",
    img: floor6,
    orientation: "horizontal",
  },
  {
    id: 6,
    category: "Client Visits",
    title: "New Client Visit",
    img: floor5,
    orientation: "horizontal",
  },
];

function Gallery() {
  const [filterValue, setFilterValue] = useState("All");

  // Filtered items based on the selected filter value
  const filteredItems =
    filterValue === "All"
      ? items
      : items.filter((item) => item.category === filterValue);

  return (
    <div className="relative w-full min-h-screen bg-gray-100">
      {/* Filter Buttons */}
      <div className="glass-effect z-20 w-full absolute -top-14 md:pl-[30%] px-5 py-5 md:pr-[30%] flex items-center justify-between">
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
                layoutId="galleryAtiveFilter"
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

      {/* Grid Container */}
      {/* Wrap grid with AnimatePresence */}
      <AnimatePresence>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 md:px-20 px-5 lg:grid-cols-4 sm:gap-8 gap-4 pt-20 pb-12">
          {filteredItems.map((item) => (
            <motion.div
              key={`${filterValue}-${item.id}`}
              className={clsx(
                "relative group overflow-hidden flex items-center justify-center rounded-lg",
                item.orientation === "vertical"
                  ? "col-span-1 row-span-2 sm:pt-3 pt-0"
                  : "col-span-1 row-span-1"
              )}
              initial={{ opacity: 0, scale: 0.5, y: 200 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 200 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src={item.img}
                alt={item.title}
                layout="responsive"
                objectFit="cover"
                className="rounded-lg group-hover:blur-sm transition"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                className="absolute z-40 hidden bg-black/50 h-full w-full px-2 transition group-hover:flex rounded-lg items-center justify-center"
              >
                <p className=" font-semibold text-white">{item.title}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
}

export default Gallery;
