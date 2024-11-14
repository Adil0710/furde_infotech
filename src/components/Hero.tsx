"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import bg from "@/assets/staticbg.jpg";
import Link from "next/link";
import WordRotate from "./ui/word-rotate";
import { FaUserFriends } from "react-icons/fa";

export default function Hero() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    (window as any).Calendly.initPopupWidget({
      url: "https://calendly.com/adilpatel-fit/30min",
    });
    return false;
  };
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
          <h1 className="text-[#9CA3AF] md:text-7xl text-2xl font-bold ">
            Welcome to{" "}
            <span className="text-white">
              FURDE <br /> INFOTECH
            </span>
          </h1>

          <h2 className=" text-[#9CA3AF] font-semibold md:text-2xl text-base mt-10 flex sm:flex-row flex-col sm:items-center sm:gap-2">
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

          <p className=" text-white mt-12 text-md">
            Furde Infotech Pvt. Ltd. is dedicated to delivering cutting-edge IT,
            KPO, and BPO <br />
            solutions tailored to meet the unique needs of each client. Our
            approach focuses <br /> on driving operational excellence, enabling
            businesses to streamline workflows <br /> and enhance productivity.{" "}
          </p>

          <div className=" flex flex-row gap-5 mt-10 w-full">
            <button
              type="button"
              onClick={handleClick}
              className="border border-white rounded bg-transparent text-white text-sm w-36 flex items-center gap-2 justify-center py-2 hover:bg-[#F43F5E] hover:border-[#F43F5E] duration-500"
            >
              <link
                href="https://assets.calendly.com/assets/external/widget.css"
                rel="stylesheet"
              />
              Plan a Call <FaUserFriends />
            </button>

            <Link
              href="/contact-us"
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
