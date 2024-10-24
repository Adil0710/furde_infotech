import React from "react";
import bgfooter from "@/assets/footerbg.jpg";
import Image from "next/image";
import Link from "next/link";
import logomain from "@/assets/fitlogo.png";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="relative min-h-screen">
      <Image
        src={bgfooter}
        alt="Background Image"
        fill
        quality={100}
        className="-z-[10] object-cover"
        priority // Optimizes the background image loading
      />

      <div className=" flex md:flex-row flex-col md:pl-20 md:pr-20 px-5 py-10 z-10 text-white">
        {/* Leftside */}
        <div className=" w-1/2">
          <Link href="/">
            <Image src={logomain} alt="FIT logo" height={50} width={150} />
          </Link>

          <Link href="" className=" mt-10 flex flex-col">
            <p className=" flex flex-row text-3xl gap-2">
              <FaLocationDot /> Solapur{" "}
            </p>
            <p className=" text-[#9CA3AF] mt-2">
              Furde complex, Damaninagar , Solapur-413001, Maharashtra, India
            </p>
          </Link>

          <Link href="" className=" mt-10 flex flex-col">
            <p className=" flex flex-row text-3xl gap-2">
              <FaLocationDot /> Pune{" "}
            </p>
            <p className=" text-[#9CA3AF] mt-2">
            SNO -151/5A, FL No-B1101, Sukhwani Emerald, Magarpatta Road Hadapsar, Pune -411028 Maharashtra, India
            </p>
          </Link>
        </div>

        {/* Rightside */}
        <div className=" w-1/2"></div>
      </div>
    </div>
  );
}
