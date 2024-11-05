import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";

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
  },
];

const experiencedJobs = [
  {
    title: "Operations Team Lead",
    team: "Operations Excellence Team",
    description:
      "Assist the design team in creating compelling visual content and innovative solutions while gaining hands-on experience in a collaborative environment.",
    location: "Solapur, Maharashtra",
    type: "Full Time",
  },
  {
    title: "HR Executive",
    team: "Human Resources",
    description:
      "Manage recruitment, employee relations, and performance management to foster a positive workplace culture and ensure organizational effectiveness",
    location: "Solapur, Maharashtra",
    type: "Full Time",
  },
  {
    title: "Front Desk Executive",
    team: "Front Desk Team",
    description:
      "Provide exceptional service by addressing customer inquiries, resolving issues, and ensuring a positive experience with our products.",
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
  <div className="cardShadow bg-white  overflow-hidden min-h-[350px] rounded-lg text-[#111827] flex justify-between flex-col">
    <div className="py-5 px-5">
      <p className="font-semibold text-2xl">{title}</p>
      <p className="text-xl font-semibold  mt-2 text-[#374151]">{team}</p>
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
        href=""
        className=" rounded text-white text-sm w-36 flex items-center gap-2 justify-center py-2 bg-[#1d4ed8] hover:bg-[#1E3A8A] duration-500"
      >
        Apply Now
      </Link>
    </div>
  </div>
);

export default function CareersCard() {
  return (
    <div className="bg-white md:pl-20 md:pr-20 px-5 py-10 text-black">
      <div className=" flex justify-between items-center">
        <h1 className=" text-4xl font-bold leading-tight">
          ENTRY LEVEL INTERNSHIPS
        </h1>
        <Link href="" className=" text-[#1D4ED8]">
          View More
        </Link>
      </div>
      <p className=" text-[#4B5563] mt-10">Kickstart Your Career Journey.</p>

      <div className="grid mt-12 grid-cols-1 sm:grid-cols-3 gap-10">
        {jobs.map((job, index) => {
          return (
            <CareerCard
              key={index}
              title={job.title}
              team={job.team}
              description={job.description}
              location={job.location}
              type={job.type}
            />
          );
        })}
      </div>

      <div className=" mt-28 flex justify-between items-center">
        <h1 className=" text-4xl font-bold leading-tight uppercase">
          Experienced Opportunities
        </h1>
        <Link href="" className=" text-[#1D4ED8]">
          View More
        </Link>
      </div>
      <p className=" text-[#4B5563] mt-10">Bring Your Expertise to Our Team.</p>

      <div className="grid mt-12 grid-cols-1 sm:grid-cols-3 gap-10">
        {experiencedJobs.map((experiencedjob, index) => {
          return (
            <CareerCard
              key={index}
              title={experiencedjob.title}
              team={experiencedjob.team}
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
      <p className=" text-[#4B5563] mt-10">Bring Your Expertise to Our Team.</p>

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
