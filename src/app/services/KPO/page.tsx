import Image from "next/image";
import Link from "next/link";
import React from "react";
import bg from "@/assets/staticbg.jpg";
import KPOService from "@/components/KPOService";

export default function KPO() {
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
       <div className="absolute md:top-1/2 top-[67%] left-0 transform -translate-y-[67%] md:-translate-y-1/2 md:pl-20 px-5 md:w-1/2 w-full">
          <h1 className=" text-4xl font-bold leading-tight text-white">
          KPO SERVICES
          </h1>

          <p className=" text-white mt-8 text-md">
            Leverage specialized expertise and in-depth research to drive
            informed decisions and strategic growth for your business. Our KPO
            services provide high-value support across critical functions,
            including market research, data analysis, and business intelligence,
            tailored to meet your unique needs. With a focus on accuracy,
            confidentiality, and actionable insights. From financial
            analysis to risk management, our team is dedicated to delivering
            knowledge-driven solutions that enhance efficiency and foster
            innovation. Let us be your partner in unlocking potential through
            advanced, data-centric strategies.
          </p>
          <div className=" flex flex-row gap-5 mt-16 w-full">
            <Link
              href="/contact-us"
              className=" border border-white rounded font-semibold text-white text-sm w-40 flex items-center justify-center py-2 hover:bg-white hover:text-black duration-500"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <KPOService/>
    </section>
  );
}
