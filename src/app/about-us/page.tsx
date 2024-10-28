import Image from "next/image";
import React from "react";
import bg from "@/assets/staticbg.jpg";
import Link from "next/link";
import WhyChooseUsAbout from "@/components/WhyChooseUsAbout";
import SteeringOurMission from "@/components/SteeringOurMission";

export default function AboutUs() {
  return (
    <>
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
          <p className=" text-white mt-10 text-md">
            Furde Infotech is driven by a commitment to innovation, excellence,
            and integrity, continuously evolving to meet the challenges of a
            dynamic business landscape. With a strong foundation built on
            dedication and a passion for delivering impactful solutions, we
            empower businesses to achieve more.Furde Infotech is driven by a
            commitment to innovation, excellence, and integrity, continuously
            evolving to meet the challenges of a dynamic business landscape.
            With a strong foundation built on dedication and a passion for
            delivering impactful solutions, we empower businesses to achieve
            more.
          </p>
          <div className=" flex flex-row gap-5 mt-16 w-full">
            <Link
              href=""
              className=" border border-white rounded font-semibold text-white text-sm w-36 flex items-center justify-center py-2 hover:bg-white hover:text-black duration-500"
            >
              Our Story
            </Link>
            <Link
              href=""
              className=" border border-white rounded font-semibold text-white text-sm w-36 flex items-center justify-center py-2 hover:bg-white hover:text-black duration-500"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <WhyChooseUsAbout/>
      <SteeringOurMission/>
    </>
  );
}
