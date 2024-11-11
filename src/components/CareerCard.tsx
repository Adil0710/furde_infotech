import Link from 'next/link';
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6';
import { MdAccessTimeFilled } from 'react-icons/md';
type cardProps = {
    designation: string;
    department: string;
    description: string;
    location: string;
    type: string;
  };
function CareerCard({
    designation,
    department,
    description,
    location,
    type,
  }: cardProps) {
  return (
    <div className="cardShadow bg-white  overflow-hidden min-h-[350px] rounded-lg text-[#111827] flex justify-between flex-col">
    <div className="py-5 px-5">
      <p className="font-semibold text-2xl">{designation}</p>
      <p className="text-xl font-semibold  mt-2 text-[#374151]">{department}</p>
      <p className=" mt-4">{description}</p>
      <p className=" mt-4 font-semibold text-[#6B7280] flex flex-row items-center gap-2">
        <FaLocationDot size={20} />
        {location}
      </p>
      <p className=" mt-3 font-semibold text-[#6B7280] flex flex-row items-center gap-2">
        <MdAccessTimeFilled size={20} />
        {type}
      </p>
    </div>
    <div className="flex justify-end pb-5 px-5">
      <Link
         href={{
          pathname: `/apply/${designation.replace(/\s+/g, "-").toLowerCase()}`, // Dynamic route based on job designation
          query: { designation }, // Pass job details
        }}
        className=" rounded text-white text-sm w-36 flex items-center gap-2 justify-center py-2 bg-[#1d4ed8] hover:bg-[#1E3A8A] duration-500"
      >
        Apply Now
      </Link>
    </div>
  </div>    
  )
}

export default CareerCard