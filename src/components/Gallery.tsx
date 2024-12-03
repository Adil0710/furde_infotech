"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import floor3 from "@/assets/floor3.jpg";
import floor5 from "@/assets/floor5.jpg";
import floor6 from "@/assets/floor6.jpg";
import reception from "@/assets/reception.jpg";
import Image from "next/image";

const Filters = ["All", "Office", "Events", "Client Visits"];

// Sample data to populate the grid
const items = [
  { id: 1, category: "Office", title: "Office Meeting", img: floor3 },
  { id: 2, category: "Events", title: "Annual Party", img: floor3 },
  {
    id: 3,
    category: "Client Visits",
    title: "Client Presentation",
    img: floor5,
  },
  { id: 4, category: "Office", title: "Workspace Setup", img: reception },
  { id: 5, category: "Events", title: "Team Outing", img: floor6 },
  { id: 6, category: "Client Visits", title: "New Client Visit", img: floor5 },
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
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 py-5 md:pl-20 md:pr-20 space-x-10 space-y-0 pt-20 pb-12" style={{ gridAutoRows: "1fr" }}>
  {filteredItems.map((item) => (
    <motion.div
      key={item.id}
      className={clsx(
        "relative rounded-lg overflow-hidden",
        "flex flex-col items-center justify-center"
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Image
        src={item.img}
        alt={item.title}
        layout="responsive"
        className="rounded-2xl object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-center text-gray-800">
          {item.title}
        </h3>
      </div>
    </motion.div>
  ))}
</div>

    </div>
  );
}

export default Gallery;
