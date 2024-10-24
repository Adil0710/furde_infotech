import React from "react";
import Image from "next/image";
import bg from "@/assets/staticbg.jpg";
import Link from "next/link";
import WordRotate from "./ui/word-rotate";

export default function Hero() {
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
        />
        <div className="absolute top-[25%] md:pl-20 px-5 w-full">
          <h1 className="text-[#9CA3AF] md:text-6xl text-2xl font-bold leading-tight">
            Welcome to{" "}
            <span className="text-white">
              FURDE <br /> INFOTECH
            </span>
          </h1>

          <h2 className=" text-[#9CA3AF] font-semibold md:text-2xl text-base mt-5 flex sm:flex-row flex-col sm:items-center sm:gap-2">
            Empowering businesses with{" "}
            <span className=" text-white">
              {" "}
              <WordRotate
                words={[
                  "Innovative Strategies",
                  "Unmatched Expertise",
                  "Lasting Partnerships",
                  "Seamless Experience",
                ]}
              />
            </span>
          </h2>

          <p className=" text-white mt-7 text-md">
            Furde Infotech Pvt. Ltd. is dedicated to delivering cutting-edge IT,
            KPO, and BPO <br />
            solutions tailored to meet the unique needs of each client. Our
            approach focuses <br /> on driving operational excellence, enabling
            businesses to streamline workflows <br /> and enhance productivity.{" "}
          </p>

          <div className=" flex flex-row gap-5 mt-7 w-full">
            <Link
              href=""
              className=" border border-white rounded font-semibold text-white text-sm w-36 flex items-center justify-center py-2 hover:bg-white hover:text-black duration-500"
            >
              Explore Services
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
