import Link from "next/link";
import React from "react";
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


export default function CareersCard() {
  return (
    <div className="bg-white md:pl-20 md:pr-20 px-5 py-10 text-black">
        <h1 className=" text-4xl font-bold leading-tight">
          ENTRY LEVEL INTERNSHIPS
        </h1>
      <div className="mt-10 flex justify-between items-center">
      <p className=" text-[#4B5563] ">Kickstart Your Career Journey.</p>
        <Link href="/entry-level-roles" className=" text-[#1D4ED8]">
          View More
        </Link>
      </div>

      <div className="grid mt-12 grid-cols-1 sm:grid-cols-3 gap-10">
        {jobs.map((job, index) => {
          return (
            <CareerCard
              key={job.id}
              designation={job.designation}
              department={job.department}
              description={job.description}
              location={job.location}
              type={job.type}
            />
          );
        })}
      </div>
      <h1 className="mt-28 text-4xl font-bold leading-tight uppercase">
          Experienced Opportunities
        </h1>
      <div className=" mt-10 flex justify-between items-center">
      <p className=" text-[#4B5563] ">Bring Your Expertise to Our department.</p>
        
        <Link href="/experienced-level-roles" className=" text-[#1D4ED8]">
          View More
        </Link>
      </div>

      <div className="grid mt-12 grid-cols-1 sm:grid-cols-3 gap-10">
        {experiencedJobs.map((experiencedjob, index) => {
          return (
            <CareerCard
              key={index}
              designation={experiencedjob.designation}
              department={experiencedjob.department}
              description={experiencedjob.description}
              location={experiencedjob.location}
              type={experiencedjob.type}
            />
          );
        })}
      </div>

      <h1 className="mt-28 text-4xl font-bold leading-tight uppercase">
        your opinion matters
      </h1>
      <p className=" text-[#4B5563] mt-10">Bring Your Expertise to Our department.</p>

      <div className=" flex flex-row gap-5 mt-8 w-full">
       
      <Link
          href=""
          className=" border border-black rounded font-semibold text-black text-sm w-44 flex items-center justify-center py-2 duration-500"
        >
          Google Search
        </Link>
        <Link
          href=""
          className=" border border-black rounded font-semibold text-black text-sm w-44 flex items-center justify-center py-2 duration-500"
        >
         Social Media
        </Link>
        <Link
          href=""
          className=" border border-black rounded font-semibold text-black text-sm w-44 flex items-center justify-center py-2 duration-500"
        >
          Referral from a Friend
        </Link>
        <Link
          href=""
          className=" border border-black rounded font-semibold text-black text-sm w-44 flex items-center justify-center py-2 duration-500"
        >
          Event or conference
        </Link>
        <Link
          href=""
          className=" border border-black rounded font-semibold text-black text-sm w-44 flex items-center justify-center py-2 duration-500"
        >
          Job Board
        </Link>
        <Link
          href=""
          className=" border border-black rounded font-semibold text-black text-sm w-44 flex items-center justify-center py-2 duration-500"
        >
         Others
        </Link>
       
      </div>
    </div>
  );
}
