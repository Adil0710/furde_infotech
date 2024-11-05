import Image from "next/image";
import Link from "next/link";
import React from "react";
import bg from "@/assets/staticbg.jpg";
import CareersCard from "@/components/CareersCard";

export default function page() {
  return (
    <section>
      <div className="relative min-h-screen">
        <Image
          src={bg}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="-z-[10]" // Ensure the image is behind other content
          priority
        />
        <div className="absolute top-[25%] md:pl-20 px-5 w-1/2">
          <h1 className=" text-4xl font-bold leading-tight text-white">
            About Us
          </h1>
          <h2 className=" mt-8 text-2xl font-bold leading-tight text-white">
          Shape the future with us!
          </h2>
          <p className=" text-white mt-8 text-md">
            At our core, we&apos;re a team that thrives on innovation, integrity, and
            shared success. Here, we value your unique insights, embrace new
            perspectives, and empower you to make a difference. We provide an
            environment where your career can flourish, supported by growth
            opportunities, mentorship, and a collaborative spirit. Join us to
            shape the future and be part of something meaningful.
          </p>
          <div className=" flex flex-row gap-5 mt-16 w-full">
            <Link
              href=""
              className=" border border-white rounded font-semibold text-white text-sm w-40 flex items-center justify-center py-2 hover:bg-white hover:text-black duration-500"
            >
              Search Open Roles
            </Link>
           
          </div>
        </div>
      </div>
      <CareersCard/>
    </section>
  );
}
