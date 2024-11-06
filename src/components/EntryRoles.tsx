"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import  NoResultIcon from '@/assets/noresult.svg';
import Image from "next/image";

// Data for the jobs
const jobs = [
  {
    title: "Software Developer",
    team: "Development",
    description:
      "Develop and maintain high-quality software applications while collaborating with cross-functional teams to deliver innovative solutions.",
    location: "Solapur, Maharashtra",
    type: "Full Time",
  },
  {
    title: "Data Entry Specialist",
    team: "Information Management Team",
    description:
      "Accurately transcribe documents and data, ensuring high standards of quality and efficiency in all written communications.",
    location: "Solapur, Maharashtra",
    type: "Full Time",
  },
  {
    title: "Web Designer",
    team: "Design Team",
    description:
      "Assist the design team in creating compelling visual content and innovative solutions while gaining hands-on experience in a collaborative environment.",
    location: "Solapur, Maharashtra",
    type: "Full Time",
  },  {
    title: "Software Developer",
    team: "Development",
    description:
      "Develop and maintain high-quality software applications while collaborating with cross-functional teams to deliver innovative solutions.",
    location: "Solapur, Maharashtra",
    type: "Full Time",
  },
  {
    title: "Data Entry Specialist",
    team: "Information Management Team",
    description:
      "Accurately transcribe documents and data, ensuring high standards of quality and efficiency in all written communications.",
    location: "Solapur, Maharashtra",
    type: "Full Time",
  },
  {
    title: "Web Designer",
    team: "Design Team",
    description:
      "Assist the design team in creating compelling visual content and innovative solutions while gaining hands-on experience in a collaborative environment.",
    location: "Solapur, Maharashtra",
    type: "Full Time",
  },
];


type cardProps = {
  title: string;
  team: string;
  description: string;
  location: string;
  type: string;
};

const CareerCard = ({
  title,
  team,
  description,
  location,
  type,
}: cardProps) => (
  <div className="cardShadow bg-white overflow-hidden min-h-[350px] rounded-lg text-[#111827] flex justify-between flex-col">
    <div className="py-5 px-5">
      <p className="font-semibold text-2xl">{title}</p>
      <p className="text-xl font-semibold mt-2 text-[#374151]">{team}</p>
      <p className="mt-4">{description}</p>
      <p className="mt-4 font-semibold text-[#6B7280] flex flex-row items-center gap-2">
        <FaLocationDot size={20} />
        {location}
      </p>
      <p className="mt-3 font-semibold text-[#6B7280] flex flex-row items-center gap-2">
        <MdAccessTimeFilled size={20} />
        {type}
      </p>
    </div>
    <div className="flex justify-end pb-5 px-5">
      <Link
        href=""
        className="rounded text-white text-sm w-36 flex items-center gap-2 justify-center py-2 bg-[#1d4ed8] hover:bg-[#1E3A8A] duration-500"
      >
        Apply Now
      </Link>
    </div>
  </div>
);


export default function EntryRoles() {
    const [searchTerm, setSearchTerm] = useState("");

    // Filtered job arrays based on search term
    const filteredJobs = jobs.filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
  
    return (
      <div>
        {/* Search */}
        <div className="relative mt-10 w-1/2">
          <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <Input
            className="bg-[#D9D9D9] pl-10 shadow-none"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <h2 className="mt-14 text-2xl font-bold text-gray-800 leading-tight">
          Current Open Roles
        </h2>
  
        {/* Entry Level Jobs */}
        <div className="mt-8 flex justify-between items-center w-full">
          <h3 className="text-xl font-semibold text-gray-800">
            Entry Level Roles
          </h3>
          <Link href="/entry-level-roles" className="text-[#1D4ED8]">
            View More
          </Link>
        </div>
        <div className={`${filteredJobs.length > 0 ? "grid" : "block"} mt-8 grid-cols-1 sm:grid-cols-3 gap-10`}>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <CareerCard
                key={index}
                title={job.title}
                team={job.team}
                description={job.description}
                location={job.location}
                type={job.type}
              />
            ))
          ) : (
            <div className=" h-[350px] w-full flex flex-col justify-between items-center">
                <Image src={NoResultIcon} alt="No Results Found" width={300}/>
              <p className="text-center text-lg text-gray-500">
                No results found for "{searchTerm}"
              </p>
            </div>
  
          )}
        </div>
  
       
       
      </div>
    );
}

 