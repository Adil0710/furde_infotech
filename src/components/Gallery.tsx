"use client";
import React, { useState } from "react";

const Filters = ["All", "Office", "Events", "Client Visits"];

function Gallery() {
  const [filtervalue, setFilterValue] = useState("All");

  return (
    <div className="bg-black/50 w-full sm:mt-0 -mt-[8.65vh] md:pl-[30%] px-5 py-5 md:pr-[30%] flex items-center justify-between">
      {Filters.map((filter) => (
        <button
          className={`${
            filter === filtervalue
              ? "bg-white text-black"
              : "bg-transparent text-white"
          } cursor-pointer md:text-base text-sm px-3 py-1 rounded-full font-semibold`}
          key={filter}
          onClick={() => setFilterValue(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Gallery;
