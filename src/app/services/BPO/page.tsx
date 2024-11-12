import Image from "next/image";
import Link from "next/link";
import React from "react";
import bg from "@/assets/staticbg.jpg";

export default function BPO() {
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
          BPO SERVICES
          </h1>

          <p className=" text-white mt-8 text-md">
            Unlock the potential of your business with our comprehensive BPO
            solutions, tailored to streamline operations and drive growth. From
            customer support and back-office management to specialized services
            in finance, HR, and IT, our expertise enables you to focus on core
            strategies while we handle the details. With 24/7 support,
            industry-specific knowledge, and dedicated teams, we ensure seamless
            integration and optimized efficiency across all functions. Partner
            with us to transform complex challenges into streamlined solutions,
            enhancing productivity and delivering measurable results for your
            organization.
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
    </section>
  );
}
