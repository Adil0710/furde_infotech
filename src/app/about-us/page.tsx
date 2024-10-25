import Image from "next/image";
import React from "react";
import bg from "@/assets/staticbg.jpg";
import Link from "next/link";

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
        <div className="absolute top-[25%] md:pl-20 px-5 w-full">
          <h1 className=" text-4xl font-bold leading-tight text-white">
            About Us
          </h1>

          <div className=" flex flex-row gap-5 mt-10 w-full">
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
    </>
  );
}
