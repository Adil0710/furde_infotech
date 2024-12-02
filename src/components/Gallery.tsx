"use client";
import React, { useState } from "react";
import clsx from "clsx";

const Filters = ["All", "Office", "Events", "Client Visits"];

function Gallery() {
  const [filtervalue, setFilterValue] = useState("All");

  return (
    <div className="glass-effect z-20 w-full absolute sm:bottom-0 bottom-10 md:pl-[30%] px-5 py-5 md:pr-[30%] flex items-center justify-between">
      {Filters.map((filter) => (
        <button
          className={clsx(
            "cursor-pointer md:text-base text-sm z-50 px-3 py-1 rounded-full font-semibold",
            {
              "bg-white text-black": filter === filtervalue,
              "bg-transparent text-white": filter !== filtervalue,
            }
          )}
          key={filter}
          onClick={() => {
            setFilterValue(filter);
          }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Gallery;
