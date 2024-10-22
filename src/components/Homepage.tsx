import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import bg from "@/assets/staticbg.jpg";
import bgin from "@/assets/staticbginverted.jpg";
import Link from "next/link";
import WordRotate from "./ui/word-rotate";
import { Separator } from "./ui/separator";

export default function Homepage() {
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
        <div className="absolute top-[25%] px-5 pl-10 w-[44%]">
          <h1 className="text-[#9CA3AF] text-6xl font-semibold leading-tight">
            Welcome to <span className="text-white">FURDE INFOTECH</span>
          </h1>

          <h2 className=" text-[#9CA3AF] font-semibold text-2xl mt-5 flex items-center gap-2">
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
            KPO, and BPO solutions tailored to meet the unique needs of each
            client. Our approach focuses on driving operational excellence,
            enabling businesses to streamline workflows and enhance
            productivity.{" "}
          </p>

          <div className=" flex flex-row gap-5 mt-7 w-full">
            <Link
              href=""
              className=" border border-white rounded text-white text-sm w-36 flex items-center justify-center py-2"
            >
              Explore Services
            </Link>
            <Link
              href=""
              className=" border border-white rounded text-white text-sm w-36 flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="relative min-h-screen">
        <Image
          src={bgin}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="-z-[10]" // Ensure the image is behind other content
        />
        <div className=" px-5 pl-10 w-[44%]">
          <h1 className="text-white text-4xl font-semibold leading-tight">
            Who We Are
          </h1>

          <h2 className=" text-[#9CA3AF] font-semibold text-3xl mt-10 flex items-center gap-2">
            Our Foundation of Success
          </h2>

          <p className=" text-white mt-5 text-md">
            Our foundation is anchored in four essential pillars of success.
          </p>
        </div>

        <div className="grid text-white pl-10 pr-20 grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="border border-r-white bg-neutral-800 rounded-lg">
           
          </div>
          <div className="border border-r-white bg-neutral-800 rounded-lg">2</div>
          <div className="border border-r-white bg-neutral-800 rounded-lg">3</div>
        </div>
      </div>
    </>
  );
}
