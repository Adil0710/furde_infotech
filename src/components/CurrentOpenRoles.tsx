"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import  NoResultIcon from '@/assets/noresult.svg';
import Image from "next/image";
import CareerCard from "./CareerCard";

// Data for the jobs
const jobs = [
  {
    id: 1,
    designation: "Software Developer",
    department: "Development",
    description:
      "Develop and maintain high-quality software applications while collaborating with cross-functional departments to deliver innovative solutions.",
    location: "Solapur, Maharashtra",
    type: "Full Time",
  },
  {
    id: 2,
    designation: "Data Entry Specialist",
    department: "Information Management department",
    description:
      "Accurately transcribe documents and data, ensuring high standards of quality and efficiency in all written communications.",
    location: "Solapur, Maharashtra",
    type: "Full Time",
  },
  {
    id: 3,
    designation: "Web Designer",
    department: "Design department",
    description:
      "Assist the design department in creating compelling visual content and innovative solutions while gaining hands-on experience in a collaborative environment.",
    location: "Solapur, Maharashtra",
    type: "Full Time",
  },
];

const experiencedJobs = [
  {
    id: 1,
    designation: "Operations department Lead",
    department: "Operations Excellence department",
    description:
      "Assist the design department in creating compelling visual content and innovative solutions while gaining hands-on experience in a collaborative environment.",
    location: "Solapur, Maharashtra",
    type: "Full Time",
  },
  {
    id: 2,
    designation: "HR Executive",
    department: "Human Resources",
    description:
      "Manage recruitment, employee relations, and performance management to foster a positive workplace culture and ensure organizational effectiveness",
    location: "Solapur, Maharashtra",
    type: "Full Time",
  },
  {
    id: 3,
    designation: "Front Desk Executive",
    department: "Front Desk department",
    description:
      "Provide exceptional service by addressing customer inquiries, resolving issues, and ensuring a positive experience with our products.",
    location: "Solapur, Maharashtra",
    type: "Full Time",
  },
];


export default function CurrentOpenRoles() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered job arrays based on search term
  const filteredJobs = jobs.filter((job) =>
    job.designation.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredExperiencedJobs = experiencedJobs.filter((job) =>
    job.designation.toLowerCase().includes(searchTerm.toLowerCase())
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
              key={job.id}
              designation={job.designation}
              department={job.department}
              description={job.description}
              location={job.location}
              type={job.type}
            />
          ))
        ) : (
          <div className=" h-[350px] w-full flex flex-col justify-between items-center">
              <Image src={NoResultIcon} alt="No Results Found" width={300}/>
            <p className="text-center text-lg text-gray-500">
              No experienced jobs found for &quot;{searchTerm}&quot;
            </p>
          </div>

        )}
      </div>

      {/* Experienced Level Jobs */}
      <div className="mt-16 flex justify-between items-center w-full">
        <h3 className="text-xl font-semibold text-gray-800">
          Experienced Opportunities
        </h3>
        <Link href="/experienced-level-roles" className="text-[#1D4ED8]">
          View More
        </Link>
      </div>
      <div className={`${filteredExperiencedJobs.length > 0 ? "grid" : "block"} mt-8 grid-cols-1 sm:grid-cols-3 gap-10`}>
        {filteredExperiencedJobs.length > 0 ? (
          filteredExperiencedJobs.map((job, index) => (
            <CareerCard
              key={job.id}
              designation={job.designation}
              department={job.department}
              description={job.description}
              location={job.location}
              type={job.type}
            />
          ))
        ) : (
          <div className=" h-[350px] w-full flex-col flex justify-between items-center">
               <Image src={NoResultIcon} alt="No Results Found" width={300}/>
            <p className="text-center text-lg text-gray-500">
              No experienced jobs found for &quot;{searchTerm}&quot;
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
