"use client";
import React, { useState } from "react";
import clsx from "clsx";

const Filters = ["All", "Office", "Events", "Client Visits"];

function Gallery() {
  const [filtervalue, setFilterValue] = useState("All");

  return (
    <div className="bg-black/50 w-full sm:mt-0 -mt-[8.65vh] md:pl-[30%] px-5 py-5 md:pr-[30%] flex items-center justify-between">
      {Filters.map((filter) => (
        <button
          className={clsx(
            "cursor-pointer md:text-base text-sm px-3 py-1 rounded-full font-semibold",
            {
              "bg-white text-black": filter === filtervalue,
              "bg-transparent text-white": filter !== filtervalue,
            }
          )}
          key={filter}
          onClick={() => {
            console.log("Filter clicked:", filter); // Debugging
            setFilterValue(filter);
          }}
          onTouchStart={() => setFilterValue(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Gallery;
