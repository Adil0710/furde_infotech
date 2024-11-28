"use client";
import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import NoResultIcon from "@/assets/noresult.svg";
import Image from "next/image";
import CareerCard from "./CareerCard";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { Skeleton } from "./ui/skeleton";
import JobCardLoading from "./JobCardLoading";


type Job = {
  id: string;
  designation: string;
  department: string;
  description: string;
  location: string;
  type: "Full Time" | "Part Time" | "Internship";
};

export default function CurrentOpenRoles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [entryjobs, setEntryJobs] = useState<Job[]>([]);
  const [entryLoading, setEntryLoading] = useState(true);
  const [experiencedjobs, setExperiencedJobs] = useState<Job[]>([]);
  const [experiencedLoading, setExperiencedLoading] = useState(true);

  const { toast } = useToast();

  useEffect(() => {
    fetchEntryJobs();
    fetchExperiencedJobs();
  }, []);

  const fetchEntryJobs = async () => {
    setEntryLoading(true);
    try {
      const response = await axios.get<{ jobs: Job[] }>(
        "/api/get-job?level=Entry&limit=3"
      );
      setEntryJobs(response.data.jobs);
    } catch (error) {
      console.log(error);
      toast({
        title: "Try Refreshing",
        description: `Failed to load jobs:- ${error}`,
        variant: "destructive",
      });
    } finally {
      setEntryLoading(false);
    }
  };

  const fetchExperiencedJobs = async () => {
    setExperiencedLoading(true);
    try {
      const response = await axios.get<{ jobs: Job[] }>(
        "/api/get-job?level=Experienced&limit=3"
      );
      setExperiencedJobs(response.data.jobs);
      console.log("Entry data", response.data);
    } catch (error) {
      console.log(error);
      toast({
        title: "Try Refreshing",
        description: `Failed to load jobs:- ${error}`,
        variant: "destructive",
      });
    } finally {
      setExperiencedLoading(false);
    }
  };

  // Filtered job arrays based on search term
  const filteredJobs = entryjobs.filter(
    (job) =>
      job.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredExperiencedJobs = experiencedjobs.filter(
    (job) =>
      job.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className=" flex flex-col md:flex-row md:gap-0 gap-10 justify-between items-start md:items-center">
        <h1 className=" text-4xl font-bold leading-tight uppercase">
          explore careers
        </h1>
        {/* Search */}
        <div className="relative md:w-1/2 w-full">
          <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <Input
            className="bg-[#D9D9D9] pl-10 shadow-none"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <h2 className="mt-14 text-2xl font-bold text-gray-800 leading-tight">
        Current Open Roles
      </h2>

      {/* Entry Level Jobs */}
      <div className="mt-8 flex justify-between items-center w-full">
        <h3 className="md:text-xl text-base font-semibold text-gray-800">
          Entry Level Roles
        </h3>
        {entryLoading ? (
          <Skeleton className="sm:w-20 w-14 sm:h-5 h-3" />
        ) : (
          <Link
            href="/entry-level-roles"
            className={` ${
              filteredJobs.length === 0
                ? "hidden"
                : "block text-[#1D4ED8] hover:text-[#1E3A8A] duration-200"
            }`}
          >
            View More
          </Link>
        )}
      </div>
      <div className="grid mt-12 grid-cols-1 md:grid-cols-3 gap-10">
        {entryLoading ? (
          <>
            {Array.from({ length: 3 }).map((_, index) => (
              <JobCardLoading key={index} />
            ))}
          </>
        ) : filteredJobs.length === 0 ? (
          <div className="col-span-full flex items-center justify-center flex-col">
            {" "}
            <Image src={NoResultIcon} alt="No Results Found" width={300} />
            <p className="text-center text-lg text-gray-500">
              {searchTerm.length > 0
                ? `No results found for "${searchTerm}"`
                : "No jobs posted"}
            </p>
          </div>
        ) : (
          filteredJobs.map((job) => {
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
          })
        )}
      </div>

      {/* Experienced Level Jobs */}
      <div className="mt-16 flex justify-between items-center w-full">
        <h3 className="md:text-xl text-base font-semibold text-gray-800">
          Experienced Opportunities
        </h3>

        {experiencedLoading ? (
          <Skeleton className="sm:w-20 w-14 sm:h-5 h-3" />
        ) : (
          <Link
            href="/experienced-level-roles"
            className={` ${
              filteredExperiencedJobs.length === 0
                ? "hidden"
                : "block text-[#1D4ED8] hover:text-[#1E3A8A] duration-200"
            }`}
          >
            View More
          </Link>
        )}
      </div>
      <div className="grid mt-12 grid-cols-1 md:grid-cols-3 gap-10">
        {entryLoading ? (
          <>
            {Array.from({ length: 3 }).map((_, index) => (
              <JobCardLoading key={index} />
            ))}
          </>
        ) : filteredExperiencedJobs.length === 0 ? (
          <div className="col-span-full flex items-center justify-center flex-col">
            {" "}
            <Image src={NoResultIcon} alt="No Results Found" width={300} />
            <p className="text-center text-lg text-gray-500">
              {searchTerm.length > 0
                ? `No results found for "${searchTerm}"`
                : "No jobs posted"}
            </p>
          </div>
        ) : (
          filteredExperiencedJobs.map((job) => {
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
          })
        )}
      </div>
    </div>
  );
}
