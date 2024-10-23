import React from "react";
import Image from "next/image";
import bg from "@/assets/staticbg.jpg";
import bgin from "@/assets/staticbginverted.jpg";
import who1 from "@/assets/who1.png";
import who2 from "@/assets/who2.png";
import who3 from "@/assets/who3.png";
import who4 from "@/assets/who4.png";
import Link from "next/link";
import WordRotate from "./ui/word-rotate";

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

      <div className="relative min-h-screen">
        <Image
          src={bgin}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="-z-[10]" // Ensure the image is behind other content
        />
        <div className=" md:pl-20 px-5 w-[44.5%]">
          <h1 className="text-white text-4xl font-bold leading-tight">
            Who We Are
          </h1>

          <h2 className=" text-white font-semibold text-3xl mt-10 flex items-center gap-2">
            Our Foundation of Success
          </h2>

          <p className=" text-[#9CA3AF] mt-5 text-md">
            Our foundation is anchored in four essential pillars of success.
          </p>
        </div>

        <div className="grid text-white md:pl-20 px-5 md:pr-20 grid-cols-1 sm:grid-cols-4 gap-5 mt-12">
          <div className="group relative border border-r-white bg-neutral-900 rounded-xl min-h-[350px] max-h-[350px] overflow-hidden">
            {/* Image with reduced height on hover */}
            <Image
              src={who1}
              alt="client centered approach"
              className="transition-all duration-500 ease-in-out transform scale-100 group-hover:scale-100 group-hover:h-48 h-full object-cover w-full"
            />

            {/* Title on the image with fade-out effect on hover */}
            <div className="absolute w-full bottom-0 left-0 py-5 px-5 glass-effectw transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
              <p className="font-medium w-[60%] text-xl">
                Client Centered Approach
              </p>
            </div>

            {/* Text that appears below the image with fade-in effect on hover */}
            <div className="absolute w-full left-0 py-3 px-3 bg-neutral-900 transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100 z-10">
              <p className="mt-5 text-sm">
                We prioritize understanding and addressing the unique needs of
                every client, ensuring tailored solutions and lasting
                partnerships.
              </p>
            </div>
          </div>

          {/* Other grid items */}
          <div className="group relative border border-r-white bg-neutral-900 rounded-xl min-h-[350px] max-h-[350px] overflow-hidden">
            {/* Image with reduced height on hover */}
            <Image
              src={who2}
              alt="client centered approach"
              className="transition-all duration-500 ease-in-out transform scale-100 group-hover:scale-100 group-hover:h-48 h-full object-cover w-full"
            />

            {/* Title on the image with fade-out effect on hover */}
            <div className="absolute w-full bottom-0 left-0 py-5 px-5 glass-effectw transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
              <p className="font-medium w-[60%] text-xl">
                Operational Excellence
              </p>
            </div>

            {/* Text that appears below the image with fade-in effect on hover */}
            <div className="absolute w-full left-0 py-3 px-3 bg-neutral-900 transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100 z-10">
              <p className="mt-5 text-sm">
                Focused on optimizing workflows and processes, we drive
                efficiency and growth for your business with seamless execution.
              </p>
            </div>
          </div>
          <div className="group relative border border-r-white bg-neutral-900 rounded-xl min-h-[350px] max-h-[350px] overflow-hidden">
            {/* Image with reduced height on hover */}
            <Image
              src={who3}
              alt="client centered approach"
              className="transition-all duration-500 ease-in-out transform scale-100 group-hover:scale-100 group-hover:h-48 h-full object-cover w-full"
            />

            {/* Title on the image with fade-out effect on hover */}
            <div className="absolute w-full bottom-0 left-0 py-5 px-5 glass-effectw transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
              <p className="font-medium w-[60%] text-xl">Quality Commitment</p>
            </div>

            {/* Text that appears below the image with fade-in effect on hover */}
            <div className="absolute w-full left-0 py-3 px-3 bg-neutral-900 transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100 z-10">
              <p className="mt-5 text-sm">
                We uphold the highest standards in service delivery, ensuring
                precision, reliability, and satisfaction in every project.
              </p>
            </div>
          </div>
          <div className="group relative border border-r-white bg-neutral-900 rounded-xl min-h-[350px] max-h-[350px] overflow-hidden">
            {/* Image with reduced height on hover */}
            <Image
              src={who4}
              alt="client centered approach"
              className="transition-all duration-500 ease-in-out transform scale-100 group-hover:scale-100 group-hover:h-48 h-full object-cover w-full"
            />

            {/* Title on the image with fade-out effect on hover */}
            <div className="absolute w-full bottom-0 left-0 py-5 px-5 glass-effectw transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
              <p className="font-medium w-[60%] text-xl">
                Compliance & Reliability
              </p>
            </div>

            {/* Text that appears below the image with fade-in effect on hover */}
            <div className="absolute w-full left-0 py-3 px-3 bg-neutral-900 transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100 z-10">
              <p className="mt-5 text-sm">
                Adhering to industry regulations, we provide compliant and
                dependable solutions you can trust for long-term success.
              </p>
            </div>
          </div>
        </div>

        <div className=" md:pl-20 px-5 mt-12  ">
          <p className=" text-[#9CA3AF] text-md">
            Discover our story and explore what sets us apart.
          </p>
          <Link
              href=""
              className=" border mt-5 border-white rounded font-semibold text-white text-sm w-36 flex items-center justify-center py-2 hover:bg-white hover:text-black duration-500"
            >
              About Us
            </Link>
        </div>
      </div>
    </>
  );
}
